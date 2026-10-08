import { Box, Grid, Typography, Stack, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InspectIcon from '@mui/icons-material/Search';
import MaintenanceIcon from '@mui/icons-material/Build';
import CableCheckIcon from '@mui/icons-material/Cable';
import CleaningIcon from '@mui/icons-material/CleaningServices';
import FaultIcon from '@mui/icons-material/ElectricalServices';
import AssistIcon from '@mui/icons-material/HandymanRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { OM_SERVICES } from '../../constants/data';

const omIconMap = {
  'Site Inspection': InspectIcon,
  'Preventive Maintenance': MaintenanceIcon,
  'Cable Checks': CableCheckIcon,
  'Cleaning Coordination': CleaningIcon,
  'Basic Fault Support': FaultIcon,
  'Maintenance Assistance': AssistIcon,
};

const OMCard = ({ title, index }) => {
  const Icon = omIconMap[title] || MaintenanceIcon;
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        p: { xs: 2, md: 2.2 },
        display: 'flex',
        alignItems: 'center',
        gap: 1.75,
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'rgba(245,166,35,0.08)',
          borderColor: 'rgba(245,166,35,0.3)',
          transform: 'translateX(4px)',
        },
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          borderRadius: '8px',
          background: 'rgba(245,166,35,0.12)',
          border: '1px solid rgba(245,166,35,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon sx={{ color: '#F5A623', fontSize: 20 }} />
      </Box>
      <Box>
        <Typography
          sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.88rem', mb: 0.2 }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.74rem' }}>
          O&M execution support
        </Typography>
      </Box>
    </Box>
  );
};

const OMSection = () => {
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
      id="om"
      sx={{
        background: 'linear-gradient(135deg, #0A1628 0%, #10233D 100%)',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Side accent */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: 'linear-gradient(to bottom, transparent, #F5A623, transparent)',
        }}
      />

      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Left Column: Text & Capabilities */}
          <Grid item xs={12} lg={6}>
            <Typography
              variant="caption"
              sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 800, fontSize: '0.72rem', display: 'block', mb: 1.5, textTransform: 'uppercase' }}
            >
              OPERATION &amp; MAINTENANCE SERVICES
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: { xs: '1.85rem', sm: '2.3rem', md: '2.7rem' },
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Solar Plant O&amp;M &amp; Preventive Care
            </Typography>
            <Typography
              sx={{
                color: '#F5A623',
                fontWeight: 600,
                fontSize: '0.92rem',
                letterSpacing: '0.04em',
                mb: 2.5,
              }}
            >
              Panel Washing • Thermal Hotspot Inspection • DC/AC Cable Health
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.72)',
                fontSize: { xs: '0.92rem', md: '0.98rem' },
                lineHeight: 1.8,
                mb: 3.5,
              }}
            >
              SML SERVICE provides dedicated solar plant operation and maintenance support to keep your solar generation at peak performance. Our technicians conduct regular module washing, infrared thermal scans to detect cell degradation, and thorough electrical safety checks.
            </Typography>

            {/* Service Cards Grid */}
            <Grid container spacing={1.5} sx={{ mb: 4 }}>
              {OM_SERVICES.map((service, index) => (
                <Grid item xs={12} sm={6} key={service}>
                  <OMCard title={service} index={index} />
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => scrollTo('enquiry')}
              id="om-cta"
              sx={{ px: 3.5, py: 1.4, fontWeight: 800, boxShadow: '0 6px 24px rgba(245,166,35,0.4)' }}
            >
              Request O&amp;M Support
            </Button>
          </Grid>

          {/* Right Column: Real Photo with Thermal Scan Callout */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid rgba(245,166,35,0.4)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                background: '#07111E',
              }}
            >
              <Box
                component="img"
                src="/images/om-maintenance.jpg"
                alt="Solar Panel Cleaning and Thermal Scanning O&M Team"
                sx={{
                  width: '100%',
                  height: { xs: '280px', sm: '380px', md: '440px' },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Gradient overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.25) 60%, transparent 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Bottom detail bar */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 2, sm: 3 },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.75 }}>
                  <Chip
                    label="Active O&M Site"
                    size="small"
                    sx={{
                      background: '#F5A623',
                      color: '#0A1628',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                    }}
                  />
                  <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 600 }}>
                    Preventive Maintenance &amp; Cleaning
                  </Typography>
                </Stack>
                <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '0.92rem', sm: '1.05rem' }, lineHeight: 1.3 }}>
                  Up to 25% Generation Boost through Systematic Module Washing
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', mt: 0.25 }}>
                  Infrared thermography diagnostics detect hotspots, bypass diode failures &amp; loose connections.
                </Typography>
              </Box>
            </Box>

            {/* Quick Metrics Bar */}
            <Box
              sx={{
                mt: 2.5,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              {[
                { label: 'Routine Inspection', value: 'Monthly / Quarterly' },
                { label: 'Washing System', value: 'Telescopic Water Jet' },
                { label: 'Diagnostics', value: 'IR Thermal Camera' },
              ].map((m) => (
                <Box key={m.label} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ color: '#F5A623', fontWeight: 800, fontSize: '0.88rem' }}>
                    {m.value}
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OMSection;
