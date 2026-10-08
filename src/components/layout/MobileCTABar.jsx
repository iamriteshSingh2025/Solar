import { Box, Button, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { COMPANY } from '../../constants/data';

const MobileCTABar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#0A1628',
        borderTop: '1px solid rgba(245,166,35,0.25)',
        zIndex: 1100,
        boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <Stack direction="row" sx={{ width: '100%' }}>
        <Button
          component="a"
          href={COMPANY.phoneLink}
          startIcon={<PhoneIcon sx={{ fontSize: '18px !important' }} />}
          sx={{
            flex: 1,
            py: 1.5,
            borderRadius: 0,
            color: '#FFFFFF',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            flexDirection: 'column',
            gap: 0.3,
            '& .MuiButton-startIcon': { margin: 0 },
            '&:hover': { background: 'rgba(245,166,35,0.1)' },
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          Call
        </Button>
        <Button
          component="a"
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon sx={{ fontSize: '18px !important' }} />}
          sx={{
            flex: 1,
            py: 1.5,
            borderRadius: 0,
            color: '#25D366',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            flexDirection: 'column',
            gap: 0.3,
            '& .MuiButton-startIcon': { margin: 0 },
            '&:hover': { background: 'rgba(37,211,102,0.08)' },
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          WhatsApp
        </Button>
        <Button
          onClick={() => scrollTo('enquiry')}
          startIcon={<RequestQuoteIcon sx={{ fontSize: '18px !important' }} />}
          sx={{
            flex: 1.5,
            py: 1.5,
            borderRadius: 0,
            background: 'linear-gradient(135deg, #F5A623, #D4891A)',
            color: '#0A1628',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            flexDirection: 'column',
            gap: 0.3,
            '& .MuiButton-startIcon': { margin: 0 },
            '&:hover': { background: 'linear-gradient(135deg, #F7B84E, #E09820)' },
          }}
        >
          Request Quote
        </Button>
      </Stack>
    </Box>
  );
};

export default MobileCTABar;
