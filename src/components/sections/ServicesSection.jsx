import { Box, Grid, Typography, Chip, Stack } from '@mui/material';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import ConstructionIcon from '@mui/icons-material/Construction';
import CableIcon from '@mui/icons-material/Cable';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ScienceIcon from '@mui/icons-material/Science';
import BuildIcon from '@mui/icons-material/Build';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CheckIcon from '@mui/icons-material/Check';
import SectionWrapper, { SectionHeader } from '../common/SectionWrapper';
import { SERVICES } from '../../constants/data';

const iconMap = {
  SolarPanel: SolarPowerIcon,
  Construction: ConstructionIcon,
  Cable: CableIcon,
  ElectricalServices: ElectricalServicesIcon,
  Dashboard: DashboardIcon,
  DeviceHub: DeviceHubIcon,
  FlashOn: FlashOnIcon,
  Science: ScienceIcon,
  Build: BuildIcon,
  WaterDrop: WaterDropIcon,
};

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || SolarPowerIcon;

  return (
    <Box
      sx={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: '10px',
        p: { xs: 2.5, md: 3 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'rgba(245,166,35,0.4)',
          boxShadow: '0 16px 48px rgba(10,22,40,0.1)',
          transform: 'translateY(-5px)',
          '& .service-icon-bg': {
            background: '#0A1628',
          },
          '& .service-icon': {
            color: '#F5A623',
          },
        },
      }}
    >
      {/* Number watermark */}
      <Typography
        sx={{
          position: 'absolute',
          top: 12,
          right: 16,
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#F4F6F9',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {service.number}
      </Typography>

      {/* Icon */}
      <Box
        className="service-icon-bg"
        sx={{
          width: 48,
          height: 48,
          borderRadius: '10px',
          background: '#F4F6F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2.5,
          transition: 'background 0.3s ease',
          border: '1px solid rgba(226,232,240,0.8)',
        }}
      >
        <Icon className="service-icon" sx={{ color: '#0A1628', fontSize: 24, transition: 'color 0.3s ease' }} />
      </Box>

      {/* Title */}
      <Typography
        component="h3"
        sx={{
          color: '#0A1628',
          fontWeight: 700,
          fontSize: { xs: '0.95rem', md: '1rem' },
          mb: 1.25,
          lineHeight: 1.3,
          pr: 4,
        }}
      >
        {service.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: '#4A5568',
          fontSize: '0.84rem',
          lineHeight: 1.7,
          mb: 2.5,
          flex: 1,
        }}
      >
        {service.description}
      </Typography>

      {/* Items */}
      <Stack spacing={0.75}>
        {service.items.map((item) => (
          <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.75 }}>
            <CheckIcon sx={{ color: '#F5A623', fontSize: 14, mt: '3px', flexShrink: 0 }} />
            <Typography sx={{ color: '#4A5568', fontSize: '0.8rem', lineHeight: 1.5 }}>
              {item}
            </Typography>
          </Box>
        ))}
      </Stack>

      {/* Bottom accent */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #F5A623, transparent)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          '.MuiBox-root:hover &': { opacity: 1 },
        }}
      />
    </Box>
  );
};

const ServicesSection = () => {
  return (
    <Box component="section" id="services" sx={{ background: '#FFFFFF' }}>
      <Box sx={{ maxWidth: '1280px', mx: 'auto', px: { xs: 2, sm: 3, md: 6 }, py: { xs: 8, md: 12 } }}>
        <SectionHeader
          label="OUR SOLAR SERVICES"
          title="Complete Solar Installation & Execution Services"
          subtitle="Complete installation, electrical execution and maintenance support for solar projects across Mumbai and agreed project locations."
        />

        <Grid container spacing={2.5}>
          {SERVICES.map((service) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
