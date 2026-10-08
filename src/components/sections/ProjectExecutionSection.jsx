import { Box, Grid, Typography, Stack, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SectionWrapper, { SectionHeader } from '../common/SectionWrapper';
import { EXECUTION_STEPS, SCOPE_ITEMS } from '../../constants/data';

const ExecutionStep = ({ step, label, isLast }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
    <Box
      sx={{
        width: { xs: 52, md: 60 },
        height: { xs: 52, md: 60 },
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1.5,
        boxShadow: '0 4px 20px rgba(245,166,35,0.35)',
        flexShrink: 0,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Typography
        sx={{
          color: '#0A1628',
          fontWeight: 800,
          fontSize: { xs: '0.85rem', md: '0.9rem' },
        }}
      >
        {step}
      </Typography>
    </Box>
    <Typography
      sx={{
        color: '#FFFFFF',
        fontWeight: 600,
        fontSize: { xs: '0.72rem', md: '0.8rem' },
        textAlign: 'center',
        lineHeight: 1.35,
        px: 0.5,
        maxWidth: 90,
      }}
    >
      {label}
    </Typography>
    {!isLast && (
      <Box
        sx={{
          width: 1,
          flex: 1,
          height: { xs: 20, md: 0 },
          display: { xs: 'block', md: 'none' },
          borderLeft: '2px dashed rgba(245,166,35,0.3)',
          mt: 1,
        }}
      />
    )}
  </Box>
);

const ProjectExecutionSection = () => {
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
      id="project-execution"
      sx={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1A2E4A 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(245,166,35,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,166,35,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <Box
        sx={{
          maxWidth: '1280px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 6 },
          py: { xs: 8, md: 12 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          {/* Left: description */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="caption"
              sx={{ color: '#F5A623', letterSpacing: '0.14em', fontWeight: 700, fontSize: '0.7rem', display: 'block', mb: 1.5 }}
            >
              PROJECT EXECUTION
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.5rem' },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Solar Project Execution Support
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.92rem', md: '0.98rem' },
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              SML SERVICE can support solar companies as an installation and execution
              contractor. The project material can be supplied by the client/company,
              while our team focuses on installation and site execution.
            </Typography>

            {/* Flexible model box */}
            <Box
              sx={{
                background: 'rgba(245,166,35,0.08)',
                border: '1px solid rgba(245,166,35,0.25)',
                borderRadius: '10px',
                p: { xs: 2.5, md: 3 },
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: '#F5A623',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                Flexible Project Execution Model
              </Typography>

              {/* Flow */}
              <Stack spacing={0} alignItems="center">
                {[
                  { label: 'CLIENT / COMPANY', sublabel: 'Project materials & scope', bg: '#1A3A5C', highlight: false },
                  null,
                  { label: 'SML SERVICE', sublabel: 'Installation & execution', bg: '#F5A623', highlight: true },
                  null,
                  { label: 'PROJECT COMPLETION', sublabel: 'Testing & commissioning', bg: '#1A3A5C', highlight: false },
                ].map((item, i) => {
                  if (!item) {
                    return (
                      <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 0.5 }}>
                        <Box sx={{ width: 1, height: 16, borderLeft: '2px dashed rgba(245,166,35,0.4)' }} />
                        <ArrowDownwardIcon sx={{ color: '#F5A623', fontSize: 16 }} />
                      </Box>
                    );
                  }
                  return (
                    <Box
                      key={i}
                      sx={{
                        background: item.bg,
                        borderRadius: '6px',
                        px: 3,
                        py: 1.25,
                        textAlign: 'center',
                        width: '100%',
                        border: item.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      }}
                    >
                      <Typography
                        sx={{
                          color: item.highlight ? '#0A1628' : '#FFFFFF',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          color: item.highlight ? 'rgba(10,22,40,0.65)' : 'rgba(255,255,255,0.55)',
                          fontSize: '0.72rem',
                        }}
                      >
                        {item.sublabel}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>

            <Button
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardIcon />}
              onClick={() => scrollTo('enquiry')}
              id="execution-cta"
              sx={{ px: 3, py: 1.25, fontWeight: 700 }}
            >
              Discuss Your Project
            </Button>
          </Grid>

          {/* Right: Execution timeline + Scope */}
          <Grid item xs={12} md={7}>
            {/* Execution timeline */}
            <Box
              sx={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                p: { xs: 2.5, md: 4 },
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 4,
                  textAlign: 'center',
                }}
              >
                Execution Timeline
              </Typography>

              {/* Desktop: horizontal, Mobile: vertical */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Box sx={{ position: 'relative' }}>
                  {/* Connecting line */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 30,
                      left: '7%',
                      right: '7%',
                      height: 2,
                      background: 'linear-gradient(90deg, rgba(245,166,35,0.2), rgba(245,166,35,0.6), rgba(245,166,35,0.2))',
                      zIndex: 0,
                    }}
                  />
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                    {EXECUTION_STEPS.map((s, i) => (
                      <ExecutionStep key={s.step} step={s.step} label={s.label} isLast={i === EXECUTION_STEPS.length - 1} />
                    ))}
                  </Stack>
                </Box>
              </Box>

              {/* Mobile vertical */}
              <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 0 }}>
                {EXECUTION_STEPS.map((s, i) => (
                  <Box key={s.step} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #F5A623 0%, #D4891A 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 4px 16px rgba(245,166,35,0.3)',
                        }}
                      >
                        <Typography sx={{ color: '#0A1628', fontWeight: 800, fontSize: '0.8rem' }}>{s.step}</Typography>
                      </Box>
                      {i < EXECUTION_STEPS.length - 1 && (
                        <Box sx={{ width: 2, flex: 1, minHeight: 24, background: 'rgba(245,166,35,0.25)', my: 0.5 }} />
                      )}
                    </Box>
                    <Box sx={{ pt: 1.25, pb: i < EXECUTION_STEPS.length - 1 ? 0 : 0 }}>
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.88rem', lineHeight: 1.3 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Typical scope */}
            <Box
              sx={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                p: { xs: 2.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  color: '#F5A623',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mb: 3,
                }}
              >
                Typical Execution Scope
              </Typography>
              <Grid container spacing={1.5}>
                {SCOPE_ITEMS.map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '4px',
                          background: 'rgba(245,166,35,0.15)',
                          border: '1px solid rgba(245,166,35,0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          mt: '2px',
                        }}
                      >
                        <CheckIcon sx={{ color: '#F5A623', fontSize: 13 }} />
                      </Box>
                      <Typography
                        sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.86rem', lineHeight: 1.6 }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectExecutionSection;
