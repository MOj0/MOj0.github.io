import "../scss/vertical_card.scss";
import ExperienceCard from "./ExperienceCard"

const ExperienceList = ({ list }) => {
    return (
    <div className="flex_card_list">
        {list.map((e, i) => <ExperienceCard key={i} experience={e} route={`/#/experience/${i}`}></ExperienceCard>)}
    </div>
    )
};


export default ExperienceList;