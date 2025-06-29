import style from "../css/Components.module.css"

function Project({ name, descricao, github, deploy }) {

    return (

        <div className={style.project_card}>
            <div className={style.project_title}>{name}</div>
            <div className={style.project_description}>
                {descricao}
            </div>
            <div className={style.buttons}>
                <a
                    href={deploy || "#"}
                    target="_blank"
                    style={{
                        pointerEvents: deploy ? 'auto' : 'none',
                        opacity: deploy ? 1 : 0.5,
                        cursor: deploy ? 'pointer' : 'not-allowed'
                    }}
                >
                    Ver Deploy
                </a>
                <a href={github} target="_blank">Repositório</a>
            </div>
        </div>
    )
}

export default Project;