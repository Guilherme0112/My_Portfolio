import style from "./Experience.module.css";

function Experience({ cargo, empresa, periodo, descricao, lado }) {
  return (
    <div
      className={`${style.timeline_item} ${
        lado === "right" ? style.right : style.left
      }`}
    >
      <div className={style.content}>
        <h2 className={style.cargo}>{cargo}</h2>
        <span className={style.empresa}>{empresa}</span>
        <div className={style.periodo}>{periodo}</div>
        <p className={style.descricao}>{descricao}</p>
      </div>
    </div>
  );
}

export default Experience;
