/* eslint-disable react/prop-types */
import Button from "../buttons/button";
import "./style.scss";

export const CardAbout = ({ order, title, overview, translate }) => {
  return (
    <div
      className="card__about"
      style={{
        transform: `translateY(${translate}px)`,
      }}
    >
      <div className="order">{order}</div>
      <span className="title">{title}</span>
      <p className="overview">{overview}</p>
    </div>
  );
};

export const CardProfil = ({ cover, name, handlerOpenModal }) => {
  return (
    <div className="card__profil">
      <img src={cover} alt="" />
      <div className="detail__profil">
        <div className="content">
          <span className="name">{name}</span>
          <Button text={"Voir l’histoire"} eventHandler={handlerOpenModal} />
        </div>
      </div>
    </div>
  );
};
