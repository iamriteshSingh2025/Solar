import { Box, Typography } from '@mui/material';

/**
 * Section wrapper with consistent padding and optional dark/light mode
 */
const SectionWrapper = ({
  children,
  id,
  dark = false,
  sx = {},
  innerSx = {},
  py = { xs: 8, md: 12 },
}) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        background: dark
          ? 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)'
          : '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py,
          ...innerSx,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

/**
 * Section header with label, title and subtitle
 */
export const SectionHeader = ({
  label,
  title,
  subtitle,
  dark = false,
  align = 'center',
  mb = 7,
}) => {
  return (
    <Box sx={{ mb, textAlign: align }}>
      {label && (
        <Typography
          variant="caption"
          sx={{
            color: '#F5A623',
            letterSpacing: '0.14em',
            fontWeight: 700,
            fontSize: '0.7rem',
            display: 'block',
            mb: 1.5,
          }}
        >
          {label}
        </Typography>
      )}
      <Typography
        variant="h2"
        sx={{
          color: dark ? '#FFFFFF' : '#0A1628',
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          fontWeight: 700,
          mb: subtitle ? 2.5 : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: dark ? 'rgba(255,255,255,0.7)' : '#4A5568',
            maxWidth: '640px',
            mx: align === 'center' ? 'auto' : 0,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            lineHeight: 1.75,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionWrapper;
