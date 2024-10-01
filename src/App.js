import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router basename="/Manthan-Patel">
      <div className="App">
        <header className="App-header">
          <nav className="dataaboutme">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div className="intro">
      <h1>Hi, my name is</h1>
      <h2>Manthan Patel</h2>
      <div className="work">
        <p>"Let's Transforming Ideas into Innovation, Securing a Brighter Future."</p>
      </div>
      <div className="about">
        <p>As a versatile professional with expertise in Data Science, Cybersecurity, and Full Stack Development, I bring a unique blend of skills in machine learning, AI, cloud technologies, and web development. With a solid foundation in cybersecurity and an innovative approach to data-driven solutions, I have successfully implemented projects that reduced system vulnerabilities, predicted security threats, and developed efficient, scalable applications. My experience in developing real-time predictive systems and secure platforms using AWS, Docker, and Kubernetes, combined with a strong command of Python, React.js, and DevOps practices, ensures that I can deliver high-impact solutions. I am passionate about solving complex problems and helping businesses thrive through technology. Connect with me to build cutting-edge solutions that enhance security, drive data insights, and improve user experiences.</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <h3>Internship Security Analyst at Netlink Voice, USA</h3>
      <p>Jan 2024 - Apr 2024</p>
      <ul>
        <li>Analyzed and mitigated cybersecurity threats by implementing advanced data analysis and security protocols of NIST, reducing system vulnerabilities by 30%.</li>
        <li>Custom policies for some clients and as per their user requirements to maintain the security and usability balance.</li>
        <li>Conducted predictive analysis using machine learning models to forecast potential security breaches.</li>
        <li>Up to date with new norms and threats to provide an edge to clients which maintain integrity.</li>
      </ul>
      <h3>Software Engineer at DesireinfoWeb Private Limited, India</h3>
      <p>Oct 2020 - Jul 2022</p>
      <ul>
        <li>Developed responsive web applications using React.js and Node.js, improving user engagement by 40%.</li>
        <li>Implemented CI/CD pipelines using Jenkins, reducing deployment time by 60%.</li>
        <li>Developing websites and apps for multiple companies to manage their workflow to increase their efficiency.</li>
        <li>Integration of Microsoft SharePoint and automated tasks to manage and reduce the work for customers by 20%.</li>
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <h3>OBJECTIVE</h3>
      <p>Dedicated Junior Cybersecurity Analyst with a strong foundation in information security principles, network protocols, and secure coding practices. Experienced in implementing security measures, conducting vulnerability assessments, and developing automated security tools. Passionate about staying ahead of emerging threats and contributing to robust cyber defense strategies.</p>
      <h3>EDUCATION</h3>
      <h4>Master’s in Computer Science</h4>
      <p>Cleveland State University – Ohio, US (Aug 2022 – May 2024)</p>
      <p>Advanced Cryptography, Network Security, Ethical Hacking, Secure Software Development</p>
      <h4>B.E, Computer Engineering</h4>
      <p>Alpha College of Engineering and Technology- Ahmedabad, Gujarat (Sept 2016 – Aug 2020)</p>
      <p>Cyber Security, Data Mining, Artificial Intelligence</p>
      <h3>EXPERIENCE</h3>
      <h4>Internship Security Analyst at Netlink Voice, USA</h4>
      <p>Jan 2024 - Apr 2024</p>
      <ul>
        <li>Analyzed and mitigated cybersecurity threats by implementing advanced data analysis and security protocols of NIST, reducing system vulnerabilities by 30%.</li>
        <li>Custom policies for some clients and as per their user requirements to maintain the security and usability balance.</li>
        <li>Conducted predictive analysis using machine learning models to forecast potential security breaches.</li>
        <li>Up to date with new norms and threats to provide an edge to clients which maintain integrity.</li>
      </ul>
      <h4>Software Engineer at DesireinfoWeb Private Limited, India</h4>
      <p>Oct 2020 - Jul 2022</p>
      <ul>
        <li>Developed responsive web applications using React.js and Node.js, improving user engagement by 40%.</li>
        <li>Implemented CI/CD pipelines using Jenkins, reducing deployment time by 60%.</li>
        <li>Developing websites and apps for multiple companies to manage their workflow to increase their efficiency.</li>
        <li>Integration of Microsoft SharePoint and automated tasks to manage and reduce the work for customers by 20%.</li>
      </ul>
      <h3>TECHNICAL SKILLS</h3>
      <ul>
        <li>Programming: Python, JavaScript, Bash</li>
        <li>Security: Nmap, Wireshark, Metasploit, Burp Suite</li>
        <li>Cloud: AWS Security Services</li>
        <li>Containers: Docker, Kubernetes</li>
        <li>CI/CD: Jenkins, GitLab CI, Ansible</li>
        <li>SIEM: Splunk, ELK Stack</li>
        <li>Compliance: NIST, ISO 27001, GDPR</li>
        <li>Version Control: Git</li>
      </ul>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <h3>Cybersecurity</h3>
      <ul>
        <li>
          <strong>AI-Powered Threat Intelligence System</strong>
          <p>Developed a comprehensive threat intelligence platform using Python and Flask, integrating multiple threat feeds via MISP. Implemented ML models for anomaly detection and threat classification, utilizing MITRE ATT&CK framework for advanced threat modeling. Created ELK stack dashboard for threat visualization; deployed on AWS using Docker and Kubernetes with automated security testing in GitLab CI pipeline.</p>
        </li>
        <li>
          <strong>Comprehensive Security Audit and Compliance Tool</strong>
          <p>Designed an automated security auditing tool using Python, implementing compliance checks for NIST, GDPR, and HIPAA frameworks. Utilized Ansible for automating security checks, integrated with AWS Config and SecurityHub for multi-cloud environments. Developed risk scoring system and web-based dashboard (Flask, D3.js) for audit visualization; implemented secure API endpoints for tool integration. Increased compliance adherence by 30% across client organizations, identifying and mitigating critical vulnerabilities.</p>
        </li>
      </ul>
      <h3>Data Science</h3>
      <ul>
        <li>
          <strong>Real-time Predictive Maintenance System with IoT Integration</strong>
          <p>Developed scalable system for large-scale sensor data analysis using Apache Spark on AWS EMR, with ML models (Scikit-learn, TensorFlow) for predictive maintenance. Created Streamlit dashboard for real-time equipment health visualization; deployed with Docker and Kubernetes, using GitLab CI for CI/CD. Implemented anomaly detection algorithms, reducing unplanned downtime by 35% and improving overall equipment efficiency.</p>
        </li>
        <li>
          <strong>Multi-model Customer Churn Prediction System</strong>
          <p>Implemented comprehensive churn prediction system using Snowflake for data warehousing, H2O.ai AutoML for ML pipelines, and Flask API for model serving. Created Dash application for prediction exploration; used MLflow for experiment tracking and deployed on AWS Elastic Beanstalk. Achieved 92% accuracy in churn prediction, leading to a 25% reduction in customer attrition through targeted retention strategies.</p>
        </li>
      </ul>
      <h3>Web Development</h3>
      <ul>
        <li>
          <strong>Microservices-based E-commerce Platform</strong>
          <p>Developed a scalable e-commerce platform using microservices architecture, with React.js and Next.js for the front-end, and Node.js and Python (Flask) for backend services. Implemented DevOps best practices by deploying microservices using Docker and Kubernetes on AWS, with CI/CD pipeline using GitLab CI and Terraform for infrastructure as code. Integrated Snowflake for data warehousing and analytics, ensuring robust data management and business intelligence capabilities.</p>
        </li>
        <li>
          <strong>AI-Enhanced Real-time Collaboration Tool</strong>
          <p>Created a full-stack collaboration tool with real-time updates using WebSockets, React.js with TypeScript for the front-end, and Node.js with Express.js for backend services. Integrated advanced features including an AI chatbot using natural language processing for task suggestions, and Airflow for scheduling and automating data processing tasks. Implemented comprehensive security measures with user authentication and authorization using JSON Web Tokens, and deployed the application on AWS using Elastic Beanstalk for scalability.</p>
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p style={{ fontSize: '1.5rem' }}>Manthan V Patel</p>
      <p style={{ fontSize: '1.5rem' }}>(309) 665-9989</p>
      <p style={{ fontSize: '1.5rem' }}>patelmanthan324@gmail.com</p>
      <p style={{ fontSize: '1.5rem' }}><a href="https://www.linkedin.com/in/manthan-patel">LinkedIn Profile</a></p>
      <p style={{ fontSize: '1.5rem' }}><a href="https://github.com/manthan-patel">GitHub</a></p>
    </div>
  );
}

export default App;
