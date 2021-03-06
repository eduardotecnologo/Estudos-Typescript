import * as express from 'express';
import { Request, Response } from 'express';

class HomeController {
  public router = express.Router();
  public path = '/';

  constructor() {
    this.setupRoutes();
  }
  public setupRoutes() {
    this.router.get(`${this.path}`, this.helloWorld);
  }
  helloWorld = (req: Request, res: Response) => {
    return res.json({ msg: 'Hello world from Express' });
  };
}
export default HomeController;