// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiAuthorAction from '../../../app/controller/api/author/action';
import ExportApiWechatIdentify from '../../../app/controller/api/wechat/identify';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      author: {
        action: ExportApiAuthorAction;
      }
      wechat: {
        identify: ExportApiWechatIdentify;
      }
    }
  }
}
