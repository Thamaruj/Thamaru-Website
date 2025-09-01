import './NavBar.css';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from "../../public/vite.svg"; // Add your profile icon image

const navItems = [
  { text: "About", icon: "fas fa-book", link: "/about" },
  { text: "Skills", icon: "fas fa-code", link: "/skills" },
  { text: "Experience", icon: "fas fa-briefcase", link: "/experience" },
  { text: "Education", icon: "fas fa-graduation-cap", link: "/education" },
  { text: "Contact", icon: "fas fa-envelope", link: "/contact" },
  { text: "Résumé", icon: "fas fa-file-alt", link: "/resume" },
];

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 992);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={isOpen}
      onToggle={(val) => setIsOpen(val)}
      bg={scrolled ? "dark" : "light"}
      variant={scrolled ? "dark" : "light"}
      className={`transition-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container fluid className="px-2.5 px-lg-5">
        <Navbar.Brand>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="d-flex align-items-center"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Image
              src={profileIcon}
              rounded
              fluid
              alt="Profile"
              className="me-2"
              style={{ maxWidth: '50px', height: 'auto' }}
            />  
            <span onClick={scrollToTop} className="fs-3">Thamaru Jalthotage</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleNavbar} aria-controls='navbarScroll' className='ms-auto custom-toggle-navbar'></Navbar.Toggle>

        <Navbar.Collapse id='navbarScroll'>
          {/* Desktop Nav with animation */}
          <Nav className="ms-auto d-none d-lg-flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.text}
                className="nav-item me-3"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.35 }}
              >
                <Link to={item.link} className="nav-link">
                  <i className={`${item.icon} me-2`}></i>
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </Nav>

          {/* Mobile Nav with icons and animation */}
          {isMobile && (
            <Nav className="ms-auto d-flex flex-column align-items-start w-100">
              {isOpen && navItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="nav-item w-100"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.10, duration: 0.35 }}
                >
                  <Link
                    to={item.link}
                    onClick={()=>setIsOpen(false)}
                    className="d-flex align-items-center mb-2 p-2 w-100 shadow-sm rounded nav-link"
                  >
                    <i className={`${item.icon} me-2`}></i> {item.text}
                  </Link>
                </motion.div>
              ))}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
