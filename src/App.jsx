/* eslint-disable react/no-unescaped-entities */
import "./assets/styles/main.style.scss";
import Button, { ButtonIcon, ButtonLink } from "./components/buttons/button";
import Header from "./components/header/header";
import TitleSection from "./components/titleSection/titleSection";
import { CardAbout, CardProfil } from "./components/cards/cards";
import Modal from "./components/modal/modal";
import { useState, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "./components/footer/footer";
import { data } from "./utils/data";
import { Roll, Slide, Zoom } from "react-awesome-reveal";
function App() {
  const [modalOpen, setMdalOpen] = useState(false);
  const [infosModal, setInfosModal] = useState({
    name: "",
    Cover: "",
    overview: "",
  });

  const scrollProfilRef = useRef(null);

  const eventOpenModal = (id) => {
    setInfosModal({
      name: data[id].name,
      Cover: data[id].Cover,
      overview: data[id].overview,
    });
    setMdalOpen(true);
  };
  const eventCloseModal = () => {
    setMdalOpen(false);
  };
  const shareOnSocialMedia = async () => {
    const Link = "https://herstoryafrica.vercel.app/";
    const shareMessage = `Découvrez des histoires inspirantes de femmes africaines sur HerStoryAfrica. Rejoignez-nous pour célébrer leur influence et leur impact ! ${Link}`;

    try {
      const permissions = await navigator.permissions.query({
        name: "clipboard-write",
      });

      if (permissions.state === "granted" || permissions.state === "prompt") {
        if (navigator.share) {
          await navigator.share({
            title: "Share Quote By HerStoryAfrica ",
            text: shareMessage,
          });
          console.log("Shared successfully");
        } else {
          console.log("Sharing not supported, opening fallback");
        }
      } else {
        throw new Error(
          "Can't access the clipboard. Check your browser permissions."
        );
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const scrollLeft = () => {
    if (scrollProfilRef.current) {
      scrollProfilRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (scrollProfilRef.current) {
      scrollProfilRef.current.scrollLeft += 100;
    }
  };

  return (
    <>
      <Header />
      <section className="container__banner">
        <div className="banner__text">
          <Zoom triggerOnce={true}>
            <h2 className="title__section">Héroïnes Africaines</h2>
          </Zoom>
          <Zoom triggerOnce={true}>
            <p style={{ marginBottom: "25px" }}>
              Inspirantes Femmes Qui Ont Marqué l'Histoire de l’afrique
            </p>
          </Zoom>
          <Slide triggerOnce={true}>
            <ButtonLink text={"Découvrir"} link={"#profils"} />
          </Slide>
        </div>

        <div className="banner__images">
          {data.slice(0, 9).map((item, index) => (
            <Zoom
              className="banner-img selected"
              key={index}
              triggerOnce={true}
            >
              <img src={item.Cover} alt={item.name} />
            </Zoom>
          ))}
        </div>
      </section>
      <section className="about__section">
        <TitleSection title={"Pourquoi Cette Page ?"} />

        <div className="about__content">
          <CardAbout
            order={1}
            title={"Reconnaître l'Invisible"}
            overview={
              "Cette page met en avant les contributions sous-estimées des femmes africaines dans l'histoire, reconnaissant ainsi leur impact et cherchant à rendre justice à ces héroïnes souvent oubliées."
            }
            translate={0}
          />
          <CardAbout
            order={2}
            title={"Inspirer les Générations Futures"}
            overview={
              "En partageant les récits inspirants de femmes ayant surmonté d'énormes obstacles, nous visons à inspirer les générations à venir. Chaque histoire représente une leçon de courage et de résilience pour tous ceux et celles qui aspirent à façonner un avenir meilleur."
            }
            translate={80}
          />
          <CardAbout
            order={3}
            title={"Diversité en Héritage"}
            overview={
              "L'Afrique, riche en diversité culturelle et historique, est célébrée sur cette page à travers les parcours variés des femmes africaines qui ont contribué à cette mosaïque unique. Nous croyons en la puissance de la diversité pour enrichir nos perspectives et notre compréhension collective."
            }
            translate={200}
          />
        </div>
      </section>
      <section className="container__profils">
        <TitleSection title={"Femmes d'Influence Africaine"} />
        <Roll className="datils" triggerOnce={true}>
          les visages inspirants des femmes africaines qui ont laissé leur
          empreinte indélébile sur l'histoire de notre continent.
        </Roll>
        <div className="controll-slide" id="profils">
          <ButtonIcon icons={<IoIosArrowBack />} eventHandler={scrollLeft} />
          <ButtonIcon
            icons={<IoIosArrowForward />}
            eventHandler={scrollRight}
          />
        </div>
        <div
          className="container__profil"
          ref={scrollProfilRef}
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          {data.map((item, index) => (
            <CardProfil
              key={index}
              cover={item.Cover}
              name={item.name}
              handlerOpenModal={() => eventOpenModal(index)}
            />
          ))}
        </div>
      </section>
      <section className="cta__container">
        <Slide className="title__section" triggerOnce={true}>
          Propageons l'inspiration ! Partagez cette page avec vos proches et
          célébrons ensemble les femmes africaines qui ont marqué l'histoire de
          notre continent.
        </Slide>
        <Button text={"Partager"} eventHandler={shareOnSocialMedia} />
      </section>
      <section className="special__thanks">
        <TitleSection title={"Special Thanks"} />
        <Zoom className="p">
          Un immense merci à l'UNESCO ! C'est grâce à la richesse des récits
          préservés et partagés sur son site web que nous pouvons vous proposer
          cette sélection d'histoires inspirantes.
        </Zoom>
      </section>
      <Footer />
      <Modal
        isOpen={modalOpen}
        cover={infosModal.Cover}
        name={infosModal.name}
        overview={infosModal.overview}
        handlerClose={eventCloseModal}
      />
    </>
  );
}

export default App;
