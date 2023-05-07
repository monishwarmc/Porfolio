import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        document.body.classList.add('desktop-mode');
      } else {
        document.body.classList.remove('desktop-mode');
      }
    }

    window.addEventListener('resiz', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
