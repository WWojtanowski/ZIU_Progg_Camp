import '@chakra-ui/react';

declare module '@chakra-ui/react' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    ghostModern: true;
  }
  interface CardRootPropsVariantOverrides {
    disabled: true;
  }
}