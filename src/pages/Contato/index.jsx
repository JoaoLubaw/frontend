import { ContatoContainer } from "./style";

import FacebookLogo from "../../assets/FaceG.svg";
import InstaLogo from "../../assets/InstaG.svg";
import WhatsLogo from "../../assets/Whats.svg";
import LinkTree from "../../assets/LinkTree.svg";

import Alert from "../../assets/alert.svg";
import Footer from "../../components/Footer";

const Contato = () => {
  return (
    <>
      <ContatoContainer className="container">
        <h1>Contato</h1>
        <div className="division">
          <div className="card">
            <a
              target="_blank_"
              href="https://docs.google.com/forms/d/e/1FAIpQLSflqCb7_B2usVBFcdA-pEG-ck-kwnZzcoFTXeHRFYTXDdTPbg/viewform"
            >
              <img src={Alert} alt="Atenção" />
              <span>
                Se precisar de ajuda, pode preencher nosso formulário para
                pedido de apoio clicando aqui
              </span>
              <img src={Alert} alt="Atenção" />
            </a>
          </div>

          <section className="SocialMedias">
            <h2>Redes Sociais</h2>
            <div className="links">
              <a
                target="_blank_"
                href="https://www.instagram.com/maesdoamor.diversidade/"
              >
                <img src={InstaLogo} alt="Instagram" />
              </a>

              <a
                target="_blank_"
                href="https://api.whatsapp.com/send?phone=5547991045555"
              >
                <img src={WhatsLogo} alt="Whatsapp" />
              </a>

              <a
                target="_blank_"
                href="https://www.facebook.com/Maesdoamoremdefesadadiversidade/"
              >
                <img src={FacebookLogo} alt="Facebook" />
              </a>

              <a target="_blank_" href="https://linktr.ee/maesdoamor">
                <img src={LinkTree} alt="LinkTree" />
              </a>
            </div>
          </section>
        </div>
      </ContatoContainer>
      <Footer mode={"absolute"} />
    </>
  );
};

export default Contato;
