import './about.css'
import aboutImg from '../assets/aboutImg.gif'

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-img">
              <img src={aboutImg} alt="about img" />
            </div>
            <div className="about-text">
              <h3>About Me</h3>
              <h4>A dedicated Web Developer based in New Delhi, India 🇮🇳.</h4>
              <p>
                As a Junior Web Developer, I possess an impressive arsenal of skills in both frontend and backend. I excel in designing and maintaining responsive websites that offer a smooth user experience.I have experience using HTML, CSS, Javascript, React, Node, MongoDb and Express.
                Ability to deliver quality results while collaborating in rapidly changing work environments and team compositions.
                A passionate person willing to learn more technologies to become a better developer than i was yesterday. So determined and result orietend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About