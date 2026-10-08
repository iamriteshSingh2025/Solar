import { Box, Grid, Typography, Stack, Chip } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TimerIcon from '@mui/icons-material/Timer';
import TuneIcon from '@mui/icons-material/Tune';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { WHY_US } from '../../constants/data';

const whyIconMap = [
  PeopleIcon,
  SecurityIcon,
  VerifiedIcon,
  SupportAgentIcon,
  TimerIcon,
  TuneIcon,
];

const WhyCard = ({ title, desc, index }) => {
  const Icon = whyIconMap[index % whyIconMap.length];

  return (
    <Box
      sx={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        p: { xs: 2.5, md: 3 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(245,166,35,0.6)',
          boxShadow: '0 12px 36px rgba(10,22,40,0.08)',
          transform: 'translateY(-4px)',
          '& .why-icon-box': {
            background: '#F5A623',
            color: '#0A1628',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 2,
        }}
      >
        <Box
          className="why-icon-box"
          sx={{
            width: 46,
            height: 46,
            borderRadius: '10px',
            background: '#0A1628',
            color: '#F5A623',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s ease',
          }}
        >
          <Icon sx={{ fontSize: 24, color: 'inherit' }} />
        </Box>
        <Typography
          component="h3"
          sx={{
            color: '#0A1628',
            fontWeight: 700,
            fontSize: { xs: '0.96rem', md: '1.02rem' },
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#64748B',
          fontSize: '0.86rem',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
};

const WhyUsSection = () => {
  return (
    <Box
      component="section"
      id="why-us"
      sx={{
        background: '#F8FAFC',
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
        }}
      >
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="caption"
            sx={{
              color: '#D97706',
              letterSpacing: '0.14em',
              fontWeight: 800,
              fontSize: '0.72rem',
              display: 'block',
              mb: 1.5,
              textTransform: 'uppercase',
            }}
          >
            WHY CHOOSE SML SERVICE
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: '#0A1628',
              fontWeight: 800,
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.8rem' },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Built for Reliable, Zero-Defect Solar Execution
          </Typography>
          <Typography
            sx={{
              color: '#64748B',
              fontSize: { xs: '0.94rem', md: '1.02rem' },
              maxWidth: 620,
              mx: 'auto',
              lineHeight: 1.75,
            }}
          >
            We bring professionalism, technical precision, dedicated site supervision, and safety discipline to every solar installation project across Maharashtra.
          </Typography>
        </Box>

        {/* Highlight Banner featuring Residential Solar Technician at Work */}
        <Box
          sx={{
            mb: 6,
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)',
            border: '1px solid rgba(245,166,35,0.3)',
            boxShadow: '0 16px 40px rgba(10,22,40,0.15)',
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src="/images/residential-install.jpg"
                alt="Solar Mechanic Installing Residential Solar Panels on Rooftop"
                sx={{
                  width: '100%',
                  height: { xs: '240px', sm: '300px', md: '360px' },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Grid>
            <Grid item xs={12} md={7} sx={{ p: { xs: 3, md: 5 } }}>
              <Chip
                label="Safety & Quality Guaranteed"
                size="small"
                sx={{
                  background: 'rgba(245,166,35,0.15)',
                  color: '#F5A623',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  mb: 1.5,
                  border: '1px solid rgba(245,166,35,0.35)',
                }}
              />
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: { xs: '1.25rem', md: '1.6rem' },
                  lineHeight: 1.3,
                  mb: 2,
                }}
              >
                Experienced Mechanics for Home Rooftop &amp; Industrial Projects
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: { xs: '0.88rem', md: '0.94rem' },
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                Every mechanic and fitter in our team is trained in torque calibration, module clamping, waterproof roof sealing, and electrical safety standards to eliminate on-site rework and delay.
              </Typography>

              <Grid container spacing={1.5}>
                {[
                  '100% PPE & Safety Harness Protocol',
                  'Zero Roof Leakage Guarantee',
                  'Precision Torque Alignment',
                  'Dedicated Daily Progress Reporting',
                ].map((text) => (
                  <Grid item xs={12} sm={6} key={text}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#F5A623', fontSize: 18 }} />
                      <Typography sx={{ color: '#FFFFFF', fontSize: '0.84rem', fontWeight: 600 }}>
                        {text}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* 6 Why Us Cards */}
        <Grid container spacing={3}>
          {WHY_US.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <WhyCard title={item.title} desc={item.desc} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyUsSection;
