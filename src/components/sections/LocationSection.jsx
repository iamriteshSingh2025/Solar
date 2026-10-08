import { Box, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationSection = () => {
  return (
    <Box
      component="section"
      id="location"
      sx={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Typography
            variant="caption"
            sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 1.5 }}
          >
            SERVICE AREA
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: '#0A1628',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.5rem' },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Project Locations
          </Typography>
          <Typography
            sx={{
              color: '#4A5568',
              fontSize: { xs: '0.92rem', md: '1rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.75,
            }}
          >
            Based in Mumbai, Maharashtra, SML SERVICE supports solar installation
            and execution projects in Mumbai and other project locations as mutually
            agreed with the client.
          </Typography>
        </Box>

        {/* Location card */}
        <Box
          sx={{
            maxWidth: 600,
            mx: 'auto',
            background: '#F4F6F9',
            border: '1px solid #E2E8F0',
            borderRadius: '12px',
            p: { xs: 3, md: 4 },
            display: 'flex',
            alignItems: 'flex-start',
            gap: 3,
            flexDirection: { xs: 'column', sm: 'row' },
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '12px',
              background: '#0A1628',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <LocationOnIcon sx={{ color: '#F5A623', fontSize: 30 }} />
          </Box>
          <Box>
            <Typography sx={{ color: '#0A1628', fontWeight: 700, fontSize: '1.1rem', mb: 0.75 }}>
              Mumbai, Maharashtra
            </Typography>
            <Typography sx={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.7 }}>
              Primary base of operations. SML SERVICE is available for solar installation
              and execution projects within Mumbai and project locations as mutually agreed
              with the client/company under the work order.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationSection;
