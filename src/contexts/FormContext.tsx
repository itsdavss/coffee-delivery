import { createContext, useContext, ReactNode, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormContextType {
  handleSubmitExternal: () => void;
  formRef: React.RefObject<HTMLFormElement | null>;
  addressData: any;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState<Record<string, FormDataEntryValue>>({});

  const handleSubmitExternal = () => {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      setAddressData(data)
      navigate("/success")
    }
  };

  return (
    <FormContext.Provider value={{ handleSubmitExternal, formRef, addressData}}>
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
