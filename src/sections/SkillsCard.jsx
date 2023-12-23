import './skills.css'

function SkillsCard({ cardClass, title, description, techSrc, imageSrc }) {
    return (
        <div className="skills-card">
            <div className={`card ${cardClass}`}>
                <div className="card-img">
                    <img src={imageSrc} alt="" />
                </div>
                <div className="card-text">
                    <h1>{title}</h1>
                    <p>
                        {description}
                    </p>

                    {
                        techSrc.map((tech, index) => (
                            <img className='skills-icon' src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} key={index} />

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default SkillsCard;