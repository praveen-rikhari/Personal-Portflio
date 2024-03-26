import SkillsCard from './SkillsCard';
import './skills.css'
import feImg from '../assets/feImg.gif';
import beImg from '../assets/beImg.gif';
import othersImg from '../assets/others.png';

const skillsData = [
    {
        cardClass: 'frontend',
        title: 'Frontend',
        description: 'Experienced in HTML, CSS, JS responsive web design, UI and modern frameworks like ReactJS, Redux. Familiar with Bootstrap, Tailwind, and MaterialUI.',
        techSrc: ['html', 'css', 'js', 'react', 'nextjs', 'redux', 'styledcomponents', 'bootstrap', 'tailwind', 'mui'],
        imageSrc: feImg,
    },
    {
        cardClass: 'backend',
        title: 'Backend',
        description: 'Skilled in server-side programming using technologies like Node.js, EJS, django and Express. Experience working with databases such as MongoDB, MySql, SupaBase.',
        techSrc: ['js', 'nodejs', 'express', 'mongo', 'mysql', 'supabase', 'django', 'go'],
        imageSrc: beImg,
    },
    {
        cardClass: 'others',
        title: 'Others',
        description: 'Proficient in Git and GitHub, skilled in Blender for 3D design and animation, and quite hands on in C++, Typescript, Docker with additional proficiency in Postman for API testing and development.',
        techSrc: ['git', 'github', 'postman', 'docker', 'blender', 'md', 'ts', 'cpp', 'python'],
        imageSrc: othersImg,

    },
];


function Skills() {
    return (
        <>
            <section className="skills" id='skills'>
                <div className="container">
                    <div className="skills-content">
                        <h3>My Skills</h3>
                        <h6>These are the skills which I have expertise in.</h6>
                        {
                            skillsData.map((skill, index) => (
                                <SkillsCard key={index} {...skill} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;