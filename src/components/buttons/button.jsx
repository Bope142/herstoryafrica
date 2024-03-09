/* eslint-disable react/prop-types */
import "./style.scss";

function Button({ text, eventHandler }) {
  return (
    <button className="btn" onClick={eventHandler}>
      {text}
    </button>
  );
}

export const ButtonIcon = ({ icons, eventHandler }) => {
  return (
    <button className="btn btn-icons" onClick={eventHandler}>
      {icons}
    </button>
  );
};

export const ButtonLink = ({ text, link }) => {
  return (
    <a href={link} className="btn btn-link">
      {text}
    </a>
  );
};

export default Button;
