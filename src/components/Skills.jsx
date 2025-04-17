import style from "../css/Components.module.css"

function Skills({image, name}){
    
    return (

        <div className={style.skill}>
            <img src={image} title={name} width="50" />
            <p>{name}</p>
        </div>
    )
}

export default Skills;