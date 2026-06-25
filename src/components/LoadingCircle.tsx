import { ProgressCircle, VStack } from "@chakra-ui/react"

export default function LoadingCircle() {
    return (
        <VStack>
            <ProgressCircle.Root value={null} size="lg">
            <ProgressCircle.Circle>
                <ProgressCircle.Track />
                <ProgressCircle.Range />
            </ProgressCircle.Circle>
            </ProgressCircle.Root>
        </VStack>
    )
}