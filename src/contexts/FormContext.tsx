import { createContext, useContext, ReactNode, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AddressDataType {
  bairro: string;
  cep: string;
  cidade: string;
  numero: string;
  pagamento: string;
  rua: string;
  uf: string;
}

interface FormContextType {
  handleCepSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmitExternal: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  addressData: AddressDataType;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const [addressData, setAddressData] = useState<AddressDataType>({
    bairro: "",
    cep: "",
    cidade: "",
    numero: "",
    pagamento: "",
    rua: "",
    uf: "",
  });

  const isAddressValid = (data: AddressDataType): boolean => {
    return Object.values(data).every((value) => value.trim() !== "");
  };
  

  const handleSubmitExternal = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());

      const address: AddressDataType = {
        bairro: data.bairro?.toString() || "",
        cep: data.cep?.toString() || "",
        cidade: data.cidade?.toString() || "",
        numero: data.numero?.toString() || "",
        pagamento: data.pagamento?.toString() || "",
        rua: data.rua?.toString() || "",
        uf: data.uf?.toString() || "",
      };

      if (!isAddressValid(address)) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      setAddressData(address);
      navigate("/success");
    }
  };

  const handleCepSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value;

    if(cep.length < 8) return;

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddressData((prev) => ({
        ...prev,
        cep: data.cep,
        rua: data.logradouro,
        bairro: data.bairro,
        cidade: data.localidade,
        uf: data.uf,
      }));
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  };

  return (
    <FormContext.Provider
      value={{ handleSubmitExternal, formRef, addressData, handleCepSearch }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
