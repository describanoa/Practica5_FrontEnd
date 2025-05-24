import { signal } from "@preact/signals";
import { Contacto, Message } from "./types.ts";

export const contactos = signal<Contacto[]>([]);
export const chatIdActual = signal<string | null>(null);
export const mensajesChat = signal<Message[]>([]);
export const nuevoMensajeChat = signal("");