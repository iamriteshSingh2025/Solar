import { useState } from 'react';
import { Box, Grid, Typography, Stack, Button, Chip, Tabs, Tab } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import SettingsIcon from '@mui/icons-material/Settings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PUMP_DATA = [
  {
    hp: '1 HP - 2 HP',
    title: 'Small Agricultural & Domestic Borewell',
    head: 'Up to 30 - 50 Meters',
    discharge: '10,000 - 25,000 Litres/Day',
    panelReq: '1.2 kW - 2.4 kW PV Array',
    application: 'Drip irrigation, horticulture, farmhouses & rural homes',
  },
  {
    hp: '3 HP - 5 HP',
    title: 'Medium Farm Irrigation & Crops',
    head: 'Up to 50 - 90 Meters',
    discharge: '35,000 - 80,000 Litres/Day',
    panelReq: '3.6 kW - 6.0 kW PV Array',
    application: 'Sugarcane, cotton, wheat fields, community water schemes',
  },
  {
    hp: '7.5 HP - 10 HP',
    title: 'High-Discharge Deep Borewell & Industrial',
    head: 'Up to 100 - 150+ Meters',
    discharge: '1,00,000+ Litres/Day',
    panelReq: '9.0 kW - 12.0 kW PV Array',
    application: 'Large agricultural landholdings, canal pumping, commercial estates',
  },
];

const WaterPumpSection = () => {
  const [selectedPumpIdx, setSelectedPumpIdx] = useState(1);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const currentPump = PUMP_DATA[selectedPumpIdx];

  return (
    <Box
      component="section"
      id="water-pump"
      sx={{
        background: '#F8FAFC',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Left: Real Agricultural Solar Water Pump Photo & Specs */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '2px solid #E2E8F0',
                boxShadow: '0 16px 48px rgba(10,22,40,0.12)',
                background: '#0A1628',
              }}
            >
              <Box
                component="img"
                src="/images/water-pump.jpg"
                alt="Solar Agricultural Water Pump Installation in Maharashtra"
                sx={{
                  width: '100%',
                  height: { xs: '260px', sm: '360px', md: '420px' },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Bottom glassmorphic overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 70%, transparent 100%)',
                  p: { xs: 2, sm: 3 },
                  color: '#FFFFFF',
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                  <Chip
                    label="Solar Pump Installation"
                    size="small"
                    sx={{
                      background: '#F5A623',
                      color: '#0A1628',
                      fontWeight: 800,
                      fontSize: '0.72rem',
                    }}
                  />
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem', fontWeight: 600 }}>
                    1 HP to 10 HP Systems
                  </Typography>
                </Stack>
                <Typography sx={{ fontWeight: 700, fontSize: { xs: '0.95rem', sm: '1.1rem' } }}>
                  Zero Electricity Bills • High Discharge Solar Pumping
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>
                  Submersible &amp; Surface Solar Pumps with MPPT VFD Controllers
                </Typography>
              </Box>
            </Box>

            {/* Quick capacity switch buttons */}
            <Box sx={{ mt: 2.5, p: 2, background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#718096', textTransform: 'uppercase', mb: 1 }}>
                Select Pump Capacity to View Specs:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {PUMP_DATA.map((p, idx) => (
                  <Button
                    key={p.hp}
                    size="small"
                    variant={selectedPumpIdx === idx ? 'contained' : 'outlined'}
                    color={selectedPumpIdx === idx ? 'secondary' : 'inherit'}
                    onClick={() => setSelectedPumpIdx(idx)}
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      py: 0.75,
                      px: 1.5,
                      borderColor: selectedPumpIdx === idx ? '#F5A623' : '#CBD5E1',
                    }}
                  >
                    {p.hp}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Right: Technical Details & Information */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="caption"
                sx={{
                  color: '#D97706',
                  letterSpacing: '0.14em',
                  fontWeight: 800,
                  fontSize: '0.72rem',
                  display: 'block',
                  mb: 1,
                  textTransform: 'uppercase',
                }}
              >
                AGRICULTURAL &amp; COMMERCIAL PUMPING
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: '#0A1628',
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Solar Water Pump Installation &amp; Execution
              </Typography>
              <Typography
                sx={{
                  color: '#4A5568',
                  fontSize: { xs: '0.92rem', md: '1rem' },
                  lineHeight: 1.7,
                  mb: 3.5,
                }}
              >
                SML SERVICE provides complete site execution and installation support for solar water pumping systems ranging from 1 HP to 10 HP across Maharashtra. We ensure proper PV array structure anchoring, wiring, and high-efficiency VFD controller commissioning.
              </Typography>

              {/* Dynamic Specs Card */}
              <Box
                sx={{
                  background: '#0A1628',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  p: { xs: 2.5, md: 3 },
                  mb: 3.5,
                  border: '1px solid rgba(245,166,35,0.3)',
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                  <Typography sx={{ color: '#F5A623', fontWeight: 800, fontSize: '1rem' }}>
                    {currentPump.title} ({currentPump.hp})
                  </Typography>
                  <Chip label="Selected" size="small" sx={{ background: 'rgba(245,166,35,0.2)', color: '#F5A623', fontWeight: 700, height: 22 }} />
                </Stack>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Head Range
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.88rem' }}>
                      {currentPump.head}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Daily Water Output
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.88rem' }}>
                      {currentPump.discharge}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Solar Array Size
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.88rem' }}>
                      {currentPump.panelReq}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                      Best For
                    </Typography>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.82rem' }}>
                      {currentPump.application}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              {/* Execution Capabilities List */}
              <Grid container spacing={1.5} sx={{ mb: 3.5 }}>
                {[
                  'Borewell & Surface Pump Installation',
                  'Auto-Tracking / Manual Seasonal Structures',
                  'VFD Controller & Remote Monitoring Sync',
                  'Complete Earthing & Lightning Protection',
                ].map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: '#16A34A', fontSize: 18, flexShrink: 0 }} />
                      <Typography sx={{ color: '#2D3748', fontSize: '0.86rem', fontWeight: 600 }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollTo('enquiry')}
                sx={{
                  fontWeight: 800,
                  px: 3.5,
                  py: 1.4,
                  boxShadow: '0 6px 20px rgba(245,166,35,0.35)',
                }}
              >
                Get Solar Pump Installation Quote
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WaterPumpSection;
