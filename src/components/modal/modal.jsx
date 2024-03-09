import Button from "../buttons/button";
import "./style.scss";
import { createPortal } from "react-dom";
function Modal({ isOpen, cover, name, overview, handlerClose }) {
  if (isOpen) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }
  return (
    isOpen &&
    createPortal(
      <div className="modal__box">
        <div
          className="modal__container"
          style={{
            background: `url(${cover}) center/cover`,
          }}
        >
          <div className="pics">
            <img src={cover} alt="" />
          </div>
          <div className="overview">
            <span>{name}</span>
            <p>{overview}</p>
            <div className="control-box">
              <Button text={"Fermer"} eventHandler={handlerClose} />
            </div>
          </div>
        </div>
      </div>,
      document.querySelector("#root")
    )
  );
}

export default Modal;
