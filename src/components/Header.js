import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const socials = [
  {
    icon: faUser,
    url: "#",
  },
  {
    icon: faGithub,
    url: "https://github.com/monishwarmc",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/monishwar/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/21341696/monishwar-m-c",
  },
];



const Header = () => {
  const headerRef = useRef(null);
 
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(-0vw)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 
  




  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="auto" margin="6px ">
        <HStack
          px={0}
          py={0}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={8} padding-left="2rem"
              >
            {socials.map((social, i) => (
              
              <a key={i} href={social.url}
              >
                <FontAwesomeIcon icon={social.icon} size="4x"  />
              </a>
            ))}
            <a href="https://wa.me/919360124835">
                <FontAwesomeIcon icon={faWhatsapp} size="4x" />
              </a>
              <a href="https://instagram.com/monishwar_m_c?igshid=ZDdkNTZiNTM=">
                <FontAwesomeIcon icon={faInstagram} size="4x" />
              </a>
              <a href="https://t.me/monishwar">
                <FontAwesomeIcon icon={faTelegram} size="4x" />
              </a>
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}> 
               Projects 
              </a> 
              <a href="#contactme" onClick={handleClick("contactme")}> 
                Contact Me 
              </a> 
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
