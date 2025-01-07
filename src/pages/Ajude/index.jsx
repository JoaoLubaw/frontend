import { toast } from "react-toastify";

import { AjudeContainer } from "./style";

import QR from "../../assets/qrCodePix.png";
import Copy from "../../assets/copy.svg";
import { useState } from "react";
import Footer from "../../components/Footer";

const Ajude = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess("Texto copiado!");
        toast.success("Código Pix copiado para área de transferência"); // Corrigido: Toast sendo chamado aqui
      })
      .catch((err) => {
        setCopySuccess("Falha ao copiar");
        toast.success("Falha ao copiar");
      });
  };

  return (
    <>
      <AjudeContainer>
        <h1>Como ajudar?</h1>

        <div className="pix">
          <img src={QR} alt="QR Code Pix" />
          <div className="chave">
            <span>Chave Pix CNPJ: 51.715.635/0001-06</span>
            <button onClick={() => copyToClipboard("51.715.635/0001-06")}>
              <img src={Copy} alt="Copiar" />
            </button>
          </div>
        </div>

        <div className="text">
          <p>
            Toda forma de ajuda é bem vinda, se você não puder nos ajudar
            financeiramente mas quiser colaborar com o instituto com seu tempo,
            conhecimento, talento (e etc) você pode acessar a área de contato
            para conversar conosco, sua presença será muito bem vinda e
            ficaríamos muito felizes.
          </p>
        </div>
      </AjudeContainer>
      <Footer mode={"relative"} />
    </>
  );
};

export default Ajude;
