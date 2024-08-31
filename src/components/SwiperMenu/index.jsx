import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ApoioJud from "../../assets/1.png";
import ArteCultura from "../../assets/2.png";
import Palestras from "../../assets/3.png";
import Piquiniques from "../../assets/4.png";
import ApoioPsi from "../../assets/5.png";
import Acolhimento from "../../assets/6.png";

import { ContentContainer, StyledSwiper } from "./style";

const SwiperMenu = () => {
  const [items] = useState([
    {
      id: "1",
      titulo: "Arte e Cultura",
      imagem: ArteCultura,
      Descricao: `Fundada em 2017, a Casa 1 é um projeto de sociedade civil que tem como propósito a acolhida de jovens entre 18 e 25 anos que foram expulsos de casa pela família por suas orientações afetivas sexuais e identidade de gênero. O trabalho corre em paralelo às atividades do Centro Cultural e da Clínica Social, com todos os serviços ofertados gratuitamente.
Fundada em 2017, a Casa 1 é um projeto de sociedade civil que tem como propósito a acolhida de jovens entre 18 e 25 anos que foram expulsos de casa pela família por suas orientações afetivas sexuais e identidade de gênero. O trabalho corre em paralelo às atividades do Centro Cultural e da Clínica Social, com todos os serviços ofertados gratuitamente.
Fundada em 2017, a Casa 1 é um projeto de sociedade civil que tem como propósito a acolhida de jovens entre 18 e 25 anos que foram expulsos de casa pela família por suas orientações afetivas sexuais e identidade de gênero. O trabalho corre em paralelo às atividades do Centro Cultural e da Clínica Social, com todos os serviços ofertados gratuitamente.`,
    },
    {
      id: "2",
      titulo: "Palestras",
      imagem: Palestras,
      Descricao: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: "3",
      titulo: "Piquiniques",
      imagem: Piquiniques,
      Descricao: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: "4",
      titulo: "Acolhimento",
      imagem: Acolhimento,
      Descricao: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: "5",
      titulo: "Apoio Psicológico",
      imagem: ApoioPsi,
      Descricao: "Lorem ipsum dolor sit amet consectetur...",
    },
    {
      id: "6",
      titulo: "Apoio Judicial",
      imagem: ApoioJud,
      Descricao: "Lorem ipsum dolor sit amet consectetur...",
    },
  ]);

  const [selected, setSelected] = useState(items[0]);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const activeIndex = swiperRef.current.swiper.realIndex;
      setSelected(items[activeIndex]);
    }
  };

  const handleSlideClick = (item) => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const index = items.findIndex((i) => i.id === item.id);
      swiper.slideTo(index);
      setSelected(item); // Update the selected item
      swiper.autoplay.pause();
    }
  };

  useEffect(() => {
    handleSlideChange(); // Set the initial selected item
  }, []);

  return (
    <>
      <StyledSwiper
        spaceBetween={16}
        centeredSlides={false}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
          2560: { slidesPerView: 6 },
        }}
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            onClick={() => handleSlideClick(item)}
            className={`item ${selected.id === item.id ? "selected" : ""}`}
          >
            <img src={item.imagem} alt={item.titulo} />
            <h3>{item.titulo}</h3>
          </SwiperSlide>
        ))}
      </StyledSwiper>

      {selected && (
        <ContentContainer>
          <h2>{selected.titulo}</h2>
          <div className="division">
            <img src={selected.imagem} alt={selected.titulo} />
            <p>{selected.Descricao}</p>
          </div>
        </ContentContainer>
      )}
    </>
  );
};

export default SwiperMenu;
