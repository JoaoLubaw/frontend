import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { breakpoints } from "../../styles";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
	height: 320px;
	
  .swiper-slide {
		img {
		transition: transform 0.3s ease-in-out;
		}
  }

  .swiper-slide.selected, .swiper-slide:hover {
		z-index: 2;
		
		h3 {
		display:none;
		}

		img {
		transform: scale(1.15);
		}
  }

	.item {
        min-width: 184px;
        cursor: pointer;
				text-align: center;
				height: 100%;
				align-items: center;
				display: flex;
				flex-direction: column;
    		justify-content: center; /* Centraliza verticalmente */


        img {
          border-radius: 2%;
          object-fit: cover;
          height: 80%;
					width:80%;
        }

				h3 {
				font-size: 18px;
				}
`;

export const ContentContainer = styled.div`
  text-align: center;
  padding: 24px;

  h2 {
    font-size: 24px;
    margin: 24px;
  }

  .division {
    display: flex;
    justify-content: space-between;
    img {
      width: 40%;
      height: 328px;
      object-fit: cover;
    }

    p {
      max-width: 55%;
      font-size: 16px;
      text-align: start;
    }
  }

  @media (max-width: ${breakpoints.mobileG}) {
    .division {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        max-width: 100%;
        margin-top: 16px;
        font-size: 14px;
      }

      img,
      p {
        width: 100%;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    p {
      font-size: 12px;
    }
  }
`;
