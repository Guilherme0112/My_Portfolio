import style from "../css/Components.module.css"

export function ModalVideo({ videoUrl, onClose }) {
  if (!videoUrl) return null

  return (
    <div
      className={style.modal_overlay}
      onClick={onClose} // se clicar no fundo, fecha
    >
      <div
        className={style.modal_content}
        onClick={(e) => e.stopPropagation()} // impede fechar se clicar dentro
      >
        <button style={{backgroundColor: '#d22e2e', position: 'absolute', right: '3px', top: '3px', border: 0, borderRadius: '60%', padding: '7px 10px'}} onClick={onClose}>
          ✕
        </button>
        <div className={style.video_wrapper}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Video do Projeto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}