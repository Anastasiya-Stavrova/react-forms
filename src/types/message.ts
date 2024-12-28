interface IMessage {
  fullName: string;
  email: string;
  message?: string;
  rating: number;
  pros?: string[];
}

export type { IMessage };
