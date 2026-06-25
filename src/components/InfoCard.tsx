import { Card, Heading, Text, Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';

interface InfoCardData {
    id: string,
    title: string
    description: string
}

type InfoCardVariant =
  | "default"
  | "disabled"
  | "progress"
  | "completed"
  | "failed";

interface InfoCardProps {
    data: InfoCardData,
    route: string
    cardVariant: InfoCardVariant,
    ctaText: string
    testScore: number | null;
}


export default function InfoCard({ data, route, cardVariant, ctaText, testScore }: InfoCardProps) {
    const navigate = useNavigate();
    
    return (
        <Card.Root key={data.id} variant={cardVariant}>
            <Card.Header>
                <Heading size="md">{data.title}</Heading>
            </Card.Header>
            <Card.Body>
                <Text>
                    {cardVariant === "disabled" ? "Test zablokowany! Należy najpierw ukończyć kurs." :
                    (testScore ? "Wynik: "+testScore+"%" : data.description)}
                </Text>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
                <Button 
                    variant={cardVariant === "disabled" ? "disabled" : "secondary"} 
                    onClick={() => {if (cardVariant !== "disabled") navigate('/'+route+'/'+data.id)}}
                >
                    {ctaText}
                </Button>
            </Card.Footer>
        </Card.Root>
    )
}