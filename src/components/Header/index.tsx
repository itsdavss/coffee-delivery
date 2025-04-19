import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/images/Logo.png";
import { HeaderContainer, HeaderInfo } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo Coffee Devilery" />
        </Link>
      </div>
      <HeaderInfo>
        <div>
          <MapPin size={22} />
          São Paulo, SP
        </div>
        <Link to="/checkout">
          <ShoppingCart size={22} />
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  );
}
