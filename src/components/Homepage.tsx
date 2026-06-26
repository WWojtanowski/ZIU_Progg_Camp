import { Steps, Box, Button, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PageStore } from '@/stores/PageStore';
import { useColorMode } from './ui/color-mode';


export default function Homepage() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isLoggedIn = PageStore((state) => state.isLoggedIn);

  return (
    <Box as="section" aria-label="Strona Główna" py={16}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-between"
        gap={16}
      >
        <VStack
          align="start"
          gap={7}
          maxW="620px"
        >
          <Heading size="2xl">
            Rozpocznij Swoją Karierę Programisty
          </Heading>

          <Text>
            Naucz się programowania od podstaw dzięki interaktywnym lekcjom, praktycznym projektom i nowoczesnym narzędziom programistycznym. Zdobądź praktyczne umiejętności w językach Python, HTML i CSS.
          </Text>

          <HStack>
            <Button 
              variant="primary"
              aria-label='Rozpocznij przygodę'
              onClick={() => navigate(isLoggedIn ? '/courses' : '/login')}
            >
              Rozpocznij przygodę
              <ArrowRight size={18} />
            </Button>
          </HStack>
        </VStack>

        <Box
          position="relative"
          maxW="520px"
          bg="secondary.foreground"
          borderRadius='22px'
          w="full"
          p={8}
        >

          <VStack
            align="stretch"
            gap={5}
            position="relative"
            zIndex={2}
          >
            <HStack gap={2}>
              <Box
                w="12px"
                h="12px"
                borderRadius="full"
                bg="red.400"
              />

              <Box
                w="12px"
                h="12px"
                borderRadius="full"
                bg="yellow.400"
              />

              <Box
                w="12px"
                h="12px"
                borderRadius="full"
                bg="green.400"
              />
            </HStack>

            <Box
              fontFamily="'Fira Code', monospace"
            >
              <Text color="semantic.progress" mb={3}>
                future = success + learning
              </Text>

              <Text color="semantic.code" mb={3}>
                def becomeDeveloper():
              </Text>

              <Text color="semantic.code" mb={3}>
                &nbsp;&nbsp;print("Build amazing apps")
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}