import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
  name: string;
  phone: string;
  email: string;
  setName: (value: string) => void;
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
  nuevoContacto: () => void;
};

const ContenidoFormularioContacto: FunctionalComponent<Props> = (
  { name, phone, email, setName, setPhone, setEmail, nuevoContacto },
) => {
  return (
    <div class="contendeorFormulario">
      <div class="headerFormulario">
        <a href="/">
          <i class="fa-solid fa-house fa-2xl" style="color: #ffffff;"></i>
        </a>
      </div>
      <div class="formContacto">
        <form>
          <div>
            <label>Name:</label>
            <input
              value={name}
              placeholder="Name..."
              onInput={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              value={phone}
              placeholder="Phone..."
              onInput={(e) => setPhone(e.currentTarget.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              value={email}
              placeholder="Email..."
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              if (name === "" || phone === "" || email === "") {
                alert("Por favor, completa todos los campos");
              } else {
                nuevoContacto();
              }
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContenidoFormularioContacto;