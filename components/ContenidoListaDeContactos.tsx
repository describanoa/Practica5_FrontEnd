import { FunctionalComponent } from "preact/src/index.d.ts";
import { contactos, chatIdActual } from "../signals.ts";
import { Contacto } from "../types.ts";

const ContenidoListaDeContactos: FunctionalComponent = () => {
  return (
    <div class="asideIzq">
      <a href="/add">
        <button type="button" class="botonCrarContacto">
          Crear contacto
        </button>
      </a>
      {contactos.value.map((contacto : Contacto) => (
        <button
          type="button"
          class="contacto"
          key={contacto._id}
          onClick={() => (chatIdActual.value = contacto.chatId)}
        >
          <h2 class="texto">{contacto.name.split(" ")[0]}</h2>
          <p>{contacto.phone}</p>
        </button>
      ))}
    </div>
  );
};

export default ContenidoListaDeContactos;