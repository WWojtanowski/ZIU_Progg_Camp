import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { PageStore } from '@/stores/PageStore';
import type { PageState } from '@/stores/PageStore';

import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import CoursesPage from './components/CoursesPage';
import TestsPage from './components/TestsPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import TestDetailsPage from './components/TestDetailsPage';



type AnimatedElementProps = {
  children: React.ReactNode
}

const pageVariants = {
  initial: { opacity: 0, x: -16 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.28, ease: 'easeOut' } },
  exit: { opacity: 0, x: 16, transition: { duration: 0.18, ease: 'easeIn' } },
};

function App() {

  const isLoggedIn = PageStore((state: PageState) => state.isLoggedIn);

  function AnimatedLayout({ children }: AnimatedElementProps) {

    const location = useLocation()

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <Box className="app-shell">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={
                <AnimatedLayout>
                  <Homepage/>
                </AnimatedLayout>
              }
            />
            <Route path="/courses" element={
                <AnimatedLayout>
                  {isLoggedIn ? <CoursesPage/> : <Navigate to="/" />}
                </AnimatedLayout>
              }
            />
            <Route path="/tests" element={
                <AnimatedLayout>
                  {isLoggedIn ? <TestsPage/> : <Navigate to="/" />}
                </AnimatedLayout>
              }
            />
            <Route path="/login" element={
                <AnimatedLayout>
                  {!isLoggedIn ? <LoginPage/> : <Navigate to="/" />}
                </AnimatedLayout>
              }
            />
            <Route path="/signup" element={
                <AnimatedLayout>
                  {!isLoggedIn ? <SignupPage/> : <Navigate to="/" />}
                </AnimatedLayout>
              }
            />

            <Route path="/course/:courseId" element={isLoggedIn ? <CourseDetailsPage/> : <Navigate to="/" />}/>
            <Route path="/test/:testId" element={isLoggedIn ? <TestDetailsPage/> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
        
        <footer className="footer">
          <Text fontSize="sm" color="text.secondary">
            &copy; Wiktor Wojtanowski | 2026
          </Text>
        </footer>
    </Box>
  )
}

export default App
