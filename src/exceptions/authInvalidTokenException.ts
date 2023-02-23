import HttpException from "../interfaces/httpException"

class AuthInvalidTokenException implements HttpException {
  status : number;
  message: string;

  constructor() {
    this.status  = 401;
    this.message = 'Access denied, Not authorized';
  }
}

export default AuthInvalidTokenException;

