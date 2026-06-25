import { Steps, Box, Button, Flex, HStack, IconButton, Text, VStack, CloseButton, Drawer, Portal } from '@chakra-ui/react';
import { Code, Sun, Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { PageStore } from '@/stores/PageStore';
import { useColorMode } from './ui/color-mode';


export default function NavBar() {
  const navigate = useNavigate();
  const isLoggedIn = PageStore((state) => state.isLoggedIn);
  const logOut = PageStore((state) => state.logOut);
  
  const { toggleColorMode } = useColorMode()


  const LogoButton = () => {
    return (
      <Button variant="ghostModern" aria-label='Progg Camp' onClick={() => navigate('/')}>
        <HStack className="logo" gap={4}>
          <Flex
            w="52px"
            h="52px"
            border="3px solid"
            borderColor="secondary.default"
            borderRadius="18px"
            align="center"
            justify="center"
          >
            <Code color="#2563EB" />
          </Flex>

          <VStack align="start" gap={0}>
            <Text fontSize="xl">
              Progg Camp
            </Text>
          </VStack>
        </HStack>
      </Button>
    )

  }

  const NavButtonLayout = () => {
    return (
      <>
        <HStack gap={2}>
          {isLoggedIn && (
            <>
              <Button variant="ghostModern" aria-label='Panel kursów' onClick={() => navigate('/courses')}>
                Kursy
              </Button>

              <Button variant="ghostModern" aria-label='Panel testów' onClick={() => navigate('/tests')}>
                Testy
              </Button>
            </>
          )}

        </HStack>

        <HStack gap={3}>
          {!isLoggedIn && (
            <>
              <Button variant="ghostModern" aria-label='Login' onClick={() => navigate('/login')}>
                Zaloguj się
              </Button>

              <Button variant="ghostModern" aria-label='Rejestracja' onClick={() => navigate('/signup')}>
                Zarejestruj się
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
              <Button variant="ghostModern" aria-label='Wylogowanie' onClick={logOut}>
                Wyloguj się
              </Button>
            </>
          )}
          <Button variant="ghostModern" aria-label='Tryb ciemny' onClick={toggleColorMode}>
            <Sun />
          </Button>
        </HStack>
      </>
    )
  }

  const MobileDrawer = () => {
    return (
      <Drawer.Root placement='top'>
        <Drawer.Trigger asChild>
          <Button variant="ghostModern" size="md">
            <Menu />
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content roundedBottom="l3">
              <Drawer.Header>
                <Drawer.Title>Progg Camp</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <VStack align="center">
                  <NavButtonLayout />
                </VStack>

              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    )
  }

  return (
    <Box as="nav" px={7} py={5}>
      <Flex
        display={{ base: "none", lg: "flex" }}
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={4}
      >
        <LogoButton />
        <NavButtonLayout />
      </Flex>

      <Flex
        display={{ base: "flex", lg: "none" }}
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={4}
      >
        <LogoButton />
        <MobileDrawer />
      </Flex>
    </Box>
  );
}