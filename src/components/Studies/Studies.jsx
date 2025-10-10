import style from "./Studies.module.css";


function Studies({ cursoP, unidadeP, periodoP, certificateLink }) {
    return (
        <div className={style.course_card}>
            <div className={style.course_header}>
                <h3 className={style.course_name}>{cursoP}</h3>
                <span className={style.institution}>{unidadeP}</span>
            </div>
            <div className={style.course_period}>{periodoP}</div>
            {certificateLink && (
                <a className={style.certificate} href={certificateLink} target="_blank" rel="noopener noreferrer">
                    Ver certificado
                </a>
            )}
        </div>
    );
}

export default Studies;