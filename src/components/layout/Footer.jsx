import { Box, Grid, Typography, Stack, Link, Divider } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { COMPANY } from '../../constants/data';

const FooterLink = ({ href, children, onClick }) => (
  <Typography
    component={onClick ? 'button' : 'a'}
    href={href}
    onClick={onClick}
    sx={{
      color: 'rgba(255,255,255,0.55)',
      fontSize: '0.86rem',
      textDecoration: 'none',
      lineHeight: 1,
      display: 'block',
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      padding: 0,
      textAlign: 'left',
      fontFamily: 'inherit',
      transition: 'color 0.2s ease',
      '&:hover': { color: '#F5A623' },
    }}
  >
    {children}
  </Typography>
);

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const services = [
    'Solar Installation',
    'Structure Installation',
    'DC Cable Work',
    'AC Cable Work',
    'Inverter Installation',
    'Earthing & LA',
    'Testing & Commissioning',
    'Solar O&M',
    'Solar Water Pump',
  ];

  const company = [
    { label: 'About Us', id: 'about' },
    { label: 'Project Execution', id: 'project-execution' },
    { label: 'Why SML SERVICE', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: '#050D1A',
        borderTop: '1px solid rgba(245,166,35,0.15)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Column 1: Brand */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ElectricBoltIcon sx={{ color: '#0A1628', fontSize: 20 }} />
              </Box>
              <Box>
                <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.04em', lineHeight: 1.1 }}>
                  SML SERVICE
                </Typography>
                <Typography sx={{ color: '#F5A623', fontSize: '0.62rem', letterSpacing: '0.06em', textTransform: 'uppercase', lineHeight: 1.2 }}>
                  Solar Installation & Maintenance
                </Typography>
              </Box>
            </Box>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.84rem',
                lineHeight: 1.75,
                mb: 3,
              }}
            >
              Professional Solar Installation & Maintenance Services in Mumbai,
              Maharashtra. Skilled manpower and reliable execution support.
            </Typography>

            <Stack direction="row" spacing={1}>
              <Box
                component="a"
                href={COMPANY.phoneLink}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  background: 'rgba(245,166,35,0.1)',
                  border: '1px solid rgba(245,166,35,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': { background: '#F5A623', borderColor: '#F5A623' },
                }}
                aria-label="Call SML SERVICE"
              >
                <PhoneIcon sx={{ color: '#F5A623', fontSize: 18, '.MuiBox-root:hover &': { color: '#0A1628' } }} />
              </Box>
              <Box
                component="a"
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': { background: '#25D366', borderColor: '#25D366' },
                }}
                aria-label="WhatsApp SML SERVICE"
              >
                <WhatsAppIcon sx={{ color: '#25D366', fontSize: 18 }} />
              </Box>
              <Box
                component="a"
                href={COMPANY.emailLink}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '8px',
                  background: 'rgba(245,166,35,0.1)',
                  border: '1px solid rgba(245,166,35,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': { background: '#F5A623', borderColor: '#F5A623' },
                }}
                aria-label="Email SML SERVICE"
              >
                <EmailIcon sx={{ color: '#F5A623', fontSize: 18 }} />
              </Box>
            </Stack>
          </Grid>

          {/* Column 2: Services */}
          <Grid item xs={6} sm={3} md={2} lg={2.5}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Services
            </Typography>
            <Stack spacing={1.5}>
              {services.map((s) => (
                <FooterLink key={s} onClick={() => scrollTo('services')}>
                  {s}
                </FooterLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: Company */}
          <Grid item xs={6} sm={3} md={2} lg={2}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Company
            </Typography>
            <Stack spacing={1.5}>
              {company.map((c) => (
                <FooterLink key={c.label} onClick={() => scrollTo(c.id)}>
                  {c.label}
                </FooterLink>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact */}
          <Grid item xs={12} sm={6} md={4} lg={4.5}>
            <Typography
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              Contact
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#F5A623', fontSize: 18, mt: '2px', flexShrink: 0 }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                  Mumbai, Maharashtra, India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#F5A623', fontSize: 18, flexShrink: 0 }} />
                <Typography
                  component="a"
                  href={COMPANY.phoneLink}
                  sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', textDecoration: 'none', '&:hover': { color: '#F5A623' } }}
                >
                  {COMPANY.phone}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#F5A623', fontSize: 18, mt: '2px', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href={COMPANY.emailLink}
                  sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.86rem', textDecoration: 'none', '&:hover': { color: '#F5A623' }, wordBreak: 'break-all' }}
                >
                  {COMPANY.email}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)', my: { xs: 4, md: 5 } }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 1.5,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            © {COMPANY.year} SML SERVICE. All Rights Reserved.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            Professional Solar Installation & Maintenance Services · Mumbai, Maharashtra
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
