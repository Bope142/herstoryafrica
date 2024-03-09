/* eslint-disable react/prop-types */
import "./style.scss";
import { JackInTheBox } from "react-awesome-reveal";
function TitleSection({ title }) {
  return (
    <JackInTheBox className="title__section" triggerOnce={true}>
      {title}
    </JackInTheBox>
  );
}

export default TitleSection;
