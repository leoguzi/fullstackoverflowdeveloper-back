import { UserSE } from '../../services/interfaces/UserSE';

export interface UserDB extends UserSE {
  id: number;
}
