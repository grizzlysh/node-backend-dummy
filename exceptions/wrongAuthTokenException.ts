import HttpException from "../interfaces/httpExcetion"

class WrongAuthTokenException implements HttpException {
  status: number;
  message: string;

  constructor() {
    this.status = 401;
    this.message = 'Access denied, Not authorized';
  }
}

export default WrongAuthTokenException;

