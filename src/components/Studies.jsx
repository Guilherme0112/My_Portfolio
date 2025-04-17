import style from "../css/Components.module.css";


function Studies({ cursoP, unidadeP, periodoP }) {
    return (
        <div className={style.certificado_container}>
            <h2 className={style.curso}>{cursoP}</h2>
            <p className={style.unidade}>{unidadeP}</p>
            <span className={style.periodo}>{periodoP}</span>
        </div>
    );
}

export default Studies;