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
import { defineRecipe } from "@chakra-ui/react";

export const Heading = defineRecipe({
  base: {
    color: "text.primary",
    fontWeight: '900',
    letterSpacing: '-0.04em',
  },

  variants: {
    size: {
      hero: {
        fontSize: ['4xl', '5xl', '7xl'],
        lineHeight: '1',
      },

      section: {
        fontSize: ['2xl', '4xl'],
      },
    },
  },
  
  defaultVariants: {
    size: 'section',
  },
})