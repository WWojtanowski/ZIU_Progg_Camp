import { Steps, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { Button } from './buttonStyles'
import { Card } from './cardStyles'
import { Heading } from './headingStyles'
import { Badge } from './badgeStyles'
import { Input } from './inputStyles';

import { globalStyles } from './globalStyles'


const chakraTheme = createSystem(defaultConfig, defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: `'Inter', sans-serif`,
        },
        body: {
          value: `'Inter', sans-serif`,
        },
      },

      colors: {
        brand: {
          50: {
            value: '#eff6ff',
          },
          100: {
            value: '#dbeafe',
          },
          200: {
            value: '#bfdbfe',
          },
          300: {
            value: '#93c5fd',
          },
          400: {
            value: '#60a5fa',
          },
          500: {
            value: '#3b82f6',
          },
          600: {
            value: '#2563eb',
          },
          700: {
            value: '#1d4ed8',
          },
          800: {
            value: '#1e40af',
          },
          900: {
            value: '#1e3a8a',
          },
        },

        accent: {
          500: {
            value: '#8b5cf6',
          },
          600: {
            value: '#7c3aed',
          },
        },

        dark: {
          100: {
            value: '#e2e8f0',
          },
          200: {
            value: '#94a3b8',
          },
          300: {
            value: '#64748b',
          },
          400: {
            value: '#1e293b',
          },
          500: {
            value: '#0f172a',
          },
          600: {
            value: '#020617',
          },
        },
      },
    },

    semanticTokens: {
      colors: {
        "primary.default": {
          value: {
            base: "#2563EB",
            _dark: "#3B82F6",
          },
        },

        "primary.hover": {
          value: {
            base: "#1D4ED8",
            _dark: "#60A5FA",
          },
        },

        "primary.foreground": {
          value: {
            base: "#FFFFFF",
            _dark: "#0A0F1B",
          },
        },


        "secondary.default": {
          value: {
            base: "#475569",
            _dark: "#A5B5CA",
          },
        },

        "secondary.hover": {
          value: {
            base: "#334155",
            _dark: "#CBD5E1",
          },
        },
        
        "secondary.foreground": {
          value: {
            base: "#FFFFFF",
            _dark: "#0A0F1B",
          },
        },
        

        "text.primary": {
          value: {
            base: "#0F172A",
            _dark: "#F8FAFC",
          },
        },

        "text.secondary": {
          value: {
            base: "#475569",
            _dark: "#CBD5E1",
          },
        },


        "surface.background": {
          value: {
            base: "#F8FAFC",
            _dark: "#0F172A",
          },
        },

        "surface.card": {
          value: {
            base: "#FFFFFF",
            _dark: "#243447",
          },
        },

        "surface.input": {
          value: {
            base: "#FFFFFF",
            _dark: "#334155",
          },
        },

        "surface.article": {
          value: {
            base: "#FFFFFF",
            _dark: "#2e3b50",
          },
        },


        "semantic.error": {
          value: {
            base: "#DC2626",
            _dark: "#F87171",
          },
        },

        "semantic.success": {
          value: {
            base: "#059669",
            _dark: "#34D399",
          },
        },

        "semantic.progress": {
          value: {
            base: "#005CD4",
            _dark: "#549EFF",
          },
        },

        "semantic.code": {
          value: {
            base: "#4202aa",
            _dark: "#B385FF",
          },
        },
      }
    },

    recipes: {
      button: Button,
      heading: Heading,
      badge: Badge,
      input: Input
    },

    slotRecipes: {
      card: Card,
    }

 
  },

  globalCss: globalStyles
}))

export { chakraTheme }
export default chakraTheme