import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "LinkBin",
    description:
      "LinkBin is an innovative waste management solution that leverages IoT devices, blockchain technology, and smart contracts to revolutionize the way we manage and recycle waste",
    getImageSrc: () => require("../images/linkBin.png"),
    link: 'https://devpost.com/software/linkbin'
  },
  {
    title: "eduDonor",
    description:
      "Edudoner is a prominent and forward-thinking organization dedicated to fostering education and innovation in the field of blockchain technology, with a specific focus on the Ethereum blockchain.",
    getImageSrc: () => require("../images/eduDonor.png"),
    link: 'https://monishwarmc.github.io/edudonor/'
  },
  {
    title: "SpringBoot",
    description:
      "Amigoscode course project of spring boot with postgreSQL",
    getImageSrc: () => require("../images/spring-boot-logo.png"),
    link: 'https://github.com/monishwarmc/springBoot-postgreSQL.git'
  },
  {
    title: "SolGenerator",
    description:
      "Generate sol for development, works on the solana devenet only",
    getImageSrc: () => require("../images/solGenerator.png"),
    link: "https://monishwarmc.github.io/solGenerator/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <a href={project.link} target="_blank"><Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          /></a>
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
