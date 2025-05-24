import { signal } from "@preact/signals";
import { DataApi, Message } from "./types.ts";

export const contactos = signal<DataApi["data"]>([]);
export const chatIdActual = signal<string | null>(null);
export const mensajesChat = signal<Message[]>([]);
export const nuevoMensajeChat = signal("");