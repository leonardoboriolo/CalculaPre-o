import { container } from 'tsyringe';
import { UserService } from './user.service';
import { UserController } from './user.controller';

export function registerUserModule() {
  container.register(UserService, { useClass: UserService });
  container.register(UserController, { useClass: UserController });
}
