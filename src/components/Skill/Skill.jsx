import style from "./Skill.module.css"

function Skill({image, name}){
    
    return (

        <div className={style.skill}>
            <img src={image} title={name} width="50" />
            <p>{name}</p>
        </div>
    )
}

export default Skill;