import { FunctionalComponent } from "preact/src/index.d.ts";
import { Signal } from "@preact/signals";
import { Contacto, Message } from "../types.ts";
import { useEffect, useRef } from "preact/hooks";

type Props = {
  chatIdActual: Signal<string | null>;
  contactos: Signal<Contacto[]>;
  mensajesChat: Signal<Message[]>;
  nuevoMensajeChat: Signal<string>;
  nuevoMensaje: () => void;
};

const ContenidoAreaMensajes: FunctionalComponent<Props> = ({
  chatIdActual,
  contactos,
  mensajesChat,
  nuevoMensajeChat,
  nuevoMensaje,
}) => {
  const areaMensajesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const area = areaMensajesRef.current;
    if (area) {
      area.scrollTop = area.scrollHeight;
    }
  }, [mensajesChat.value]);

  return (
    <div class="contenedorMensajes">
      {chatIdActual.value && (
        <div class="nombreChat">
          <i class="fa-solid fa-user-tie fa-xl" style="color: #000000;"></i>
          <h1 class="tituloChat">
            {chatIdActual.value
              ? contactos.value.find((c) => c.chatId === chatIdActual.value)
                ?.name
              : ""}
          </h1>
        </div>
      )}
      <div class="areaMensajes" ref={areaMensajesRef}>
        {mensajesChat.value.map((mensaje) => (
          <div
            key={mensaje._id}
            class={`mensaje ${
              mensaje.isContactMessage ? "mensajeIzquierda" : "mensajeDerecha"
            }`}
          >
            <p>{mensaje.content}</p>
            <span class="timestamp">
              {new Date(mensaje.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
      {chatIdActual.value && (
        <div class="campoEnviarMensaje">
          <input
            type="text"
            class="inputMensaje"
            placeholder="Escribe tu mensaje"
            value={nuevoMensajeChat.value}
            onInput={(e) => (nuevoMensajeChat.value = e.currentTarget.value)}
          />
          <button
            type="button"
            class="botonEnviar"
            onClick={nuevoMensaje}
          >
            <i class="fa-solid fa-paper-plane" style="color: #ffffff;"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default ContenidoAreaMensajes;
