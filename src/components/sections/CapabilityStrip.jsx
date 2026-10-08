import { Box, Typography, Stack, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CAPABILITIES } from '../../constants/data';

const CapabilityStrip = () => {
  return (
    <Box
      sx={{
        background: '#0A1628',
        borderTop: '2px solid #F5A623',
        borderBottom: '1px solid rgba(245,166,35,0.15)',
        py: { xs: 3, md: 3.5 },
        px: { xs: 2, sm: 3 },
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box sx={{ maxWidth: '1280px', mx: 'auto' }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 0 }}
          alignItems="center"
          justifyContent="center"
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: 'rgba(245,166,35,0.2)',
                display: { xs: 'none', sm: 'block' },
                mx: { sm: 2, md: 3 },
              }}
            />
          }
          flexWrap="wrap"
          useFlexGap
        >
          {CAPABILITIES.map((cap) => (
            <Box
              key={cap}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                py: { xs: 0.5, sm: 0 },
                px: { xs: 2, sm: 0 },
              }}
            >
              <CheckCircleIcon
                sx={{ color: '#F5A623', fontSize: 18, flexShrink: 0 }}
              />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: { xs: '0.85rem', md: '0.9rem' },
                  letterSpacing: '0.03em',
                  whiteSpace: 'nowrap',
                }}
              >
                {cap}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CapabilityStrip;
