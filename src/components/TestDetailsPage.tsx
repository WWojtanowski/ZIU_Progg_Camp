import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Box, Text, Heading, Flex, Button, ProgressCircle, HStack, VStack, Progress } from '@chakra-ui/react';
import { CourseStore } from "@/stores/CourseStore";
import { useNavigate } from 'react-router-dom';

import LoadingCircle from './LoadingCircle';


const testsData = [
  {
    "testId": "0001",
    "title": "Python Test",
    "filename": "python_test"
  },
  {
    "testId": "0002",
    "title": "HTML Test",
    "filename": "html_test"
  },
  {
    "testId": "0003",
    "title": "CSS Test",
    "filename": "css_test"
  },
]



export default function TestDetailsPage() {
  const navigate = useNavigate();

  const [testData, setTestData] = useState(null);
  const [testState, setTestState] = useState("in progress");
  const [questionIdx, setQuestionIdx] = useState(0);
  const [score, setScore] = useState(-1);
  const [answerList, setAnswerList] = useState([]);

  const storeSetTestState = CourseStore(state => state.setTestState);
  const storeSetScore = CourseStore(state => state.setScore);


  const { testId } = useParams();

  const test = testsData.find(
    (c) => c.testId === testId
  );

  if (!test) {
    return <Heading>Test nie istnieje. Skontakuj się z administratorem.</Heading>;
  }


  const testFiles = import.meta.glob(
    "../data/tests/**.json",
    {
      import: "default",
    }
  );

  const loadTest = async () => {

    const path =
      `../data/tests/${test.filename}.json`;

    const importer = testFiles[path];

    const [testData] = await Promise.all([
      importer(),
      new Promise(resolve => setTimeout(resolve, 500))
    ]);

    setTestData(testData);
  }

  useEffect(() => {
    loadTest();
  }, [testId]);



  const saveAnswer = (answer: string) => {
    const newAnswers = [...answerList, answer];
    setAnswerList(newAnswers);

    if ((questionIdx+1) >=  testData.questions.length) {
      checkScore(newAnswers);
      setTestState("done");
    }
    setQuestionIdx(questionIdx+1);
  }

  const checkScore = (answers: string[]) => {
    let currScore = 0;
    testData.correctAnswers.map((correct, index) => {
      if (answers.at(index) === correct.answer) {
        currScore += 1;
      }
    })
    setScore(currScore);

    if (currScore/testData.questions.length >= 0.5) {
      storeSetTestState(testId!, "completed")
    } else {
      storeSetTestState(testId!, "failed")
    }
    storeSetScore(testId!, setDecimal((currScore/testData.questions.length)*100, 2));

  }

  const setDecimal = (num: number, dec: number) => {
    const powerTen = Math.pow(10, dec);
    return Math.round(num*powerTen) / Math.pow(10, dec);
  }

  return (
    <Box as="section" py={16}>
      {testData !== null ? (
        <>
          <Heading>{test.title}</Heading>

          <Progress.Root 
            value={(questionIdx/testData.questions.length)*100} 
            maxW="sm"
          >
            <HStack gap="5">
              <Progress.Track flex="1" bgColor="secondary.foreground">
                <Progress.Range bgColor="secondary.default" />
              </Progress.Track>
              <Progress.ValueText>{setDecimal((questionIdx/testData.questions.length)*100, 2)}%</Progress.ValueText>
            </HStack>
          </Progress.Root>

          {(testState !== "done") && (
            <>
              <Box py={4}>
                <Text fontSize="xl">Pytanie {(questionIdx+1)}.</Text>
                <Text>{testData.questions[questionIdx].content}</Text>
              </Box>

              <Box py={4}>
                <VStack gap="4" align='start'>
                  {testData.questions[questionIdx].answers.map((answer, idx) => (
                    <Button key={idx} variant="secondary" onClick={() => saveAnswer(answer.text)}>
                      {answer.text}
                    </Button>
                  ))}
                </VStack>
              </Box>
            </>
          )}

          {(testState === "done") && (
            <>
              <Box py={4}>
                <Text>Koniec testu!</Text>
                <Text>Wynik: {score}/{testData.questions.length} ({setDecimal((score/testData.questions.length)*100, 2)}%)</Text>
                {(score/testData.questions.length)*100 >= 50 && (
                  <Text>Gratulacje! Zaliczyłeś kurs.</Text>
                )}
                {(score/testData.questions.length)*100 < 50 && (
                  <Text>Niestety nie zaliczyłeś kursu. Spróbuj jeszcze raz.</Text>
                )}
              </Box>
              <Button variant="secondary" onClick={() => navigate('/tests')}>
                Wróć do testów
              </Button>
            </>
          )}
        </>
      ) : (<LoadingCircle />)}
    </Box>
  )
};