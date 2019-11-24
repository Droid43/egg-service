// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportWechat from '../../../app/controller/wechat';
import ExportApiAuthor from '../../../app/controller/api/author';
import ExportApiUtil from '../../../app/controller/api/util';
import ExportApiWechat from '../../../app/controller/api/wechat';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    wechat: ExportWechat;
    api: {
      author: ExportApiAuthor;
      util: ExportApiUtil;
      wechat: ExportApiWechat;
    }
  }
}
