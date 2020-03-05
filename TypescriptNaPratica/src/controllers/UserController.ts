import { Request, Response } from 'express';
import EmailServices from '../services/EmailServices';
const users = [
  {
    name: 'Eduardo developer',
    email: 'eduardotecnologo@hotmail.com'
  }
];
export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailServices();

    emailService.sendMail({
      to: {
        name: 'Eduardo Developer',
        email: 'eduardotecnologo@hotmail.com'
      },
      message: {
        subject: 'Bem-vindo ao sistema',
        body: 'Seja bem vindo!'
      }
    });
    return res.send('hey');
  }
};
