import './home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import myCV from '../assets/Parveen-Rikhari-CV.pdf'
import myImg1 from '../assets/myImg1.png'
function Home() {
    const [text] = useTypewriter({
        words: ['Parveen Rikhari', 'Web Developer', '3D-Artist'],
        loop: false,
        typeSpeed: 100,
        deleteSpeed: 60,
        delaySpeed: 700,
    })

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = myCV;
        link.download = 'Parveen-Rikhari-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <section className="home" id='home' >
                <div className="container">
                    <div className="content">
                        <div className="home-main">
                            <div className="home-text">
                                <h1 className='heading'>Hello, I am <br />
                                    <small className='typer'>
                                        {text}
                                        <Cursor cursorColor='#00b3a7' />
                                    </small>
                                </h1>
                                <p>
                                    Hi, I'm Parveen Rikhari. A passionate Web Developer based in New Delhi, India 🇮🇳.
                                </p>
                                <span className='links'>
                                    <a href="https://github.com/praveen-rikhari" aria-label='github' rel='noreferrer' target='_blank'>
                                        <i className='bi bi-github'></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/praveen-rikhari-9485a1288/" aria-label='linkedin' rel='noreferrer' target='_blank'>
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </span>
                            </div>
                            <div className="home-img">
                                <img src={myImg1} alt="" />
                            </div>
                        </div>
                        <div className="more">
                            <p>Wanna know more about me?</p>
                            <button onClick={handleDownloadCV} className='download-btn'>
                                Download CV <i className="bi bi-download"></i>
                            </button>
                        </div>
                        <div className="arrow">
                            <Link to='about' smooth={true} duration={500}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Home;