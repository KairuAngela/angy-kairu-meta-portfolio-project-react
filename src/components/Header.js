import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ProjectsSection from "./ProjectsSection";
import ContactMeSection from "./ContactMeSection";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!headerRef.current) return;

      // scrolling down → hide header
      if (currentScrollY > prevScrollY.current) {
        headerRef.current.style.transform = "translateY(-200px)";
      }

      // scrolling up → show header
      else {
        headerRef.current.style.transform = "translateY(0)";
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="1000"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
        
        {/*Links not working for this implementation*/}
        <nav>
            <HStack spacing="20px">
              {socials.map((social, index) => (
                <a
                  key={social}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size = "2x"/>
                </a>
              ))}
            </HStack>
          </nav>

          <BrowserRouter>
            <Routes>
              <Route path="/projects" element={<ProjectsSection />} />
              <Route path="/contacts" element={<ContactMeSection />} />
            </Routes>

            <nav>
              <HStack spacing={8}>
                {/* Add links to Projects and Contact me section */}
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact Me</Link>
              </HStack>
            </nav>
          </BrowserRouter>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
