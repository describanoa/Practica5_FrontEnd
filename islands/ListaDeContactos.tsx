import { FunctionalComponent } from "preact/src/index.d.ts";
import { useEffect } from "preact/hooks";
import { contactos } from "../signals.ts";
import Axios from "npm:axios";
import ContenidoListaDeContactos from "../components/ContenidoListaDeContactos.tsx";

const ListaDeContactos: FunctionalComponent = () => {
  const obtenerContactos = async () => {
    const responseGetContactos = await Axios.get(
      "https://back-a-p4.onrender.com/contacts/"
    );
    if(responseGetContactos.status === 200)
      contactos.value = responseGetContactos.data.data;
    else if (responseGetContactos.status === 500)
      console.error("Error del servidor");
  };

  useEffect(() => {
    obtenerContactos();
  }, []);

  return <ContenidoListaDeContactos />;
};

export default ListaDeContactos;