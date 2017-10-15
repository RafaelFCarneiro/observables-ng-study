import { Subject } from 'rxjs/Rx';

export class UsersService {
  userActivated = new Subject();
}
