import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const api = controller.api;
  router.get('/', controller.home.index);
  router.get('/wechat/identify', controller.wechat.identify);
  router.get('/api', controller.home.index);
  router.get('/api/author/action', api.author.action);
};
