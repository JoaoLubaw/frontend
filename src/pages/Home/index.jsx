import Logo from "../../assets/logo.png";
import Parada1 from "../../assets/Parada1.jpg";
import Parada2 from "../../assets/Parada2.jpg";

import { HomeContainer } from "./style";
import SwiperMenu from "../../components/SwiperMenu";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <div className="container">
          <section className="hero">
            <img src={Logo} alt="Logo Maes do Amor em Defesa Da Diversidade" />
          </section>
          <section id="About" className="About">
            <h1>Quem somos?</h1>
            <div className="division">
              <img
                src={Parada1}
                alt="Imagem da parada da diversidade em Blumenau SC"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                fugiat facilis rerum, corporis laudantium impedit neque
                perspiciatis voluptas fugit, molestias, quidem accusantium nihil
                minima qui quo voluptates laboriosam et rem! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Sit fugiat facilis rerum,
                corporis laudantium impedit neque perspiciatis voluptas fugit,
                molestias, quidem accusantium nihil minima qui quo voluptates
                laboriosam et rem!Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sit fugiat facilis rerum, corporis laudantium
                impedit neque perspiciatis voluptas fugit, molestias, quidem
                accusantium nihil minima qui quo voluptates laboriosam et rem!
              </p>
            </div>
            <img
              src={Parada2}
              className="fullW"
              alt="Pessoas reunidas na parada da diversidade em Blumenau"
            />
          </section>
          <section id="WhatWeDo" className="WhatWeDo">
            <h1>O que fazemos?</h1>
            <div className="menu">
              <SwiperMenu />
            </div>
          </section>
        </div>
      </HomeContainer>
      <Footer mode={"relative"} />
    </>
  );
};

export default Home;
