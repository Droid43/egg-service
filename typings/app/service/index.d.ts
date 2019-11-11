// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthor from '../../../app/service/Author';
import ExportTest from '../../../app/service/Test';
import ExportWechat from '../../../app/service/Wechat';

declare module 'egg' {
  interface IService {
    author: ExportAuthor;
    test: ExportTest;
    wechat: ExportWechat;
  }
}
