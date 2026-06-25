export const layerStyles = {
  glass: {
    bg: 'rgba(15,23,42,0.72)',
    border: '3px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
  },

  featureCard: {
    bg: 'whiteAlpha.100',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: '20px',
    p: 5,
    transition: '0.2s ease',

    _hover: {
      transform: 'translateY(-4px)',
      bg: 'whiteAlpha.200',
    },
  },

  codeWindow: {
    bg: "secondary.foreground",
    borderRadius: '22px',
    border: '3px solid',
    borderColor: "secondary.default",
    p: 6,
  },
}