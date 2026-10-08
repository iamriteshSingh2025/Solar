import { Box, Grid, Typography, Stack, Button, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionWrapper, { SectionHeader } from '../common/SectionWrapper';
import { CORE_STRENGTHS } from '../../constants/data';

const StrengthCard = ({ title, desc, index }) => (
  <Box
    sx={{
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      borderRadius: '10px',
      p: { xs: 2.2, md: 2.5 },
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: 'rgba(245,166,35,0.6)',
        boxShadow: '0 12px 36px rgba(10,22,40,0.1)',
        transform: 'translateY(-4px)',
        '& .strength-number': {
          color: '#F5A623',
        },
      },
    }}
  >
    <Typography
      className="strength-number"
      sx={{
        position: 'absolute',
        top: 12,
        right: 16,
        fontSize: '2.5rem',
        fontWeight: 900,
        color: '#F1F5F9',
        lineHeight: 1,
        transition: 'color 0.3s ease',
        userSelect: 'none',
      }}
    >
      {String(index + 1).padStart(2, '0')}
    </Typography>
    <Box
      sx={{
        width: 36,
        height: 3,
        background: 'linear-gradient(90deg, #F5A623, #D4891A)',
        borderRadius: 2,
        mb: 1.5,
      }}
    />
    <Typography
      variant="h6"
      sx={{
        color: '#0A1628',
        fontWeight: 700,
        mb: 1,
        fontSize: { xs: '0.95rem', md: '1rem' },
        pr: 3,
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: '#64748B',
        fontSize: '0.84rem',
        lineHeight: 1.65,
      }}
    >
      {desc}
    </Typography>
  </Box>
);

const AboutSection = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="about" dark={false} sx={{ background: '#F8FAFC' }}>
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        {/* Left: Text content */}
        <Grid item xs={12} lg={6}>
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
            ABOUT SML SERVICE • MUMBAI
          </Typography>

          <Typography
            component="h2"
            sx={{
              color: '#0A1628',
              fontWeight: 800,
              fontSize: { xs: '1.85rem', sm: '2.4rem', md: '2.8rem' },
              lineHeight: 1.15,
              mb: 2.5,
            }}
          >
            Reliable Solar Installation &amp; Execution Partner
          </Typography>

          <Typography
            sx={{
              color: '#475569',
              fontSize: { xs: '0.94rem', md: '1.02rem' },
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            <strong>SML SERVICE</strong> is a specialized solar project execution contractor based in Mumbai, Maharashtra. We provide skilled solar mechanics, trained technicians, electrical fitters, and experienced site supervisors to Solar EPC companies, developers, and project owners.
          </Typography>

          <Typography
            sx={{
              color: '#475569',
              fontSize: { xs: '0.94rem', md: '1.02rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Whether it is residential rooftop installation, large-scale commercial industrial factories, solar water pumps, or ongoing O&amp;M maintenance, our teams execute with strict safety standards and adherence to technical drawings.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => scrollTo('enquiry')}
              sx={{ fontWeight: 800, px: 3.5, py: 1.4 }}
            >
              Partner With SML SERVICE
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollTo('gallery')}
              sx={{
                fontWeight: 700,
                borderColor: '#0A1628',
                color: '#0A1628',
                '&:hover': { background: '#0A1628', color: '#FFFFFF' },
              }}
            >
              View Work Photos
            </Button>
          </Stack>
        </Grid>

        {/* Right: Real Site Execution Photo & Strength Badges */}
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid #E2E8F0',
              boxShadow: '0 20px 48px rgba(10,22,40,0.1)',
              mb: 3,
            }}
          >
            <Box
              component="img"
              src="/images/structure-erection.jpg"
              alt="SML Service Solar Mounting Structure Fabrication and Assembly"
              sx={{
                width: '100%',
                height: { xs: '240px', sm: '320px', md: '360px' },
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 70%, transparent 100%)',
                p: 2.5,
                color: '#FFFFFF',
              }}
            >
              <Typography sx={{ color: '#F5A623', fontWeight: 800, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                On-Site Structural Precision
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '0.98rem' }}>
                Galvanized Structure Erection &amp; Module Alignment by Skilled Fitters
              </Typography>
            </Box>
          </Box>

          {/* 4 Core Strength Cards Grid */}
          <Grid container spacing={2}>
            {CORE_STRENGTHS.map((s, i) => (
              <Grid item xs={12} sm={6} key={s.title}>
                <StrengthCard title={s.title} desc={s.desc} index={i} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default AboutSection;
