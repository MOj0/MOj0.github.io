import "../scss/horizontal_card.scss";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="horizontal_card">
            <div className="horizontal_card_container">
                <div className="horizontal_card_header">
                    <div className="horizontal_card_icon">
                        <div className="horizontal_card_img_cover">
                            <a target="_blank" rel="noopener noreferrer"
                                href={experience.company_url}>
                                <img alt={experience.company} src={experience.icon_url} />
                            </a>
                        </div>
                    </div>
                    <div className="horizontal_card_info">
                        <h4>{experience.title}</h4>
                        <a target="_blank" rel="noopener noreferrer"
                            href={experience.company_url}>
                            <h6>{experience.company}</h6>
                        </a>
                        <p>{experience.start_date} - {experience.end_date}</p>
                    </div>
                </div>
                <div className="horizontal_card_info">
                    <p>{experience.summary}</p>
                </div>
            </div>
        </div>
    )
}


export default ExperienceCard;