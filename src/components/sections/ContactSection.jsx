import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { COMPANY } from '../../constants/data';

const ContactSection = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        background: '#0A1628',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border */}
      <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, transparent, #F5A623, transparent)' }} />

      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 7 }}>
          <Typography
            variant="caption"
            sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 1.5 }}
          >
            GET IN TOUCH
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Contact SML SERVICE
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: { xs: '0.92rem', md: '1rem' },
              maxWidth: 500,
              mx: 'auto',
              lineHeight: 1.75,
            }}
          >
            Reach us directly for project enquiries, support requirements or to
            discuss your solar installation needs.
          </Typography>
        </Box>

        {/* Main contact card */}
        <Box
          sx={{
            maxWidth: 800,
            mx: 'auto',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Top bar */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
              px: { xs: 3, md: 5 },
              py: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: '#0A1628', fontWeight: 800, fontSize: { xs: '1.1rem', md: '1.25rem' }, letterSpacing: '0.04em' }}>
                SML SERVICE
              </Typography>
              <Typography sx={{ color: 'rgba(10,22,40,0.65)', fontSize: '0.8rem', fontWeight: 600 }}>
                Solar Installation & Maintenance
              </Typography>
            </Box>
          </Box>

          {/* Contact details */}
          <Box sx={{ p: { xs: 3, md: 5 } }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Stack spacing={3}>
                  {/* Location */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        background: 'rgba(245,166,35,0.12)',
                        border: '1px solid rgba(245,166,35,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <LocationOnIcon sx={{ color: '#F5A623', fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.5 }}>
                        Location
                      </Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.95rem' }}>
                        Mumbai, Maharashtra, India
                      </Typography>
                    </Box>
                  </Box>

                  {/* Phone */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        background: 'rgba(245,166,35,0.12)',
                        border: '1px solid rgba(245,166,35,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <PhoneIcon sx={{ color: '#F5A623', fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.5 }}>
                        Phone
                      </Typography>
                      <Typography
                        component="a"
                        href={COMPANY.phoneLink}
                        sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', '&:hover': { color: '#F5A623' } }}
                      >
                        {COMPANY.phone}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        background: 'rgba(245,166,35,0.12)',
                        border: '1px solid rgba(245,166,35,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <EmailIcon sx={{ color: '#F5A623', fontSize: 22 }} />
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.5 }}>
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href={COMPANY.emailLink}
                        sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { color: '#F5A623' }, wordBreak: 'break-all' }}
                      >
                        {COMPANY.email}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    href={COMPANY.phoneLink}
                    startIcon={<PhoneIcon />}
                    id="contact-call"
                    fullWidth
                    sx={{ py: 1.5, fontWeight: 700, fontSize: '0.95rem' }}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="contained"
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<WhatsAppIcon />}
                    id="contact-whatsapp"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      background: '#25D366',
                      color: '#FFFFFF',
                      '&:hover': { background: '#20B85A' },
                    }}
                  >
                    WhatsApp
                  </Button>
                  <Button
                    variant="outlined"
                    href={COMPANY.emailLink}
                    startIcon={<EmailIcon />}
                    id="contact-email"
                    fullWidth
                    sx={{
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      borderColor: 'rgba(255,255,255,0.25)',
                      borderWidth: 2,
                      color: '#FFFFFF',
                      '&:hover': { borderColor: '#F5A623', color: '#F5A623', borderWidth: 2 },
                    }}
                  >
                    Send Email
                  </Button>
                </Stack>

                {/* Location note */}
                <Box
                  sx={{
                    mt: 3,
                    p: 2,
                    background: 'rgba(245,166,35,0.06)',
                    border: '1px solid rgba(245,166,35,0.15)',
                    borderRadius: '8px',
                  }}
                >
                  <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem', lineHeight: 1.65 }}>
                    <Box component="strong" sx={{ color: '#F5A623' }}>Project Locations:</Box>{' '}
                    Based in Mumbai, Maharashtra. SML SERVICE supports solar installation
                    and execution projects in Mumbai and other project locations as mutually
                    agreed with the client.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
