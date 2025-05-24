import { FunctionalComponent } from "preact/src/index.d.ts";
import { useEffect } from "preact/hooks";
import { contactos, chatIdActual, mensajesChat, nuevoMensajeChat } from "../signals.ts";
import ContenidoAreaMensajes from "../components/ContenidoAreaMensajes.tsx";
import Axios from "npm:axios";

const AreaDeMensajes: FunctionalComponent = () => {
  const obtenerMensajes = async (id: string) => {
    const responseMensajes = await Axios.get(
      `https://back-a-p4.onrender.com/messages/chat/${id}`
    );
    if (responseMensajes.status >= 200 && responseMensajes.status < 400) {
      mensajesChat.value = responseMensajes.data.data;
    }
    else if (responseMensajes.status === 404) {
      mensajesChat.value = [];
      alert("Chat no encontrado");
    }
    else if (responseMensajes.status === 500) {
      alert("Error del servidor");
    }
  };

  const nuevoMensaje = async () => {
    if (nuevoMensajeChat.value.trim() && chatIdActual.value) {
      try {
        const mensaje = {
          chatId: chatIdActual.value,
          isContactMessage: false,
          content: nuevoMensajeChat.value,
          timestamp: new Date().toISOString(),
        };
        const responseNuevoMensaje = await Axios.post(
          "https://back-a-p4.onrender.com/messages/",
          mensaje
        );
        mensajesChat.value = [...mensajesChat.value, responseNuevoMensaje.data.data];
        nuevoMensajeChat.value = "";
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
      }
    }
  };

  useEffect(() => {
    if (chatIdActual.value) {
      obtenerMensajes(chatIdActual.value);
    }
  }, [chatIdActual.value]);

  return (
    <ContenidoAreaMensajes
      chatIdActual={chatIdActual}
      contactos={contactos}
      mensajesChat={mensajesChat}
      nuevoMensajeChat={nuevoMensajeChat}
      nuevoMensaje={nuevoMensaje}
    />
  );
};

export default AreaDeMensajes;