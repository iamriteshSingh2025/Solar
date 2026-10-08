import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Divider,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { NAV_LINKS, COMPANY } from '../../constants/data';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setDrawerOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navbarBg = trigger
    ? 'rgba(10, 22, 40, 0.97)'
    : 'rgba(10, 22, 40, 0.85)';

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: navbarBg,
          backdropFilter: 'blur(12px)',
          borderBottom: trigger ? '1px solid rgba(245,166,35,0.15)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1200,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: '1280px',
            width: '100%',
            mx: 'auto',
            px: { xs: 2, sm: 3, md: 4 },
            minHeight: { xs: '64px', md: '72px' },
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Box
            component="a"
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '6px',
                background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ElectricBoltIcon sx={{ color: '#0A1628', fontSize: 20 }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: { xs: '1.05rem', md: '1.15rem' },
                  letterSpacing: '0.04em',
                  lineHeight: 1.1,
                }}
              >
                SML SERVICE
              </Typography>
              <Typography
                sx={{
                  color: '#F5A623',
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  display: { xs: 'none', sm: 'block' },
                  lineHeight: 1.2,
                }}
              >
                Solar Installation & Maintenance
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ display: { xs: 'none', lg: 'flex' } }}
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <Button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: isActive ? '#F5A623' : 'rgba(255,255,255,0.82)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.82rem',
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 2,
                    letterSpacing: '0.02em',
                    position: 'relative',
                    '&:hover': {
                      color: '#FFFFFF',
                      background: 'rgba(255,255,255,0.06)',
                    },
                    '&::after': isActive ? {
                      content: '""',
                      position: 'absolute',
                      bottom: 2,
                      left: '20%',
                      width: '60%',
                      height: 2,
                      background: '#F5A623',
                      borderRadius: 2,
                    } : {},
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleNavClick('#enquiry')}
              sx={{
                ml: 1.5,
                px: 2.5,
                py: 0.85,
                fontSize: '0.82rem',
                fontWeight: 700,
                borderRadius: 2,
                boxShadow: 'none',
              }}
            >
              Request a Quote
            </Button>
          </Stack>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: 'flex', lg: 'none' },
              color: '#FFFFFF',
              p: 1,
            }}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 320 },
            background: '#0A1628',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ElectricBoltIcon sx={{ color: '#0A1628', fontSize: 18 }} />
              </Box>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>
                SML SERVICE
              </Typography>
            </Box>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: 'rgba(255,255,255,0.7)' }}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />

          <List disablePadding>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,
                    '&:hover': { background: 'rgba(245,166,35,0.1)' },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      sx: {
                        color: '#FFFFFF',
                        fontWeight: 500,
                        fontSize: '1rem',
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 2 }} />

          <Stack spacing={1.5}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              onClick={() => handleNavClick('#enquiry')}
              sx={{ py: 1.25, fontWeight: 700 }}
            >
              Request a Quote
            </Button>
            <Button
              variant="outlined"
              fullWidth
              href={COMPANY.phoneLink}
              sx={{
                py: 1.25,
                borderColor: 'rgba(255,255,255,0.25)',
                color: '#FFFFFF',
                fontWeight: 600,
                '&:hover': { borderColor: '#F5A623', color: '#F5A623' },
              }}
            >
              Call {COMPANY.phone}
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
