import { Link } from "react-router-dom";

import { Container, Button, Card } from "./styles";

import arrowRightImg from "../../assets/arrowRight.svg";

import nt1Img from "../../assets/nt1.png";
import nt2Img from "../../assets/nt2.png";
import nt3Img from "../../assets/nt3.png";
import nt4Img from "../../assets/nt4.png";
import nt5Img from "../../assets/nt5.png";

import ld4i1Img from "../../assets/ld4i1.png";
import ld4i2Img from "../../assets/ld4i2.png";
import ld4i3Img from "../../assets/ld4i3.png";

import ld5i1Img from "../../assets/ld5i1.svg";
import ld5i2Img from "../../assets/ld5i2.svg";
import ld5i3Img from "../../assets/ld5i3.svg";
import ld5i4Img from "../../assets/ld5i4.svg";

import linkedin_circularImg from "../../assets/linkedin_circular.png";
import arrow_left_circularImg from "../../assets/arrow_left_circular.svg";

import phoneGif from "../../assets/phone.gif";
import { KeenSlider } from "../KeenSlider";

export function LandingContainer() {
  return (
    <Container>
      <div className="landing1">
        <h1 className="text60">
          Revolucionando a educação{" "}
          <span>através de crédito descomplicado.</span>
        </h1>
        <Link to="./" className="textLink16">
          Quero Transformar a minha carreira
        </Link>
      </div>
      <div className="landing2">
        <ul>
          <li>
            <img src={nt1Img} alt="Negócios" />
          </li>
          <li>
            <img src={nt2Img} alt="Valor" />
          </li>
          <li>
            <img src={nt3Img} alt="Forbes" />
          </li>
          <li>
            <img src={nt4Img} alt="EXAME" />
          </li>
          <li>
            <img src={nt5Img} alt="StartSe" />
          </li>
        </ul>
      </div>
      <div className="landing3">
        <img src={phoneGif} alt="Signup preview" />
        <div className="container">
          <section>
            <h1 className="text48 blue">
              Estamos reinventando o <span>crédito educacional</span> para{" "}
              <span>cursos profissionalizantes.</span>
            </h1>
            <h2 className="text24 blue">
              Financie o curso dos seus sonhos sem juros com parceiros
              selecionados e em até 24x no boleto.
            </h2>
          </section>
          <Button icon={arrowRightImg}>
            <span>Simular Agora</span>
          </Button>
        </div>
      </div>
      <div className="landing4">
        <h1 className="text38">
          Histórico de crédito <span>não pode ser</span> uma{" "}
          <span>barreira pra quem quer estudar.</span>
        </h1>
        <div className="rows">
          <ul>
            <li>
              <img src={ld4i1Img} alt="" />
              <p className="text20">
                Mais de <span>70.000 estudantes</span> já transformaram suas
                carreiras com o financiamento Provi.
              </p>
            </li>
            <li>
              <img src={ld4i2Img} alt="" />
              <p className="text20">
                Mais de <span>1.000 escolas parceiras</span> usam nossa
                plataforma como meio de pagamento.
              </p>
            </li>
            <li>
              <img src={ld4i3Img} alt="" />
              <p className="text20">
                Mais de <span>220 milhões de reais</span> em crédito voltados
                para a educação.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="landing5">
        <h1 className="text38 blue center">
          Nós ajudamos nossos parceiros a{" "}
          <span>prepararem os melhores profissionais</span> do mercado!
        </h1>
        <ul className="row">
          <li>
            <img src={ld5i1Img} alt="" />
            <p className="text20 blue center">
              Maior facilidade para entrada de novos alunos
            </p>
          </li>
          <li>
            <img src={ld5i2Img} alt="" />
            <p className="text20 blue center">Maior conversão no checkout</p>
          </li>
          <li>
            <img src={ld5i3Img} alt="" />
            <p className="text20 blue center">
              Menor exposição ao risco de inadimplência
            </p>
          </li>
          <li>
            <img src={ld5i4Img} alt="" />
            <p className="text20 blue center">
              Análise de crédito e cobrança de pagamento dos alunos
            </p>
          </li>
        </ul>
        <Button icon={arrowRightImg} textSize="big" buttonSize="big">
          <span>Quero ser parceiro provi</span>
        </Button>
      </div>
      <div className="landing6">
        <section>
          <h1 className="text38 blue center">
            <span>Conheça os Piners</span>
          </h1>
          <h2 className="text30 blue center">
            As pessoas que transformaram suas carreiras com ajuda da Provi.
          </h2>
        </section>

        <KeenSlider
          content={[
            <Card>
              <section>
                <h1 className="text30 blue center">
                  <span>Clayton Margiotti</span>
                </h1>
                <h2 className="text24 center magenta">
                  <span>Founder and CEO @Eleva Leader</span>
                </h2>
              </section>

              <nav className="cardNavigator">
                <button className="clean">
                  <img src={arrow_left_circularImg} alt="card anterior" />
                </button>
                <Link to="./">
                  <img src={linkedin_circularImg} alt="LinkedIn" />
                </Link>
                <button className="clean">
                  <img
                    src={arrow_left_circularImg}
                    alt="próximo card"
                    className="rotate180"
                  />
                </button>
              </nav>
              <p className="text24 blue">
                A Provi definitivamente foi um elo que proporcionou uma
                experiência fantástica. Um financiamento prático e rápido.
              </p>
            </Card>,
            <Card>
              <section>
                <h1 className="text30 blue center">
                  <span>Giovanni de Paulo da Cunha</span>
                </h1>
                <h2 className="text24 center magenta">
                  <span>Full Stack Developer @ Aoop Cloud Solutions</span>
                </h2>
              </section>

              <nav className="cardNavigator">
                <button className="clean">
                  <img src={arrow_left_circularImg} alt="card anterior" />
                </button>
                <Link to="./">
                  <img src={linkedin_circularImg} alt="LinkedIn" />
                </Link>
                <button className="clean">
                  <img
                    src={arrow_left_circularImg}
                    alt="próximo card"
                    className="rotate180"
                  />
                </button>
              </nav>
              <p className="text24 blue">
                Fazer o curso da Ironhack foi uma das melhores escolhas que já
                fiz, que me proporcionou um conhecimento incrível. Sem a Provi,
                eu não teria tido a chance de fazer o curso.
              </p>
            </Card>,
          ]}
        />
      </div>
      <div className="landing7">
        <section>
          <h2 className="text38 magenta">
            <span>Queremos fazer ainda mais.</span>
          </h2>
          <h1 className="text60 blue">
            <span>
              Income <br /> Share <br /> Agreement
            </span>
          </h1>
          <p className="text24_38 blue">
            O aluno só paga <span>depois que começa a trabalhar.</span> Loucura?
            Transformação da realidade brasileira. Só muda quem acredita.
          </p>
          <Link to="./" className="textLink16 blue">
            Saber mais sobre o ISA
          </Link>
        </section>
      </div>
    </Container>
  );
}
