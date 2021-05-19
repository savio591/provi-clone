import { BurguerStyle } from "./styles";
import burguerImg from "../../assets/burguer.svg"

interface BurguerProps {
  onClick?: () => void
}

export function Burguer({onClick}: BurguerProps) {
  return (
    <BurguerStyle onClick={onClick}>
      <img src={burguerImg} alt="Menu" />
    </BurguerStyle>
  );
}
