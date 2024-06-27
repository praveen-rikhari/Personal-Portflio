import './projects.css'
import ProjectCard from './ProjectCard';

import cs1 from '../assets/projectImages/campSafari1.png';
import cs2 from '../assets/projectImages/campSafari2.png';
import cs3 from '../assets/projectImages/campSafari3.png';
import cs4 from '../assets/projectImages/campSafari4.png';
import cs5 from '../assets/projectImages/campSafari5.png';
import cs6 from '../assets/projectImages/campSafari6.png';

import sgo1 from '../assets/projectImages/speedyGo1.png';
import sgo2 from '../assets/projectImages/speedyGo2.png';
import sgo3 from '../assets/projectImages/speedyGo3.png';
import sgo4 from '../assets/projectImages/speedyGo4.png';
import sgo5 from '../assets/projectImages/speedyGo5.png';
import sgo6 from '../assets/projectImages/speedyGo6.png';

import b1 from '../assets/projectImages/blogger1.png';
import b2 from '../assets/projectImages/blogger2.png';
import b3 from '../assets/projectImages/blogger3.png';
import b4 from '../assets/projectImages/blogger4.png';
import b5 from '../assets/projectImages/blogger5.png';
import b6 from '../assets/projectImages/blogger6.png';

import fh1 from '../assets/projectImages/factualHub1.png';
import fh2 from '../assets/projectImages/factualHub2.png';
import fh3 from '../assets/projectImages/factualHub3.png';
import fh4 from '../assets/projectImages/factualHub4.png';
import fh5 from '../assets/projectImages/factualHub5.png';

import tb1 from '../assets/projectImages/tastyBites1.png';
import tb2 from '../assets/projectImages/tastyBites2.png';
import tb3 from '../assets/projectImages/tastyBites3.png';
import tb4 from '../assets/projectImages/tastyBites4.png';
import tb5 from '../assets/projectImages/tastyBites5.png';

import cd1 from '../assets/projectImages/cryptoDash1.png';
import cd2 from '../assets/projectImages/cryptoDash2.png';
import cd3 from '../assets/projectImages/cryptoDash3.png';
import cd4 from '../assets/projectImages/cryptoDash4.png';

const projectsData = [
    {
        title: 'CampSafari 🏕️',
        description: 'CampSafari is a web application for discovering , adding and reviewing campgrounds all over the world.',
        technologies: ['NodeJS', 'Express', 'MongoDB', 'MapBox'],
        liveLink: 'https://camp-safari.onrender.com',
        githubLink: 'https://github.com/praveen-rikhari/CampSafari',
        imagesSrc: [
            cs1,cs2,cs3,cs4,cs5,cs6
        ],
    },
    {
        title: 'SpeedyGO 🚕',
        description: 'Speedy GO is a cab booking application that allows users to book rides conveniently. Created using Next Js, Clerk, Mapbox & Stripe.',
        technologies: ['NextJS', 'Clerk', 'Stripe', 'MapBox'],
        liveLink: 'https://speedy-go.vercel.app',
        githubLink: 'https://github.com/praveen-rikhari/Cab-Booking-App',
        imagesSrc: [
            sgo1,sgo2,sgo3,sgo4,sgo5,sgo6
        ],
    },
    {
        title: 'Blogger.com ✉️',
        description: 'Blogger.com is a blog application where users can create, read, edit, and delete blogs, & can upload images to accompany their posts.',
        technologies: ['MongoDB', 'Express', 'React', 'NodeJs'],
        liveLink: 'https://blogger-frontend-tm4i.onrender.com',
        githubLink: 'https://github.com/praveen-rikhari/MERN_Blog_App',
        imagesSrc: [
            b1,b2,b3,b4,b5,b6
        ],
    },
    {
        title: 'Factual Hub 💡',
        description: 'Factual Hub is a web application where users can add & discover amazing and mind-blowing facts on various categories.',
        technologies: ['React', 'Css', 'SupaBase'],
        liveLink: 'https://factual-hub-parveen.netlify.app/',
        githubLink: 'https://github.com/praveen-rikhari/Factual-Hub',
        imagesSrc: [
            fh1,fh2,fh3,fh4,fh5
        ],
    },
    {
        title: 'TastyBites 🍪',
        description: 'Tasty Bites is a multipage responsive recipe app that enable users to search, view details, and follow step-by-step instructions for recipes.',
        technologies: ['React', 'Css', 'Spoonacular API'],
        liveLink: 'https://tasty-bites-parveen.netlify.app/',
        githubLink: 'https://github.com/praveen-rikhari/React-Recipe-App',
        imagesSrc: [
            tb1,tb2,tb3,tb4,tb5
        ],
    },
    {
        title: 'CryptoDash 🪙',
        description: 'CryptoDash is a crypto web app that allows users to search for information & real-time updates about various cryptocurrencies.',
        technologies: ['React', 'Css', 'CoinGecko API'],
        liveLink: 'https://crypto-dash-parveen.netlify.app/',
        githubLink: 'https://github.com/praveen-rikhari/Crypto-Tracker-App',
        imagesSrc: [
            cd1,cd2,cd3,cd4
        ],
    },
];

const Projects = () => {
    return (
        <section className="projects" id='projects'>
            <div className="container">
                <h3>My Projects 🚀</h3>
                <h6>Each project is made with ❤️ and hunger of development.</h6>
                <div className="projects-container">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
