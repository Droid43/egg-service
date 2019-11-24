import { Application } from 'egg';

/*
 * service + '/' + verson + '/' + modulename + '/' + operation
 */

class ApiRouter {
  private readonly router;
  private readonly version: string;
  constructor(router, version = 'v1') {
    this.router = router;
    this.version = version;
  }
  get(path= '', ...middleware: any[]) {
    return this.router.get(`/api/${this.version}/${path}`, ...middleware);
  }
}

export default (app: Application) => {
  const { controller, router } = app;
  const api = controller.api;
  const apiRouter = new ApiRouter(router);
  router.get('/', controller.home.index);
  router.get('/wechat/identify', controller.wechat.identify);
  apiRouter.get('', controller.home.index);
  apiRouter.get('author/action', api.author.action);
  apiRouter.get('util/getdailyword', api.util.getDailyWord);
};
