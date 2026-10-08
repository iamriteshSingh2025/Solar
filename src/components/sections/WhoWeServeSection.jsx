import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EngineeringIcon from '@mui/icons-material/Engineering';
import RoofingIcon from '@mui/icons-material/Roofing';
import FactoryIcon from '@mui/icons-material/Factory';
import StoreIcon from '@mui/icons-material/Store';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { WHO_WE_SERVE } from '../../constants/data';

const clientIconMap = {
  'Solar EPC Companies': BusinessIcon,
  'Solar Contractors': HandshakeIcon,
  'Renewable Energy Companies': EngineeringIcon,
  'Rooftop Solar Companies': RoofingIcon,
  'Commercial Projects': StoreIcon,
  'Industrial Projects': FactoryIcon,
  'Solar Project Developers': DeveloperBoardIcon,
  'Solar Water Pump Projects': WaterDropIcon,
};

const ClientCard = ({ title }) => {
  const Icon = clientIconMap[title] || BusinessIcon;

  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        p: { xs: 2.5, md: 3 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 1.5,
        transition: 'all 0.3s ease',
        cursor: 'default',
        '&:hover': {
          background: 'rgba(245,166,35,0.08)',
          borderColor: 'rgba(245,166,35,0.3)',
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '10px',
          background: 'rgba(245,166,35,0.12)',
          border: '1px solid rgba(245,166,35,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon sx={{ color: '#F5A623', fontSize: 22 }} />
      </Box>
      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.35 }}>
        {title}
      </Typography>
    </Box>
  );
};

const WhoWeServeSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="who-we-serve"
      sx={{
        background: 'linear-gradient(135deg, #050D1A 0%, #0A1628 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 8, md: 12 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography
            variant="caption"
            sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 1.5 }}
          >
            B2B CLIENTS & PARTNERS
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              lineHeight: 1.2,
              mb: 2.5,
            }}
          >
            Who We Support
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: { xs: '0.92rem', md: '1rem' },
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.75,
            }}
          >
            SML SERVICE supports solar companies, contractors and project owners
            as a trusted installation and execution partner.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mb: 6 }}>
          {WHO_WE_SERVE.map((client) => (
            <Grid item xs={12} sm={6} md={3} key={client}>
              <ClientCard title={client} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => scrollTo('enquiry')}
            id="serve-cta"
            sx={{ px: 4, py: 1.5, fontWeight: 700, fontSize: '0.95rem' }}
          >
            Discuss Your Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WhoWeServeSection;
