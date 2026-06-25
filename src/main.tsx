//import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Steps, ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx'
import { chakraTheme } from './theme/chakraTheme.ts';
import { ColorModeProvider } from "./components/ui/color-mode";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={chakraTheme}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>,
)
