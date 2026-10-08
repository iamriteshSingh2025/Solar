import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  Grid,
  Chip,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import BuildIcon from '@mui/icons-material/Build';
import EngineeringIcon from '@mui/icons-material/Engineering';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { COMPANY } from '../../constants/data';

const HeroHighlight = ({ icon: Icon, title, subtitle }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '10px',
      px: { xs: 2, md: 2.2 },
      py: { xs: 1.5, md: 1.8 },
      backdropFilter: 'blur(10px)',
      flex: '1 1 auto',
      minWidth: { xs: '100%', sm: 0 },
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(255,255,255,0.1)',
        borderColor: 'rgba(245,166,35,0.5)',
        transform: 'translateY(-2px)',
      },
    }}
  >
    <Box
      sx={{
        width: 42,
        height: 42,
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 12px rgba(245,166,35,0.35)',
      }}
    >
      <Icon sx={{ color: '#0A1628', fontSize: 22 }} />
    </Box>
    <Box>
      <Typography
        sx={{
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: { xs: '0.82rem', md: '0.85rem' },
          letterSpacing: '0.04em',
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '0.74rem',
          letterSpacing: '0.01em',
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  </Box>
);

const HeroSection = () => {
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
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #050D1A 0%, #0A1628 50%, #10233D 100%)',
      }}
    >
      {/* Background grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245,166,35,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,166,35,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 0,
        }}
      />

      {/* Radial glows */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: { xs: '350px', md: '650px' },
          height: { xs: '350px', md: '650px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1280px',
          px: { xs: 2, sm: 3, md: 6 },
          pt: { xs: '110px', md: '130px' },
          pb: { xs: 8, md: 10 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid container spacing={{ xs: 5, md: 6, lg: 8 }} alignItems="center">
          {/* Left Column: Copy & Actions */}
          <Grid item xs={12} lg={6.5}>
            {/* Location & Trust Badge */}
            <Box sx={{ mb: 2.5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip
                icon={<VerifiedIcon style={{ color: '#F5A623', fontSize: 16 }} />}
                label="Mumbai, Maharashtra • Solar Execution Partner"
                size="small"
                sx={{
                  background: 'rgba(245,166,35,0.12)',
                  border: '1px solid rgba(245,166,35,0.3)',
                  color: '#F5A623',
                  fontWeight: 700,
                  fontSize: '0.74rem',
                  letterSpacing: '0.04em',
                  py: 1.8,
                  borderRadius: '6px',
                }}
              />
              <Chip
                label="Skilled Technicians & Mechanics"
                size="small"
                sx={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  fontSize: '0.74rem',
                  py: 1.8,
                  borderRadius: '6px',
                }}
              />
            </Box>

            {/* Headline */}
            <Typography
              component="h1"
              sx={{
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.4rem', lg: '3.8rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                mb: 2.5,
              }}
            >
              Professional Solar{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #F5A623 0%, #FFD066 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'inline-block',
                }}
              >
                Installation
              </Box>{' '}
              &amp; Project Execution
            </Typography>

            {/* Subtext */}
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.78)',
                fontSize: { xs: '0.96rem', md: '1.12rem' },
                lineHeight: 1.7,
                mb: 4,
                maxWidth: '580px',
              }}
            >
              Expert solar installation mechanics and site execution teams for residential rooftop, commercial factories, industrial plants, and agricultural water pump projects in Mumbai &amp; across Maharashtra.
            </Typography>

            {/* CTAs */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{ mb: 4.5 }}
              flexWrap="wrap"
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollTo('enquiry')}
                id="hero-cta-quote"
                sx={{
                  px: 3.5,
                  py: 1.6,
                  fontSize: '0.98rem',
                  fontWeight: 800,
                  boxShadow: '0 8px 30px rgba(245,166,35,0.4)',
                  '&:hover': {
                    boxShadow: '0 12px 40px rgba(245,166,35,0.6)',
                  },
                }}
              >
                Request a Project Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                href={COMPANY.phoneLink}
                startIcon={<PhoneIcon />}
                id="hero-cta-call"
                sx={{
                  px: 3,
                  py: 1.6,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderColor: 'rgba(255,255,255,0.35)',
                  borderWidth: 2,
                  color: '#FFFFFF',
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: '#F5A623',
                    color: '#F5A623',
                    background: 'rgba(245,166,35,0.08)',
                  },
                }}
              >
                Call {COMPANY.phone}
              </Button>
              <Button
                variant="text"
                size="large"
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                id="hero-cta-whatsapp"
                sx={{
                  px: 2.5,
                  py: 1.6,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#4CAF50',
                  background: 'rgba(76,175,80,0.1)',
                  border: '1px solid rgba(76,175,80,0.3)',
                  '&:hover': {
                    background: 'rgba(76,175,80,0.2)',
                  },
                }}
              >
                WhatsApp
              </Button>
            </Stack>

            {/* Key capability highlights */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
            >
              <HeroHighlight
                icon={SolarPowerIcon}
                title="Solar Installation"
                subtitle="Residential • Commercial • Industrial"
              />
              <HeroHighlight
                icon={BuildIcon}
                title="Solar O&M"
                subtitle="Cleaning • Thermal Test • Maintenance"
              />
              <HeroHighlight
                icon={EngineeringIcon}
                title="Site Execution"
                subtitle="Fabrication • Cabling • Commissioning"
              />
            </Stack>
          </Grid>

          {/* Right Column: Real On-Site Solar Photo with Glassmorphism Overlays */}
          <Grid item xs={12} lg={5.5}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                borderRadius: '20px',
                overflow: 'visible',
              }}
            >
              {/* Photo Frame Container */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '2px solid rgba(245,166,35,0.4)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  background: '#0D1F3C',
                }}
              >
                <Box
                  component="img"
                  src="/images/hero-solar.jpg"
                  alt="SML Service Solar Installation Technicians at Work"
                  sx={{
                    width: '100%',
                    height: { xs: '280px', sm: '380px', md: '440px' },
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                />

                {/* Dark gradient overlay on bottom of image for readability */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.2) 50%, transparent 100%)',
                    pointerEvents: 'none',
                  }}
                />

                {/* Caption over the bottom of image */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2, sm: 2.5 },
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#4CAF50', boxShadow: '0 0 8px #4CAF50' }} />
                    <Typography sx={{ color: '#F5A623', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Live Site Execution • Active Deployment
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '0.92rem', sm: '1.05rem' }, lineHeight: 1.3 }}>
                    Skilled Manpower &amp; Turnkey Installation Services
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', mt: 0.25 }}>
                    Rooftop PV Arrays • High Voltage DC Cabling • Safe Structural Mounting
                  </Typography>
                </Box>
              </Box>

              {/* Floating Stat Badge 1: Top Right */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -15, sm: -20 },
                  right: { xs: 10, sm: -15 },
                  background: 'rgba(10,22,40,0.95)',
                  border: '1px solid rgba(245,166,35,0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '12px',
                  p: { xs: 1.5, sm: 2 },
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(76,175,80,0.15)',
                    border: '1px solid #4CAF50',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>
                    100% Safety
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>
                    PPE &amp; Harness Certified
                  </Typography>
                </Box>
              </Box>

              {/* Floating Stat Badge 2: Bottom Left */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -15, sm: -20 },
                  left: { xs: 10, sm: -15 },
                  background: 'rgba(10,22,40,0.95)',
                  border: '1px solid rgba(245,166,35,0.5)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '12px',
                  p: { xs: 1.5, sm: 2 },
                  boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(245,166,35,0.2)',
                    border: '1px solid #F5A623',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SolarPowerIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                </Box>
                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.9rem', lineHeight: 1 }}>
                    Turnkey Manpower
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>
                    Quick Project Dispatch
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
