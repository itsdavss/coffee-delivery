import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import "./styles/App.css";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
