import { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Alert,
  Divider,
  Stack,
  FormHelperText,
  InputLabel,
  Select,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { PROJECT_TYPES, REQUIRED_SERVICES, COMPANY } from '../../constants/data';

const initialForm = {
  name: '',
  company: '',
  phone: '',
  email: '',
  location: '',
  projectType: '',
  service: '',
  capacity: '',
  startDate: '',
  message: '',
};

const initialErrors = Object.fromEntries(Object.keys(initialForm).map((k) => [k, '']));

const EnquirySection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!form.name.trim()) { newErrors.name = 'Name is required'; valid = false; }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\+?[\d\s-]{10,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
      valid = false;
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
      valid = false;
    }
    if (!form.projectType) { newErrors.projectType = 'Please select a project type'; valid = false; }
    if (!form.service) { newErrors.service = 'Please select a required service'; valid = false; }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Simulate form submission (frontend-only)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors(initialErrors);
    setSubmitted(false);
  };

  return (
    <Box
      component="section"
      id="enquiry"
      sx={{
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          {/* Left: Header */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 100 } }}>
              <Typography
                variant="caption"
                sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 1.5 }}
              >
                PROJECT ENQUIRY
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: '#0A1628',
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.4rem' },
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Have a Solar Project? Let's Discuss Your Requirements.
              </Typography>
              <Typography
                sx={{
                  color: '#4A5568',
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Fill in your project details and our team will contact you
                to discuss requirements, scope and available support.
              </Typography>

              {/* Contact details */}
              <Box
                sx={{
                  background: '#0A1628',
                  borderRadius: '10px',
                  p: 3,
                }}
              >
                <Typography sx={{ color: '#F5A623', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', mb: 2 }}>
                  Or Contact Directly
                </Typography>
                <Stack spacing={2}>
                  <Box
                    component="a"
                    href={COMPANY.phoneLink}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
                  >
                    <Box sx={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(245,166,35,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography sx={{ color: '#F5A623', fontSize: '1rem' }}>📞</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>PHONE</Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>{COMPANY.phone}</Typography>
                    </Box>
                  </Box>
                  <Box
                    component="a"
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
                  >
                    <Box sx={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(76,175,80,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography sx={{ color: '#4CAF50', fontSize: '1rem' }}>💬</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>WHATSAPP</Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>+91 {COMPANY.phone}</Typography>
                    </Box>
                  </Box>
                  <Box
                    component="a"
                    href={COMPANY.emailLink}
                    sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none' }}
                  >
                    <Box sx={{ width: 36, height: 36, borderRadius: '8px', background: 'rgba(245,166,35,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Typography sx={{ color: '#F5A623', fontSize: '1rem' }}>✉️</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.06em' }}>EMAIL</Typography>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.86rem' }}>{COMPANY.email}</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} md={8}>
            {submitted ? (
              <Box
                sx={{
                  background: '#F4F6F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  p: { xs: 4, md: 6 },
                  textAlign: 'center',
                }}
              >
                <CheckCircleIcon sx={{ color: '#2E7D32', fontSize: 64, mb: 3 }} />
                <Typography variant="h4" sx={{ color: '#0A1628', fontWeight: 700, mb: 2 }}>
                  Enquiry Submitted
                </Typography>
                <Typography sx={{ color: '#4A5568', fontSize: '1rem', lineHeight: 1.75, mb: 4, maxWidth: 480, mx: 'auto' }}>
                  Thank you. Our team will contact you regarding your project
                  requirements. For immediate assistance, you can also call or
                  WhatsApp us directly.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                  <Button
                    variant="contained"
                    color="primary"
                    href={COMPANY.phoneLink}
                    sx={{ py: 1.25, px: 3, fontWeight: 700 }}
                  >
                    Call {COMPANY.phone}
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleReset}
                    sx={{ py: 1.25, px: 3, fontWeight: 600, borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                  >
                    Submit Another Enquiry
                  </Button>
                </Stack>
              </Box>
            ) : (
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  background: '#F4F6F9',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  p: { xs: 2.5, sm: 4, md: 5 },
                }}
              >
                <Typography sx={{ color: '#0A1628', fontWeight: 700, fontSize: '1.1rem', mb: 3, letterSpacing: '0.02em' }}>
                  Project Enquiry Form
                </Typography>

                <Grid container spacing={2.5}>
                  {/* Name */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Full Name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      id="form-name"
                      size="small"
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Company */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      id="form-company"
                      size="small"
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Phone */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number *"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      id="form-phone"
                      size="small"
                      sx={{ background: '#FFFFFF' }}
                      inputProps={{ inputMode: 'tel' }}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      id="form-email"
                      size="small"
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Location */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Project Location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      id="form-location"
                      size="small"
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Project Type */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small" error={!!errors.projectType}>
                      <InputLabel id="project-type-label">Project Type *</InputLabel>
                      <Select
                        labelId="project-type-label"
                        id="form-project-type"
                        name="projectType"
                        value={form.projectType}
                        label="Project Type *"
                        onChange={handleChange}
                        sx={{ background: '#FFFFFF' }}
                      >
                        {PROJECT_TYPES.map((t) => (
                          <MenuItem key={t} value={t}>{t}</MenuItem>
                        ))}
                      </Select>
                      {errors.projectType && <FormHelperText>{errors.projectType}</FormHelperText>}
                    </FormControl>
                  </Grid>

                  {/* Required Service */}
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth size="small" error={!!errors.service}>
                      <InputLabel id="service-label">Required Service *</InputLabel>
                      <Select
                        labelId="service-label"
                        id="form-service"
                        name="service"
                        value={form.service}
                        label="Required Service *"
                        onChange={handleChange}
                        sx={{ background: '#FFFFFF' }}
                      >
                        {REQUIRED_SERVICES.map((s) => (
                          <MenuItem key={s} value={s}>{s}</MenuItem>
                        ))}
                      </Select>
                      {errors.service && <FormHelperText>{errors.service}</FormHelperText>}
                    </FormControl>
                  </Grid>

                  {/* Capacity */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Approximate Project Size / Capacity (optional)"
                      name="capacity"
                      value={form.capacity}
                      onChange={handleChange}
                      id="form-capacity"
                      size="small"
                      placeholder="e.g. 10 kW, 50 kW, 1 MW"
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Start Date */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Expected Start Date (optional)"
                      name="startDate"
                      type="date"
                      value={form.startDate}
                      onChange={handleChange}
                      id="form-start-date"
                      size="small"
                      InputLabelProps={{ shrink: true }}
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Message */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message / Additional Requirements"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      id="form-message"
                      multiline
                      rows={4}
                      placeholder="Describe your project scope, specific requirements, site details, etc."
                      sx={{ background: '#FFFFFF' }}
                    />
                  </Grid>

                  {/* Submit */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      endIcon={<SendIcon />}
                      id="form-submit"
                      fullWidth
                      sx={{
                        py: 1.5,
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit Project Enquiry'}
                    </Button>
                    <Typography sx={{ color: '#8A96A8', fontSize: '0.75rem', textAlign: 'center', mt: 1.5, lineHeight: 1.6 }}>
                      By submitting, you agree that SML SERVICE may contact you
                      regarding your project requirements.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EnquirySection;
