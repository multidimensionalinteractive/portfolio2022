import Head from 'next/head';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ToolCard from '../components/ToolCard';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/portfolio.scss';

interface Tool {
  name: string;
  description: string;
  useCase: string;
}

interface Experience {
  title: string;
  description: string;
  details: string;
}

const Home: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.tool-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.5 }
    );
    gsap.fromTo(
      '.experience-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 1 }
    );
  }, []);

  const tools: Tool[] = [
    {
      name: 'Qualys VMDR',
      description: 'Vulnerability management platform for scanning and prioritizing risks.',
      useCase: 'Used to schedule and analyze scans across Windows, Linux, and AWS environments, ensuring FedRAMP compliance.',
    },
    {
      name: 'Tenable (Nessus)',
      description: 'Vulnerability scanner for identifying security weaknesses.',
      useCase: 'Used to validate scan results and prioritize remediation based on CVSS scores.',
    },
    {
      name: 'Microsoft Excel',
      description: 'Tool for data analysis and reporting.',
      useCase: 'Used to create POA&M records and track vulnerability remediation timelines.',
    },
    {
      name: 'Wireshark',
      description: 'Network protocol analyzer for monitoring traffic.',
      useCase: 'Used to analyze network data for identifying threats and validating vulnerabilities.',
    },
    {
      name: 'Splunk',
      description: 'Platform for log analysis and security monitoring.',
      useCase: 'Used for compliance monitoring and analyzing system logs for FedRAMP requirements.',
    },
  ];

  const experiences: Experience[] = [
    {
      title: 'CASP+ Certification',
      description: 'CompTIA Advanced Security Practitioner (CASP+), demonstrating expertise in enterprise security architecture, operations, engineering, and governance.',
      details: 'Certified in 2025, skilled in risk management, compliance frameworks (NIST 800-53, FedRAMP), and secure system design.',
    },
    {
      title: 'Vulnerability Management Experience',
      description: 'Hands-on experience with vulnerability scanning and remediation processes.',
      details: 'Proficient in using Qualys VMDR to scan Windows/Linux systems, analyzing CVEs, and collaborating with IT teams for remediation.',
    },
    {
      title: 'Active Directory Management',
      description: 'Experience managing and securing Active Directory environments.',
      details: 'Implemented security policies and monitored user access to ensure compliance with organizational standards.',
    },
  ];

  return (
    <div className="portfolio-container">
      <Head>
        <title>Cybersecurity Portfolio - Junior Vulnerability Management Analyst</title>
        <meta name="description" content="Portfolio of a CASP+ certified cybersecurity analyst specializing in vulnerability management and FedRAMP compliance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Junior Vulnerability Management Analyst</h1>
        <p className="subtitle">CASP+ Certified | Specializing in Qualys VMDR, FedRAMP, and NIST 800-53</p>
        <p>Passionate about securing IT environments through vulnerability management and compliance. Experienced in Windows, Linux, AWS, and Active Directory.</p>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <h2>Tools I Use</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <ToolCard key={index} name={tool.name} description={tool.description} useCase={tool.useCase} />
          ))}
        </div>
      </section>

      {/* Experience & Certifications Section */}
      <section className="experience-section">
        <h2>Experience & Certifications</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} title={exp.title} description={exp.description} details={exp.details} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Name. Built with Next.js, SCSS, and GSAP.</p>
      </footer>
    </div>
  );
};

export default Home;
