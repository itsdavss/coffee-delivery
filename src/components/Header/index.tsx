import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/images/Logo.png";
import { HeaderContainer, HeaderInfo } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="Logo Coffee Devilery" />
      </div>
      <HeaderInfo>
        <div><MapPin size={22} />São Paulo, SP</div>
        <a href="/checkout"><ShoppingCart size={22} /></a>
      </HeaderInfo>
    </HeaderContainer>
  );
}
