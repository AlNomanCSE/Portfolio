// CoreProjects.tsx
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import styles from "./CoreProjects.module.css";

const coreProjects = [
  {
    title: "NB School Management System",
    description: [
      "Developed a comprehensive school management system using Java, Spring Boot, and Spring MVC",
      "Designed and implemented RESTful APIs for data management",
      "Created dynamic web pages using Thymeleaf templates",
      "Implemented robust security with Spring Security",
    ],
    technologies: [
      "Spring Security",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "Thymeleaf",
    ],
    imageSrc: "/nb-school.png", // Add your image path
    githubLink: "https://github.com/AlNomanCSE/NB-School---java--springbot--MVC.git",
  },
  {
    title: "NB Bank",
    description: [
      "Developed RESTful APIs for banking operations",
      "Implemented secure authentication with role-based access",
      "Utilized environment variables for flexible deployment",
      "Configured detailed security logging",
    ],
    technologies: [
      "Angular",
      "Spring Data JPA",
      "Spring Security",
      "MySQL",
    ],
    imageSrc: "/nb-bank.png", // Add your image path
    githubLink: "https://github.com/AlNomanCSE/spring-bank-security.git",
  },
];

const CoreProjects = () => {
  return (
    <section className={styles.coreProjectsSection}>
      <h2 className={styles.sectionTitle}>
        Core Projects <br />
        <span>Built with Spring & Angular</span>
      </h2>
      <div className={styles.projectsContainer}>
        {coreProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectContent}>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <ul className={styles.features}>
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={project.githubLink} className={styles.githubLink}>
                  <button>
                    <p>
                      View Code <FaGithub />
                    </p>
                  </button>
                </Link>
              </div>
              <div className={styles.projectImage}>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreProjects;