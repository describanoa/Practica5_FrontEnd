export type Contacto = {
  _id: string,
  name: string,
  phone: string,
  chatId: string,
}

export type Message = {
  _id: string;
  chatId: string;
  isContactMessage: boolean;
  content: string;
  timestamp: string;
  createdAt: string;
  updatedAt: string;
}