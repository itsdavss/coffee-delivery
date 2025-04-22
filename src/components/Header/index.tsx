import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../../assets/images/Logo.png";
import { HeaderContainer, HeaderInfo } from "./styles";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

export function Header() {
  const { cartItems } = useCart();

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
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Link>
      </HeaderInfo>
    </HeaderContainer>
  );
}
