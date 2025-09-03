import { Container, Row, Col, Image,Card } from "react-bootstrap";
import { Users, Target, BookOpen, Award } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import "./BodyContent.css";
import profile from "../../public/IMG_E4796.png";
import sabraLogo from "../../public/susl-logo-new.png";
import uocLogo from "../../public/logo-web.png";
import icbtLogo from "../../public/ICBT.png";
import mclogo from "../../public/mahanama-college-seeklogo.png";
import ntbLogo from "../../public/nations-trust-bank-seeklogo.png";
import cwbLogo from "../../public/CWB Solutions Logo.png";
import Footer from "./Footer";



const BodyContent = () => {

    const softSkills = [
        { icon: "fas fa-comments", name: "Communication" },
        { icon: "fas fa-users", name: "Teamwork" },
        { icon: "fas fa-lightbulb", name: "Creativity" },
        { icon: "fas fa-bullseye", name: "Problem Solving" },
        { icon: "fas fa-trophy", name:"Leadership Skills"}
    ];

    const languages = [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    ];

    const frameworks_libraries = [
        { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" },
        { name: "Expo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original-wordmark.svg" },
    ];

    const databases =[
        { name:"MySQL", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"},
    ]

    const cloud_devops =[
        { name:"AWS", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name:"Azure", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" },
        { name:"Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    ]

    const educationList = [
        {
            course: "BSc (Hons) in Computing and Information Systems",
            university: "Sabaragamuwa University of Sri Lanka",
            bullets: [],
            time: "June 2024 - Present",
            logo:sabraLogo,
            imgWidth: "250px"
        },
        {
            course: "Certificate Course on Java Application Development using JavaSE",
            university: "University of Colombo",
            bullets: [],
            time: "2023",
            logo:uocLogo,
            imgWidth: "250px"
        },
        {
            course: "Diploma in ICT",
            university: "ICBT Campus",
            bullets: [],
            time: "2022",
            logo:icbtLogo,
            imgWidth: "250px"
        },
        {
            course: "Secondary Education",
            university: "Mahanama College, Colombo 03",
            bullets: [],
            time: "2008-2021",
            logo:mclogo,
            imgWidth: "130px"
        }
    ];

    const workExperienceList = [
        {
            company:"CWB Solutions",
            role:"IT Administrator (Remote)",
            time:"September 2024 - Present",
            bullets:[],
            logo:cwbLogo,
            imgWidth: "300px"
        },
        {
            company:"Nations Trust Bank PLC",
            role:"Trainee Banking Operations Assistant",
            time:"May 2023 - June 2024",
            bullets:[],
            logo:ntbLogo,
            imgWidth: "200px"
        }

    ]

  return (
    <>
        <Container fluid className="full-width-section mt-lg-5">
        {/* Profile Photo Row */}
        <Row className="justify-content-center text-center m-0 mt-5 pt-5 pt-sm-0">
            <Col xs="auto">
            <motion.div
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            >
                <Image
                    src={profile}
                    roundedCircle
                    fluid
                    alt="Profile"
                    className="custom-shadow"
                    style={{ maxWidth: "250px" }}
                />
            </motion.div>

            </Col>
        </Row>

        {/* Name and Description Row */}
        <Row className="justify-content-center text-center py-3 m-0 text-muted">
            <motion.div
            initial={{ opacity: 0, y:50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}>
                <Col xs={15}>
                <h1 className="profile-name ">Thamaru Jalthotage</h1>
                <span className="fs-5 fw-light">
                Computing and Information Systems Undergraduate
                </span>
            </Col>
            </motion.div>

        </Row>
        </Container>

        <Container className="full-width-section  justify-content-center text-center  ">

            {/* Info boxes */}
            <Row className=" px-2 justify-content-center">
                <Col xs={5} sm={2}>
                    <motion.div
                    initial={{ opacity: 0, y:50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}>
                    <div className="border-0 rounded p-2 bg-light shadow-sm location-box " >
                        <i className="fas fa-map-marker-alt me-2 "></i>
                        <small >Colombo</small>
                    </div>
                    </motion.div>
                </Col>
                <Col xs={5} sm={2}>
                <motion.div
                    initial={{ opacity: 0, y:50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                >
                    <a
                        href="mailto:thamarujalthotage1@gmail.com"
                        className="text-decoration-none text-dark "
                        >
                        <div className="border-0 rounded p-2 bg-light shadow-sm link-box">
                            <i className="fas fa-envelope me-2 "></i>
                            <small>Email</small>
                        </div>
                        
                    </a>
                </motion.div>
                </Col>
            </Row>

            <motion.div
                initial={{ opacity: 0, y:50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}>

            
            <div className="d-flex justify-content-center mt-5 pb-5">
                
                <a href="https://www.linkedin.com/in/thamaru-jalthotage-a78145245" 
                target="_blank" 
                rel="noopener noreferrer"
                className='me-2'>
                <svg 
                    viewBox="0 0 128 128" 
                    width="30" 
                    height="30" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path fill="#0678b1ff" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"></path>
                    <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path>
                </svg>
                </a>

                <a href="https://github.com/Thamaruj" 
                target="_blank" 
                rel="noopener noreferrer"
                className='me-2'>
                <svg 
                    viewBox="0 0 128 128" 
                    width="30" 
                    height="30" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="#181616">
                    <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                    </g>
                </svg>
                </a>

            </div>
            </motion.div>

        </Container>


        <Container fluid className="py-5 px-5 about-me-section">
        <Row className="justify-content-center align-items-stretch">
            {/* Left Section */}
            <Col md={6} className="mb-4 d-flex pt-3">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="w-100"
            >
                <Card className="p-4 shadow-lg border-0 rounded-3 text-start w-100 h-100 bg-gray custom-card-adjustment">
                    <Card.Body > 
                        <h2 className="mb-3 d-flex align-items-center ">
                        <i className="fas fa-user me-2"></i> About
                        </h2>
                        <p>
                            I am an undergraduate at the University of Sabaragamuwa, Sri Lanka, currently pursuing a degree in Computing and Information Systems. I am passionate about Artificial Intelligence and CI/CD practices, and I’m eager to explore how these areas can transform the way we build and deliver software.

                            I love learning new things, experimenting with fresh ideas, and exploring emerging technologies. Whether it’s diving into modern frameworks, solving challenging problems, or collaborating on projects, I’m always driven by curiosity and the excitement of continuous growth.
                        </p>
                    </Card.Body>
                </Card>
            </motion.div>
            </Col>

            {/* Right Section */}
            <Col md={6} className="d-flex">
                <Row className="g-3 w-100 h-100">
                    {[
                        {   icon: Users, 
                            title: "Collaboration", 
                            text: "Working effectively in teams to achieve shared goals." 
                        },
                        {   icon: BookOpen, 
                            title: "Continuous Learning", 
                            text: "Constantly improving skills and staying up-to-date with technology." 

                        },
                        {   icon: Target, 
                            title: "Problem Solving", 
                            text: "Tackling challenges with practical and effective solutions." 

                        },
                        {   icon: "fas fa-trophy", 
                            title: "Leadership", 
                            text: "Taking initiative and guiding projects to success." 

                        }
                    ].map((item, index) => (
                        <Col xs={6} className="d-flex" key={item.title}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{ duration: 0.8 }}
                                className="w-100 d-flex"
                            >
                                <Card className="p-3 shadow-sm border-1 rounded-3 d-flex flex-column justify-content-center align-items-center text-center w-100 h-100 custom-card-about-section">
                                
                                {/* Render icon */}
                                {typeof item.icon === "string" ? (
                                    <i className={`${item.icon} fa-2x mb-2`}></i>
                                ) : (
                                    <item.icon size={32} className="mb-2" />
                                )}

                                <h5>{item.title}</h5>
                                <p>{item.text}</p>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
        </Container>


        <Container fluid className=" skills-section bg-dark text-light py-2 px-5">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >

                <h1 className="mb-3 d-flex align-items-center mt-4">
                    <i className="fas fa-code me-2 "></i> Skills
                </h1>
            </motion.div> 

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay:0.3 }}
            >
                <p className="w-100 mx-left text-start">I am constantly expanding my knowledge and staying up to date with the latest technologies. With a strong willingness to learn, I strive to gain a broad understanding of diverse fields such as cloud platforms, DevOps, mobile application development, Artificial Intelligence, and Machine Learning. My goal is to develop not just technical expertise, but also the ability to see the bigger picture across different domains.

                <br />
                At the same time, I’m focused on enhancing my soft skills including effective communication, presenting ideas clearly, teamwork, and collaboration. I enjoy identifying the strengths of individuals in a team and bringing out the best in everyone, while sharpening my leadership abilities. In addition, I’m working on building adaptability, time management, and critical thinking skills, which I believe are just as essential as technical knowledge. This balance between technical and interpersonal skills helps me grow as a well-rounded professional, ready to contribute and learn in any environment.
                </p>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}>

            
            <h3 className="text-start mt-5">
                <i className="fas fa-cogs me-2 mb-4"></i> Technical Skills
            </h3>

            </motion.div>
            
            <Row>


 
                <Col xs={6} md={3} className="text-center mb-4">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.1,duration: 0.8 }}
                    >
                        <Card className="bg-dark text-light border-0 text-center shadow-lg rounded-1 custom-card-skills-section">
                        <h3 className="mb-5  fw-light">Programming Languages</h3>
                            <Card.Body>
                                <Row className="justify-content-center g-4">
                                {languages.map((lang, index) => (
                                    <Col xs={6} md={6} key={index} className="d-flex justify-content-center">
                                    <img
                                        src={lang.icon}
                                        alt={lang.name}
                                        style={{ maxWidth: "100px", height: "auto" }}
                                    />
                                    </Col>
                                ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </motion.div>

                </Col>


                <Col xs={6} md={3} className="text-center mb-4">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ delay: 0.3,duration: 0.8 }}
                    >
                        <Card className="bg-dark text-light border-0 text-center shadow-lg rounded-1 custom-card-skills-section">
                            <h3 className="mb-5 fw-light">Frameworks & Libraries</h3>
                            <Card.Body>
                                <Row className="justify-content-center g-4">
                                    {frameworks_libraries.map((fw, index) => (
                                    <Col xs={6} md={6} key={index} className="d-flex justify-content-center">
                                        <img
                                        src={fw.icon}
                                        alt={fw.name}
                                        style={{ maxWidth: "120px", height: "auto" }}
                                        />
                                    </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col xs={6} md={3} className="text-center mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.5,duration: 0.8 }}
                    >

                        <Card className="bg-dark text-light border-0 shadow-lg rounded-1 custom-card-skills-section">
                            <h3 className="mb-5  fw-light">Database</h3>
                            <Card.Body>
                                <Row className="justify-content-center g-4">
                                    {databases.map((db, index) => (
                                    <Col xs={6} md={6} key={index} className="d-flex justify-content-center">
                                        <img
                                        src={db.icon}
                                        alt={db.name}
                                        style={{ maxWidth: "120px", height: "auto" }}
                                            />
                                    </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>

                <Col xs={6} md={3} className="text-center mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: 0.7,duration: 0.8 }}
                    >
                        <Card className="bg-dark text-light border-0 shadow-lg rounded-1 custom-card-skills-section">
                            <h3 className="mb-5  fw-light">Cloud & DevOps</h3>
                            <Card.Body >
                                <Row className="justify-content-center g-4">
                                    {cloud_devops.map((cd, index)=>(
                                        <Col xs={6} md={6} key={index} className="d-flex justify-content-center">
                                            <img
                                            src={cd.icon}
                                            alt={cd.name}
                                            style={{ maxWidth: "120px", height: "auto" }}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>

                        </Card>
                    </motion.div>
                </Col>

            </Row>


            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            >
                                  
                <h3 className="text-start mt-5">
                    <i className="fas fa-lightbulb me-2 mb-4"></i> Soft Skills
                </h3>
            </motion.div>    

            <Row className="g-4 justify-content-center">
                {softSkills.map((skill, index) => (
                    <Col xs={12} md={6} lg={3} key={index} className="d-flex">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: index * 0.05 }} // stagger effect
                        className="w-100"
                    >
                        <Card className="p-3 shadow-sm border-0 flex-fill d-flex flex-column justify-content-center align-items-center text-center custom-softskill-card">
                        <i className={`${skill.icon} fa-2x mb-2`}></i>
                        <h5>{skill.name}</h5>
                        </Card>
                    </motion.div>
                    </Col>
                ))}
            </Row>


            <hr/>

        </Container>


    <Container fluid className="skills-section bg-dark text-light p-3 px-5">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
                    
            <h1 className="mb-3 d-flex align-items-center mt-2">
                <i className="fas fa-graduation-cap me-2"></i> Education
            </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay:0.2 }}
        >
            <p className="w-100 mx-left text-start">
                From 2008 to 2021, I studied at Mahanama College, Colombo, where I successfully completed both my G.C.E. Ordinary Level and Advanced Level examinations. After completing school, I was selected to pursue higher studies at the University of Sabaragamuwa, Sri Lanka.

                To strengthen my foundation in IT, I completed a Diploma in ICT at ICBT Campus, achieving a Distinction Pass. I also enhanced my programming knowledge by completing a Certificate Course in Java Application Development at the University of Colombo School of Computing (UCSC).

                Currently, I am reading for a BSc (Hons) in Computing and Information Systems at the University of Sabaragamuwa, where I continue to expand my technical expertise and practical skills to prepare for a career in the IT industry.
        </p>

        </motion.div>

        <Row className="justify-content-center g-4 mt-3">
            {educationList.map((edu, index) => (
            <Col key={index} xs={12} md={4} className="d-flex">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="w-100 d-flex"
                >
                <Card className="flex-fill p-3 shadow-sm rounded-3 bg-light text-dark border-1 custom-card-education-section">
                    <Card.Body className="d-flex flex-column h-100">
                        <Card.Title className="mb-5 fs-4 fw-light">{edu.course}</Card.Title>
                        <Card.Subtitle className="mb-2 d-flex align-items-center text-muted">
                        <i className="fas fa-university me-2 "></i> {edu.university}
                        </Card.Subtitle>
                        <div className="mt-0 d-flex align-items-center text-muted">
                        <i className="fas fa-calendar-alt me-2 "></i> {edu.time}
                        </div>
                        <ul className="list-unstyled flex-grow-1 text-muted">
                        {edu.bullets.map((bullet, idx) => (
                            <li key={idx} className="d-flex align-items-start mb-2 mt-2 text-start">
                            <i className="fas fas fa-arrow-right me-2 text-start mt-1"></i>
                            <span>{bullet}</span>
                            </li>
                        ))}
                        </ul>
                            <div className="d-flex justify-content-center mt-auto">
                            <img
                                src={edu.logo}
                                alt={`${edu.university} logo`}
                                style={{ maxWidth: edu.imgWidth, height: "auto" }}
                            />
                            </div>
                    </Card.Body>
                </Card>
                </motion.div>
            </Col>
        ))}
        </Row>
          <hr />
    </Container>

     <Container fluid className="skills-section bg-dark text-light p-3 px-5">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6}}
        >

            <h1 className="mb-3 d-flex align-items-center mt-2">
                <i className="fas fa-briefcase me-2"></i> Work Experience
            </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6}}
        >
            <p className="w-100 mx-left text-start">
            I worked at Nations Trust Bank, Nugegoda Branch, prior to starting my university studies, where I gained valuable industry exposure, learning how to work in professional teams, interact with clients, resolve problems efficiently, and understand how internal structures collaborate to help a company thrive. After resigning to focus on my degree, I joined CWB Solutions Pte Ltd, Singapore, as a remote IT Administrator, where I completely rebuilt their old website and gained hands-on experience in real-world IT projects. These experiences have enhanced my technical skills, problem-solving abilities, teamwork, and industry readiness, preparing me to confidently tackle professional challenges in the IT sector.
            </p>
        </motion.div>

      <Row className="justify-content-center g-4 mt-3">
        {workExperienceList.map((work, index) => (
          <Col key={index} xs={12} md={4} className="d-flex">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="w-100 d-flex"
            >
                <Card className="flex-fill p-3 shadow-sm rounded-3 bg-light text-dark border-1 custom-card-education-section">
                    <Card.Body className="d-flex flex-column h-100">
                        <Card.Title className="mb-5 fs-3 fw-light">{work.company}</Card.Title>
                        <Card.Subtitle className="mb-2 d-flex align-items-center text-muted">
                        <i className="fas fa-university me-2 "></i> {work.role}
                        </Card.Subtitle>
                        <div className="mt-0 d-flex align-items-center text-muted">
                        <i className="fas fa-calendar-alt me-2 "></i> {work.time}
                        </div>
                        <ul className="list-unstyled flex-grow-1 text-muted">
                        {work.bullets.map((bullet, idx) => (
                            <li key={idx} className="d-flex align-items-start mb-2 mt-2 text-start">
                            <i className="fas fas fa-arrow-right me-2 text-start mt-1"></i>
                            <span>{bullet}</span>
                            </li>
                        ))}
                        </ul>
                            <div className="d-flex justify-content-center mt-auto">
                            <img
                                src={work.logo}
                                alt={`${work.logo} logo`}
                                style={{ maxWidth: work.imgWidth, height: "auto" }}
                            />
                            </div>
                    </Card.Body>
                </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
        <Footer/>
    </Container>


    


    </>
  );
};

export default BodyContent;
