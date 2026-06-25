/*
 ============================================================
 CHAKRA UI v3 MIGRATION - STYLE CONFIG CHANGES
 ============================================================

 The following style config patterns were found and need migration:
 - defineStyleConfig

 These have been replaced with:
 - defineRecipe (for single-part components)
 - defineSlotRecipe (for multi-part components)

 Key differences:
 1. Recipes use a different structure (base, variants, defaultVariants)
 2. No more "parts" - use "slots" in slot recipes
 3. Variants are defined directly, not in a separate object
 4. Default variants use "defaultVariants" key

 Documentation:
 - Recipes: https://chakra-ui.com/docs/theming/recipes
 - Slot Recipes: https://chakra-ui.com/docs/theming/slot-recipes
 - Migration Guide: https://chakra-ui.com/docs/get-started/migration

 ============================================================
*/
import { defineSlotRecipe } from "@chakra-ui/react"
import { cardAnatomy } from "@chakra-ui/react/anatomy"

export const Card = defineSlotRecipe({
  className: "chakra-card",
  slots: cardAnatomy.keys(),

  base: {
    root: {
      bg: "surface.card",
      borderRadius: '28px',
    }
  },

  variants: {
    variant: {

      default: {},

      disabled: {
        footer: {
          opacity: 0.7
        }
      },

      progress: {
        root: {
          border: '3px solid',
          borderColor: "semantic.progress"
        }
      },

      completed: {
        root: {
          border: '3px solid',
          borderColor: "semantic.success"
        }
      },

      failed: {
        root: {
          border: '3px solid',
          borderColor: "semantic.error"
        }
      },



      glass: {
        root: {
          bg: 'rgba(15,23,42,0.72)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }
      },

      feature: {
        root: {
          bg: 'whiteAlpha.100',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          p: 5,
          transition: '0.2s ease',

          _hover: {
            transform: 'translateY(-4px)',
            bg: 'whiteAlpha.200',
          },
        }
      },
    }
  },

  defaultVariants: {
    variant: 'default'
  },
})