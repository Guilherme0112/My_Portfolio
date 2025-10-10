import style from "./ModalVideo.module.css"

export function ModalVideo({ videoUrl, onClose }) {
  if (!videoUrl) return null

  return (
    <div
      className={style.modal_overlay}
      onClick={onClose}
    >
      <div
        className={style.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-[1px] right-[1px] bg-red-700 rounded-full p-[7px] px-[10px] border-0"
          onClick={onClose}
        >
          ✕
        </button>

        <div className={style.video_wrapper}>
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Video do Projeto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}