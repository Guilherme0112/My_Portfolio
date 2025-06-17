import style from "../css/Components.module.css"

function Experience({ cargo, empresa, periodo, descricao }) {

    return (
    <div className={style.experience_card}>
      <div className={style.experience_header}>
        <h2 className={style.cargo}>{cargo}</h2>
        <span className={style.empresa}>{empresa}</span>
      </div>
      <div className={style.periodo}>{periodo}</div>
      <p className={style.descricao}>{descricao}</p>
    </div>
  );
}

export default Experience;