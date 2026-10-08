import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme/theme';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileCTABar from './components/layout/MobileCTABar';

// Sections
import HeroSection from './components/sections/HeroSection';
import CapabilityStrip from './components/sections/CapabilityStrip';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectExecutionSection from './components/sections/ProjectExecutionSection';
import GallerySection from './components/sections/GallerySection';
import OMSection from './components/sections/OMSection';
import WaterPumpSection from './components/sections/WaterPumpSection';
import WhoWeServeSection from './components/sections/WhoWeServeSection';
import WhyUsSection from './components/sections/WhyUsSection';
import LocationSection from './components/sections/LocationSection';
import EnquirySection from './components/sections/EnquirySection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflowX: 'hidden' }}>
        <Navbar />
        <main>
          <HeroSection />
          <CapabilityStrip />
          <AboutSection />
          <ServicesSection />
          <ProjectExecutionSection />
          <GallerySection />
          <OMSection />
          <WaterPumpSection />
          <WhoWeServeSection />
          <WhyUsSection />
          <LocationSection />
          <EnquirySection />
          <ContactSection />
        </main>
        <Footer />
        <MobileCTABar />
      </Box>
    </ThemeProvider>
  );
}

export default App;
