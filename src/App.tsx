import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import "./styles/App.css";
import { CartProvider } from "./contexts/CartContext";
import { FormProvider } from "./contexts/FormContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <FormProvider>
            <Router />
        </FormProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
