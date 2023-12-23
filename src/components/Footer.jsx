import { Link } from 'react-scroll';
import './footer.css'


function Footer() {
    return (
        <footer className="footer">
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>

            <div className="social-icons">
                <a href="https://github.com/praveen-rikhari" className='github' target="_blank" rel="noopener noreferrer">
                    <i className='bi bi-github'></i>
                </a>
                <a href="https://twitter.com/ParveenRikhari" className='twitter' target="_blank" rel="noopener noreferrer">
                    <i className='bi bi-twitter'></i>
                </a>
                <a href="https://www.linkedin.com/in/praveen-rikhari-9485a1288/" className='linkedin' target="_blank" rel="noopener noreferrer">
                    <i className='bi bi-linkedin'></i>
                </a>
                <a href="https://www.instagram.com/praveen_rikhari45/" className='instagram' target="_blank" rel="noopener noreferrer">
                    <i className='bi bi-instagram'></i>
                </a>
            </div>

            <div className="info">
                <div className='info-box'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>New Delhi, India 🇮🇳</span>
                </div>
                <div className='info-box'>
                    <i className="bi bi-telephone-fill"></i>
                    <span>+91 9871999606</span>
                </div>
                <div className='info-box'>
                    <i className="bi bi-envelope-fill"></i>
                    <span>praveenrikhari45@gmail.com</span>
                </div>

            </div>
            <hr className="line" />
            <p>Made with ❤️ by Parveen Rikhari</p>

            <Link to="home" smooth={true} duration={1000} className="scroll-to-top">
                <i className="bi bi-arrow-up"></i>
            </Link>
        </footer>

    )
}

export default Footer;