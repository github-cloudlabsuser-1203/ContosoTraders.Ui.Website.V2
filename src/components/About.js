import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Page Created By CoPilot</h2>
      <p>
        The Contoso Traders Hackathon is designed to help participants master DevSecOps practices in a modern application environment. This event focuses on hands-on learning, practical challenges, and real-world scenarios using a React front-end, .NET back-end, and various microservices.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>Continuous Integration and Deployment (CI/CD) with GitHub Actions</li>
        <li>Advanced Security and Dependency Management</li>
        <li>Monitoring with Azure Monitor and Application Insights</li>
        <li>Resilience Testing with Azure Load Testing and Chaos Studio</li>
        <li>AI-powered GitHub Actions and Copilot Integration</li>
        <li>Security Compliance as Code</li>
        <li>Microsoft Defender for Cloud Integration</li>
      </ul>
      <h3>Our Mission</h3>
      <p>
        To empower developers and teams to build secure, resilient, and scalable applications by integrating DevSecOps best practices into every stage of the software development lifecycle.
      </p>
    </div>
  );
}

export default About;
