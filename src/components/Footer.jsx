function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Information */}

        <div className="footer-column">

          <h2>Innoventies</h2>

          <p>
            We build modern digital solutions that
            help businesses grow and succeed.
          </p>

        </div>
         <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>
        <div className="footer-column">

          <h3>Services</h3>

          <a href="#services">Web Development</a>
          <a href="#services">Mobile Development</a>
          <a href="#services">Cloud Solutions</a>
          <a href="#services">DevOps</a>
          <a href="#services">UI/UX Design</a>
          <a href="#services">Digital Marketing</a>


        </div>
        <div className="footer-column">

          <h3>Contact</h3>

          <p> contact@innoventies.com</p>
          <p> 8861662775</p>
          <p> India</p>

        </div>

      </div>
      <div className="footer-bottom">

        <p>
          © 2026 Innoventies. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;

