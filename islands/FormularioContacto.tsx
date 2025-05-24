import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import Axios from "npm:axios";
import ContenidoFormularioContacto from "../components/ContenidoFormularioContacto.tsx";

const FormularioContacto: FunctionalComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const nuevoContacto = async () => {
    try {
      const responseNuevoContacto = await Axios.post(
        "https://back-a-p4.onrender.com/contacts/",
        { name, phone, email },
      );
      if (responseNuevoContacto.status >= 200 && responseNuevoContacto.status < 400) {
        setName("");
        setPhone("");
        setEmail("");
        globalThis.location.href = "/";
      } else if (responseNuevoContacto.status === 400) {
        alert("Datos de entrada inválidos");
      } else if (responseNuevoContacto.status >= 409) {
        alert("El correo electrónico ya está registrado");
      } else {
        alert("Error al enviar el contacto");
      }
    } catch (_e) {
      alert("Error al enviar el contacto");
    }
  };

  return (
    <ContenidoFormularioContacto
      name={name}
      phone={phone}
      email={email}
      setName={setName}
      setPhone={setPhone}
      setEmail={setEmail}
      nuevoContacto={nuevoContacto}
    />
  );
};

export default FormularioContacto;