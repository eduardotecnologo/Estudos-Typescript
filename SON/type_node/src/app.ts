import express, { Application } from 'express';

class App {
  public app: Application;
  public port: number;
  constructor(
    appConfig: {
      port: number,
      middlewares: any,
      routers: any
    }
  ) {
    this.app = express();
    this.port = appConfig.port;
    this.setMiddlewares(appConfig.middlewares);
    this.setRouters(appConfig.routers);
  }
  // Métodos públicos

  //Método start o servidor Express
  public listen() {
    this.app.listen(this.port, () =>
      console.log('Express has been started...'));
  }

  // Métodos
  private setMiddlewares(middlewares: {
    forEach: (
      mid: (middlewares: any) => void) => void;
  }) {
    middlewares.forEach(middleware => {
      this.app.use(middleware)
    });
  }
  private setRouters(routers: {
    forEach: (
      rotute: (rotute: any) => void) => void;
  }) {
    routers.forEach(rotute => {
      this.app.use('/', rotute.router);
    });
  }
}

export default App;