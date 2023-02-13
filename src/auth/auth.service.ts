import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(email, password) {
    return {
      message: 'Register successfully',
      email: email,
      password: password,
    };
  }

  login() {
    return { message: 'Login successfully' };
  }
}
