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

export const Badge = defineRecipe({
  variants: {
    variant: {
      hero: {
        px: 4,
        py: 2,
        borderRadius: 'full',
        bg: 'rgba(59,130,246,0.12)',
        color: 'brand.200',
        border: '1px solid rgba(59,130,246,0.2)',
        textTransform: 'none',
        fontWeight: '600',
      },
    }
  },

  defaultVariants: {
    variant: 'hero',
  },
})