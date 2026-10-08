import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  IconButton,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionWrapper, { SectionHeader } from '../common/SectionWrapper';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Residential Rooftop Solar Installation',
    hindiTitle: 'घर की छत पर सोलर पैनल फिटिंग एवं मैकेनिक इंस्टॉलेशन',
    category: 'residential',
    categoryLabel: 'Residential / Home',
    image: '/images/residential-install.jpg',
    location: 'Mumbai Suburbs & Maharashtra',
    scope: 'Module Mounting • Micro-Inverter Wiring • Net Metering Support',
    description:
      'Certified solar mechanics installing premium high-efficiency monocrystalline solar panels on residential villa rooftop using safety harness, precision torque drills, and aluminum rail clamps.',
    stats: [
      { label: 'System Type', value: 'On-Grid / Hybrid' },
      { label: 'Mounting', value: 'Tile / Concrete Roof' },
      { label: 'Safety', value: '100% Harness & PPE' },
    ],
  },
  {
    id: 2,
    title: 'Commercial & Industrial Solar Power Plant',
    hindiTitle: 'कमर्शियल एवं इंडस्ट्रियल फैक्ट्री सोलर प्लांट एग्जीक्यूशन',
    category: 'commercial',
    categoryLabel: 'Commercial EPC',
    image: '/images/commercial-solar.jpg',
    location: 'Industrial Estates, Mumbai & MMR',
    scope: 'MW-Scale Array Alignment • Cable Trays • Inverter Testing',
    description:
      'Site engineers and technicians executing large-scale rooftop solar for factories and commercial warehouses, performing electrical testing with digital multimeters and cloud monitoring sync.',
    stats: [
      { label: 'Capacity', value: '100 kW - 2 MW' },
      { label: 'Execution', value: 'Turnkey Manpower' },
      { label: 'Compliance', value: 'CEA & Discom Norms' },
    ],
  },
  {
    id: 3,
    title: 'Solar Agricultural Water Pump System',
    hindiTitle: 'सोलर कृषि वाटर पंप इंस्टॉलेशन एवं किसान सिंचाई सिस्टम',
    category: 'water-pump',
    categoryLabel: 'Solar Water Pump',
    image: '/images/water-pump.jpg',
    location: 'Rural Maharashtra & Agricultural Zones',
    scope: 'VFD Controller Setup • Ground Array • Submersible / Surface Pump',
    description:
      'Deployment of high-performance solar water pumping solutions (1 HP to 10 HP) for agricultural irrigation, ensuring zero-fuel continuous water discharge under strong sunlight.',
    stats: [
      { label: 'Pump Rating', value: '1 HP - 10 HP' },
      { label: 'Application', value: 'Farm Irrigation' },
      { label: 'Controller', value: 'Auto MPPT / VFD' },
    ],
  },
  {
    id: 4,
    title: 'Solar O&M, Panel Washing & Thermal Testing',
    hindiTitle: 'सोलर पैनल क्लीनिंग, मेंटेनेंस एवं थर्मल इंस्पेक्शन',
    category: 'om',
    categoryLabel: 'O&M & Cleaning',
    image: '/images/om-maintenance.jpg',
    location: 'All Maharashtra Client Sites',
    scope: 'Telescopic Water Jet Cleaning • Hotspot Scanning • DC Cable Health',
    description:
      'Specialized operation and maintenance technicians washing dust off PV modules and using infrared thermal cameras to detect micro-cracks and hot spots for maximum energy generation.',
    stats: [
      { label: 'Service', value: 'Periodic & Preventive' },
      { label: 'Testing', value: 'IR Thermal Diagnostic' },
      { label: 'Efficiency Boost', value: 'Up to 25% Gain' },
    ],
  },
  {
    id: 5,
    title: 'Galvanized Structure Fabrication & Module Mounting',
    hindiTitle: 'हॉट-डिप गैल्वेनाइज्ड स्ट्रक्चर फैब्रिकेशन एवं अलाइनमेंट',
    category: 'structure',
    categoryLabel: 'Structure & Mounting',
    image: '/images/structure-erection.jpg',
    location: 'Mumbai & MMR Project Sites',
    scope: 'HDG Steel Columns • Purline Assembly • Tilt Angle Calibration',
    description:
      'Precision mechanical erection of hot-dip galvanized mounting structures with spirit level calibration, torque checks, and storm-resistant civil anchoring.',
    stats: [
      { label: 'Material', value: 'HDG Galvanized Steel' },
      { label: 'Wind Resistance', value: 'Up to 150 km/h' },
      { label: 'Assembly', value: 'Fast Bolt & Clamp' },
    ],
  },
  {
    id: 6,
    title: 'Skilled Solar Site Execution Manpower',
    hindiTitle: 'कुशल सोलर टेक्नीशियन टीम एवं ऑन-साइट एग्जीक्यूशन',
    category: 'commercial',
    categoryLabel: 'Skilled Manpower',
    image: '/images/hero-solar.jpg',
    location: 'Pan-Maharashtra Project Deployment',
    scope: 'Certified Fitters • Wiremen • Safety Supervisors • Site Leads',
    description:
      'Trained and safety-compliant solar manpower teams ready for rapid deployment on residential rooftops, commercial sheds, and ground-mount utility projects.',
    stats: [
      { label: 'Team Ready', value: 'Immediate Dispatch' },
      { label: 'Daily Output', value: 'High Speed Delivery' },
      { label: 'Supervision', value: 'Dedicated Site Leads' },
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential Home Solar' },
  { id: 'commercial', label: 'Commercial & Industrial' },
  { id: 'water-pump', label: 'Solar Water Pump' },
  { id: 'om', label: 'O&M & Maintenance' },
  { id: 'structure', label: 'Structure & Mounting' },
];

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        background: '#FFFFFF',
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1280px', px: { xs: 2, sm: 3, md: 6 } }}>
        <SectionHeader
          tag="REAL WORK & ON-SITE EXECUTION"
          title="Solar Installation & Project Gallery"
          subtitle="Explore our live on-site execution photos — from home rooftop installations and factory setups to solar water pumps and O&M maintenance."
          centered
        />

        {/* Filter Chips */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 5, mt: 1 }}
        >
          {CATEGORIES.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.label}
              onClick={() => setActiveFilter(cat.id)}
              clickable
              variant={activeFilter === cat.id ? 'filled' : 'outlined'}
              sx={{
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                py: 2.2,
                px: 1,
                borderRadius: '8px',
                borderColor: activeFilter === cat.id ? '#F5A623' : '#E2E8F0',
                backgroundColor: activeFilter === cat.id ? '#0A1628' : '#F4F6F9',
                color: activeFilter === cat.id ? '#F5A623' : '#4A5568',
                '&:hover': {
                  backgroundColor: activeFilter === cat.id ? '#0A1628' : '#EAEFF5',
                  borderColor: '#F5A623',
                },
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </Stack>

        {/* Gallery Grid */}
        <Grid container spacing={3.5}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                onClick={() => setSelectedImage(item)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(10,22,40,0.06)',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(10,22,40,0.14)',
                    borderColor: '#F5A623',
                    '& .zoom-overlay': {
                      opacity: 1,
                    },
                    '& .gallery-img': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Image Box */}
                <Box sx={{ position: 'relative', overflow: 'hidden', height: { xs: 220, sm: 240 } }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    className="gallery-img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Category Badge */}
                  <Chip
                    label={item.categoryLabel}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'rgba(10,22,40,0.85)',
                      backdropFilter: 'blur(6px)',
                      color: '#F5A623',
                      fontWeight: 700,
                      fontSize: '0.72rem',
                      border: '1px solid rgba(245,166,35,0.4)',
                    }}
                  />
                  {/* Zoom Overlay Icon */}
                  <Box
                    className="zoom-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(10,22,40,0.45)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: '#F5A623',
                        color: '#0A1628',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                      }}
                    >
                      <ZoomInIcon fontSize="medium" />
                    </Box>
                  </Box>
                </Box>

                {/* Content */}
                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.05rem' },
                      color: '#0A1628',
                      lineHeight: 1.35,
                      mb: 0.75,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#718096',
                      fontSize: '0.78rem',
                      mb: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    📍 {item.location}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#4A5568',
                      fontSize: '0.85rem',
                      lineHeight: 1.6,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Highlights */}
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ pt: 1, borderTop: '1px solid #EDF2F7' }}>
                    {item.stats.map((stat, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          background: '#F8FAFC',
                          borderRadius: '6px',
                          p: '4px 8px',
                          border: '1px solid #E2E8F0',
                          flex: '1 1 auto',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.68rem', color: '#718096', textTransform: 'uppercase', fontWeight: 600 }}>
                          {stat.label}
                        </Typography>
                        <Typography sx={{ fontSize: '0.78rem', color: '#0A1628', fontWeight: 700 }}>
                          {stat.value}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Banner */}
        <Box
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)',
            border: '1px solid rgba(245,166,35,0.3)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 3,
            boxShadow: '0 12px 32px rgba(10,22,40,0.18)',
          }}
        >
          <Box>
            <Typography sx={{ color: '#F5A623', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.5 }}>
              Need Skilled Solar Installation Manpower for Your Site?
            </Typography>
            <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '1.2rem', md: '1.45rem' } }}>
              Get experienced technicians & turnkey execution in Mumbai and Maharashtra.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={scrollToEnquiry}
            sx={{
              fontWeight: 800,
              px: 3.5,
              py: 1.5,
              whiteSpace: 'nowrap',
              boxShadow: '0 6px 24px rgba(245,166,35,0.4)',
            }}
          >
            Deploy Manpower Now
          </Button>
        </Box>

        {/* Modal Dialog for Image Preview */}
        <Dialog
          open={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#0A1628',
              color: '#FFFFFF',
              border: '1px solid rgba(245,166,35,0.3)',
            },
          }}
        >
          {selectedImage && (
            <Box sx={{ position: 'relative' }}>
              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  background: 'rgba(0,0,0,0.7)',
                  color: '#FFFFFF',
                  zIndex: 10,
                  '&:hover': { background: '#F5A623', color: '#0A1628' },
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box sx={{ width: '100%', maxHeight: '480px', overflow: 'hidden', background: '#000' }}>
                <Box
                  component="img"
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '480px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>

              <Box sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Chip
                  label={selectedImage.categoryLabel}
                  size="small"
                  sx={{
                    background: 'rgba(245,166,35,0.15)',
                    color: '#F5A623',
                    fontWeight: 700,
                    mb: 1.5,
                    border: '1px solid rgba(245,166,35,0.3)',
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 800, color: '#FFFFFF', mb: 1 }}>
                  {selectedImage.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', mb: 2.5, lineHeight: 1.7 }}>
                  {selectedImage.description}
                </Typography>

                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Typography sx={{ color: '#F5A623', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                        Project Location
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600 }}>
                        {selectedImage.location}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <Typography sx={{ color: '#F5A623', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', mb: 0.5 }}>
                        Execution Scope
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontSize: '0.88rem', fontWeight: 600 }}>
                        {selectedImage.scope}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={() => {
                      setSelectedImage(null);
                      scrollToEnquiry();
                    }}
                    sx={{ fontWeight: 700, py: 1.2 }}
                  >
                    Request Similar Installation
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
        </Dialog>
      </Container>
    </Box>
  );
};

export default GallerySection;
