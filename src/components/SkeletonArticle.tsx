import { Skeleton, SkeletonText, Box } from "@chakra-ui/react"

export default function SkeletonArticle() {
    return (
        <Box
            mx="auto"
            bg="surface.article"
            p={8}
            borderRadius="2xl"
            maxW="900px"
        >
            <Skeleton
            height="40px"
            mb={6}
            />

            <SkeletonText
            noOfLines={22}
            gap="4"
            />
        </Box>
    )
}