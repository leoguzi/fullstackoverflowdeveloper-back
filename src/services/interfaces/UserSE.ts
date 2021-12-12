import { UserREQ } from '../../controllers/interfaces/UserREQ';

export interface UserSE extends UserREQ {
  token: string;
}
