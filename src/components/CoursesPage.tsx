import { Box, SimpleGrid } from "@chakra-ui/react";
import InfoCard from "./InfoCard";
import { CourseStore } from "@/stores/CourseStore";


const coursesData = [
  {
    "id": "0001",
    "title": "Kurs Python",
    "description": "Polecany dla osób, któzy nie mieli styczności z programowaniem."
  },
  {
    "id": "0002",
    "title": "Kurs HTML",
    "description": "Zacznij tworzyć strony internetowe od podstaw!"
  },
  {
    "id": "0003",
    "title": "Kurs CSS",
    "description": "Stylizuj swoją stonę dzięki CSS!"
  },
]


export default function CoursesPage() {

  const courses = CourseStore(state => state.courses);

  return (
    <Box as="section" aria-label="Panel kursów" py={16}>
      <SimpleGrid gap={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {coursesData.map(course => (
          <InfoCard 
            key={course.id}
            data={course} 
            route="course"
            cardVariant={courses[course.id]?.courseState ?? "default"}
            ctaText="Otwórz kurs" 
            testScore={null}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}