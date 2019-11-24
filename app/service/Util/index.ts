import { Service } from 'egg';
import axios from 'axios';
import { DailyInfo } from './model';

/**
 * Util Service
 */
export default class Index extends Service {

/**
 * get one word info daily
 */
  public async getDailyWord(length= 1) {
    const res = await axios.get('http://wufazhuce.com/');
    // console.log(res);
    // return res.data;
    // return res.headers;
    // console.log(res.data);

    const cheerio = require('cheerio');
    const $ = cheerio.load(res.data);
    const dailyWordList: DailyInfo[] = [];
    $('.carousel-inner .item').each((idx, item) => {
      if (!item || idx > length - 1) {
        return;
      }
      const elm = $(item);
      const imageUrl = elm.find('.fp-one-imagen').first().attr('src');
      const desc = elm.find('div .fp-one-cita a').text().trim();
      const kind = elm.find('div .fp-one-imagen-footer').text().trim();
      const id = elm.find('div .titulo').text().trim().replace('VOL.', '');
      // console.log(idx, imageUrl, desc);
      const info: DailyInfo = {
        imageUrl,
        desc,
        id,
        kind,
      };
      dailyWordList.push(info);
    });
    return dailyWordList;
  }
}
