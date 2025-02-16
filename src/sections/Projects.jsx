import './projects.css'
import ProjectCard from './ProjectCard';

import cs1 from '../assets/projectImages/campSafari1.png';
import cs2 from '../assets/projectImages/campSafari2.png';
import cs3 from '../assets/projectImages/campSafari3.png';
import cs4 from '../assets/projectImages/campSafari4.png';
import cs5 from '../assets/projectImages/campSafari5.png';
import cs6 from '../assets/projectImages/campSafari6.png';

import ub1 from '../assets/projectImages/uiBazar1.png';
import ub2 from '../assets/projectImages/uiBazar2.png';
import ub3 from '../assets/projectImages/uiBazar3.png';
import ub4 from '../assets/projectImages/uiBazar4.png';

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

import lv1 from '../assets/projectImages/LogoVerse1.png';
import lv2 from '../assets/projectImages/LogoVerse2.png';
import lv3 from '../assets/projectImages/LogoVerse3.png';
import lv4 from '../assets/projectImages/LogoVerse4.png';
import lv5 from '../assets/projectImages/LogoVerse5.png';
import lv6 from '../assets/projectImages/LogoVerse6.png';

const projectsData = [
    {
        title: 'CampSafari 🏕️',
        description: 'CampSafari is a web application for discovering , adding and reviewing campgrounds all over the world.',
        technologies: ['NodeJS', 'Express', 'MongoDB', 'MapBox'],
        liveLink: 'https://camp-safari.onrender.com',
        githubLink: 'https://github.com/praveen-rikhari/CampSafari',
        imagesSrc: [
            cs1, cs2, cs3, cs4, cs5, cs6
        ],
    },
    {
        title: 'Ui-Bazar',
        description: 'UI-Bazar is a dynamic platform, enabling users to discover, create, & share HTML & CSS UI snippets with an intuitive interface, it simplifies exploring and managing a wide range of UI components for your projects.',
        technologies: ['NextJS', 'Clerk', 'MongoDB', 'NodeJs'],
        liveLink: 'https://ui-bazar.vercel.app/',
        githubLink: 'https://github.com/praveen-rikhari/UI-Bazar/',
        imagesSrc: [
            ub1, ub2, ub3, ub4
        ],
    },
    {
        title: 'LogoVerse 🪄',
        description: 'LogoVerse is an AI-powered application that helps users generate custom logos effortlessly using advanced AI technology.',
        technologies: ['Next Js', 'Gemini & Flux API', 'FireBase'],
        liveLink: 'https://logo-verse.vercel.app/',
        githubLink: 'https://github.com/praveen-rikhari/LogoVerse/',
        imagesSrc: [
            lv1, lv2, lv3, lv4, lv5, lv6
        ],
    },
    {
        title: 'Blogger.com ✉️',
        description: 'Blogger.com is a blog application where users can create, read, edit, and delete blogs, & can upload images to accompany their posts.',
        technologies: ['MongoDB', 'Express', 'React', 'NodeJs'],
        liveLink: 'https://blogger-frontend-tm4i.onrender.com',
        githubLink: 'https://github.com/praveen-rikhari/MERN_Blog_App',
        imagesSrc: [
            b1, b2, b3, b4, b5, b6
        ],
    },
    {
        title: 'Factual Hub 💡',
        description: 'Factual Hub is a web application where users can add & discover amazing and mind-blowing facts on various categories.',
        technologies: ['React', 'Css', 'SupaBase'],
        liveLink: 'https://factual-hub-parveen.netlify.app/',
        githubLink: 'https://github.com/praveen-rikhari/Factual-Hub',
        imagesSrc: [
            fh1, fh2, fh3, fh4, fh5
        ],
    },
    {
        title: 'TastyBites 🍪',
        description: 'Tasty Bites is a multipage responsive recipe app that enable users to search, view details, and follow step-by-step instructions for recipes.',
        technologies: ['React', 'Css', 'Spoonacular API'],
        liveLink: 'https://tasty-bites-parveen.netlify.app/',
        githubLink: 'https://github.com/praveen-rikhari/React-Recipe-App',
        imagesSrc: [
            tb1, tb2, tb3, tb4, tb5
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
