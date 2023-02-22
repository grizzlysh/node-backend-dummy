import HttpException from "../interfaces/httpExcetion"

class WrongAuthCredetialsException implements HttpException {
  status: number;
  message: string;

  constructor() {
    this.status = 401;
    this.message = 'Access denied, User not found';
  }
}

export default WrongAuthCredetialsException;

