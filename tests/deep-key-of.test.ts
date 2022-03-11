import { DeepKeyOf } from "../libs";

interface User {
  name: string;
  info: {
    idCard: number;
    address: {
      detail: string;
    };
  }
}

type res = DeepKeyOf<User>

const title:res = 'info.idCard'