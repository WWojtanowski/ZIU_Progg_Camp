import { Steps, Box, Text, SimpleGrid, Card, Button, Heading } from "@chakra-ui/react";
import InfoCard from "./InfoCard";
import { CourseStore } from "@/stores/CourseStore";


const testsData = [
  {
    "id": "0001",
    "title": "Python Test",
    "description": "Test jest już dostępny! Uzyskaj minimum 50%, by zaliczyć ten kurs."
  },
  {
    "id": "0002",
    "title": "HTML Test",
    "description": "Test jest już dostępny! Uzyskaj minimum 50%, by zaliczyć ten kurs."
  },
  {
    "id": "0003",
    "title": "CSS Test",
    "description": "Test jest już dostępny! Uzyskaj minimum 50%, by zaliczyć ten kurs."
  },
]


export default function TestsPage() {

  const courses = CourseStore(state => state.courses);

  return (
    <Box as="section" aria-label="Panel testów" py={16}>
      <SimpleGrid gap={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
        {testsData.map(test => (
          <InfoCard 
            key={test.id}
            data={test} 
            route="test"
            cardVariant={courses[test.id]?.testState ?? "disabled"}
            ctaText="Rozwiąż test" 
            testScore={courses[test.id]?.score}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}