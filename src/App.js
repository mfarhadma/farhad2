import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'portfolio', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {/* Header/Navigation */}
      <header className="header">
        <div className="container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">MFM</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <nav>
              <ul>
                <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>Home</li>
                <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</li>
                <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</li>
                <li className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollToSection('experience')}>Experience</li>
                <li className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                <li className={activeSection === 'reviews' ? 'active' : ''} onClick={() => scrollToSection('reviews')}>Reviews</li>
                <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</li>
              </ul>
            </nav>
          </div>
          
          <div className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </div>
          
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name">Md Farhad Mahamud</span>
              <span className="title">Professional TestOps Engineer at <a onClick={() => window.open("https://cyclicit.netlify.app", "_blank")}
       
      style={{
        color: '#4a89dc',
        textDecoration: 'none',
        fontWeight: 600
      }}
    >
      CycliciT
    </a></span>
            </h1>
            <p className="hero-description">
              Creating innovative solutions with clean code and modern technologies.
            </p>
            <div className="hero-buttons">
              <button className="btn primary" onClick={() => scrollToSection('contact')}>Hire Me</button>
              <button className="btn secondary" onClick={() => scrollToSection('portfolio')}>View Work</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="circle-animation"></div>
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              
            </div>
            <div className="about-text">
              <h3>Who am I?</h3>
              <p>
                I'm Md Farhad Mahamud, a passionate developer with 1.5+ years of experience in creating web applications.
                I specialize in frontend development with React and backend with Node.js, but I'm always eager to learn new technologies.
              </p>
              <p>
                My approach combines technical expertise with creative problem-solving to deliver high-quality products
                that meet both user needs and business goals.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Md Farhad Mahamud</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">yasirkatib12@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">From:</span>
                  <span className="info-value">Dhaka, Bangladesh</span>
                </div>
              </div>
              <button className="btn primary" onClick={() => scrollToSection('contact')}>Download CV</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-item">
                <div className="skill-info">
                  <span>React</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>JavaScript</span>
                  <span>60%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
            
            
            
            
            <div className="skill-category">
              <h3>Others</h3>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Git</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>UI/UX Design</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Project Management</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2023</div>
              <div className="timeline-content">
                <h3> Frontend Developer</h3>
                
                <p>
                 Real life production Learning
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023 - present</div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <a 
      href="https://cyclicit.netlify.app" 
      style={{
        color: '#4a89dc',
        textDecoration: 'none',
        fontWeight: 600
      }}
    >
      CycliciT
    </a>
                <p>
                  Developed and maintained web applications using MERN stack. Collaborated with designers to implement
                  pixel-perfect UIs while ensuring optimal performance.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <h2 className="section-title">My Work</h2>
          <div className="portfolio-filter">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Web</button>
            <button className="filter-btn">Mobile</button>
            <button className="filter-btn">Design</button>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div className="portfolio-image">
               
                <div className="portfolio-overlay">
                  <h3>pet care E-commerce Platform</h3>
                  <p>React, Node.js, MongoDB</p>
                  <button 
  onClick={() => window.open("https://petandvet.netlify.app", "_blank")} 
  className="btn primary"
>
  View Details
</button>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
              
                <div className="portfolio-overlay">
                  <h3>Explore Bangladesh</h3>
                  <p>React Native, Firebase</p>
                  <button 
  onClick={() => window.open("https://explorebangladesh.netlify.app", "_blank")} 
  className="btn primary"
>
  View Details
</button>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="portfolio-image">
                
                <div className="portfolio-overlay">
                  <h3>Farmers Export E-commerce</h3>
                  <p>Next.js, Tailwind CSS</p>
                  <button 
  onClick={() => window.open("https://bengalharvestglobal.netlify.app", "_blank")} 
  className="btn primary"
>
  View Details
</button>
                </div>
              </div>
            </div>

            



            




            
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <h2 className="section-title">Professional Reviews</h2>
          <div className="reviews-container">
            <div className="review-item">
              <div className="review-content">
                <div className="quote-icon">"</div>
                <p>
                  Katib delivered our project ahead of schedule with excellent quality. His attention to detail
                  and problem-solving skills are exceptional. Will definitely work with him again.
                </p>
              </div>
              <div className="review-author">
                <div className="author-image"></div>
                <div className="author-info">
                  <h4>Safin Ahmed</h4>
                  <p>CEO, <a 
      href="https://cyclicit.netlify.app" 
      style={{
        color: '#4a89dc',
        textDecoration: 'none',
        fontWeight: 600
      }}
    >
      CycliciT
    </a></p>
                </div>
              </div>
            </div>
            <div className="review-item">
              <div className="review-content">
                <div className="quote-icon">"</div>
                <p>
                  Working withkatib was a pleasure. He understood our requirements perfectly and provided valuable
                  suggestions that improved the final product. Highly recommended!
                </p>
              </div>
              <div className="review-author">
                <div className="author-image2"></div>
                <div className="author-info">
                  <h4>Pronoy Nath</h4>
                  <p>Project Manager, Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>yasirkatib12@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+8801518924258</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span>MFM</span>
              <p>Creating digital experiences that matter</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('portfolio')}>Portfolio</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe to get updates on my latest work</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your Email" />
                <button className="btn primary">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Md Farhad Mahamud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;