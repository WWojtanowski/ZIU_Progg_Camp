import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Heading, Menu, Button, Portal, ProgressCircle, Flex, HStack, VStack, Skeleton, SkeletonText } from '@chakra-ui/react';
import { Prose } from './ui/prose';
import Markdown from "react-markdown"
import { ChevronDownIcon } from 'lucide-react';
import { CourseStore } from "@/stores/CourseStore";
import { useNavigate } from 'react-router-dom';
import { ButtonProps } from '@/theme/buttonStyles';

import SkeletonArticle from './SkeletonArticle';
import LoadingCircle from './LoadingCircle';



const coursesData = [
  {
    "courseId": "0001",
    "title": "Kurs Python",
    "folder": "python"
  },
  {
    "courseId": "0002",
    "title": "Kurs HTML",
    "folder": "html"
  },
  {
    "courseId": "0003",
    "title": "Kurs CSS",
    "folder": "css"
  }
];


export default function CourseDetailsPage() {
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState(null);
  const [chapterIdx, setChapterIdx] = useState(0)
  const [chapterContent, setChapterContent] = useState('')
  const [loading, setLoading] = useState(false)
  
  const setCourseState = CourseStore(state => state.setCourseState);
  const setTestState = CourseStore(state => state.setTestState);


  const { courseId } = useParams();

  const course = coursesData.find(
    (c) => c.courseId === courseId
  );

  if (!course) {
    return <Heading>Kurs nie istnieje.</Heading>;
  }


  const courseFiles = import.meta.glob(
    "../data/courses/**/course.json",
    {
      import: "default",
    }
  );


  const markdownFiles = import.meta.glob(
    '../data/courses/**/*.md',
    {
      query: '?raw',
      import: 'default'
    }
  )

  const changeChapter = (idx: number) => {
    setChapterIdx(idx)

    if (idx > 0)
      setCourseState(courseId!, "progress")
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const completeCourse = () => {
    setCourseState(courseId!, "completed")
    setTestState(courseId!, "default")
    navigate('/tests')
  }

  const loadCourse = async () => {
    const path =
      `../data/courses/${course.folder}/course.json`;

    const importer = courseFiles[path];

    const courseData = await importer();

    setCourseData(courseData);
  }

  const loadChapter = async (idx: number, data) => {
    setLoading(true)

    const chapter = data.chapters[idx]

    const path =
      `../data/courses/${course.folder}/${chapter.filename}`

    const importer = markdownFiles[path]

    if (!importer) {
      setChapterContent('# Nie znaleziono rozdziału')
      return
    }

    const [content] = await Promise.all([
      importer(),
      new Promise(resolve => setTimeout(resolve, 200))
    ]);

    setChapterContent(content)

    setLoading(false)
  }


  useEffect(() => {
    loadCourse();
  }, [courseId]);

  useEffect(() => {
    if (!courseData)
      return;
    loadChapter(chapterIdx, courseData)
  }, [courseData, chapterIdx])

  
  const CourseMenu = () => (
    <Menu.Root>
      <Menu.Trigger>
        <Button key="trigger">
            {courseData.chapters[chapterIdx].title}
            <ChevronDownIcon />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {courseData.chapters.map((chapter, idx) => (
              <Menu.Item key={idx} value={chapter.title} onClick={() => changeChapter(idx)}>
                {(idx+1)+". "+chapter.title}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )

  return (
    <Box 
      as="section" 
      layerStyle="glass"
      py={6}
      borderRadius="2xl"
    >
      {courseData !== null ? (
        <>
          <Heading>{course.title}</Heading>
          
          <Box py={4}>
            <CourseMenu />
          </Box>

          <Box layerStyle="glass" py={4}>
            {loading ? (<SkeletonArticle />) : (
              <Prose 
                mx="auto"
                bg="surface.article"
                color="text.primary"
                accentColor="text.secondary"
                p={{ base: 6, md: 10 }}
                borderRadius="2xl"
                maxW="900px"
                boxShadow="xl"
              >
                <Markdown >
                  {chapterContent}
                </Markdown>
              </Prose>
            )}
          </Box>

          <Flex
            py={4}
            align="center"
            justify="space-between"
            wrap="wrap"
            gap={4}
          >
            <Box>
              {chapterIdx > 0 && (
                <Button variant="secondary" onClick={() => changeChapter(chapterIdx-1)}>
                  Poprzedni rozdział
                </Button>
              )}
            </Box>
            <Box>
              {chapterIdx+1 < courseData.chapters.length ? (
                <Button variant="secondary" onClick={() => changeChapter(chapterIdx+1)}>
                  Następny rozdział
                </Button>
              ) : (
                <Button variant="secondary" onClick={() => completeCourse()}>
                  Ukończ kurs
                </Button>
              )}
            </Box>

          </Flex>
        
        </>
      ) : (<LoadingCircle />)}

    </Box>
  )
};