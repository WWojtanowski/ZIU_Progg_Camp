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
import type { RecipeVariantProps } from "@chakra-ui/react";


export const Button = defineRecipe({
  base: {
    borderRadius: '18px',
    fontWeight: '700',
    transition: '0.2s ease',
    _hover: {
      transform: 'translateY(-2px)',
    },
  },

  variants: {
    size: {
      lg: {
        px: 8,
        py: 7,
        fontSize: 'md',
      },
    },

    variant: {
      primary: {
        bg: "primary.default",
        color: "primary.foreground",
        _hover: {
            bg: "primary.hover",
            opacity: 0.9,
        },
        boxShadow: '0 12px 30px rgba(99,102,241,0.35)',
      },

      secondary: {
        bg: "secondary.default",
        color: "secondary.foreground",
        _hover: {
            bg: "secondary.hover",
            opacity: 0.9,
        },
      },

      disabled: {
        bg: "secondary.default",
        color: "secondary.foreground",
        opacity: 0.6,
        _hover: {
          cursor: 'default',
          transform: 'none',
        },
      },

      

      ghostModern: {
        color: "secondary.default",

        _hover: {
          color: "secondary.hover",
          bg: "secondary.foreground"
        },
      },

      glass: {
        bg: 'whiteAlpha.100',
        border: '1px solid',
        borderColor: 'whiteAlpha.200',
        backdropFilter: 'blur(12px)',
        color: "secondary.default",
      },
    }
    
  },

  defaultVariants: {
    variant: 'ghostModern',
    size: 'lg',
  },
})


type ButtonVariantProps = RecipeVariantProps<typeof Button>
export interface ButtonProps extends React.PropsWithChildren<ButtonVariantProps> {}
