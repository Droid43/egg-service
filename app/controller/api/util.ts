import { Controller } from 'egg';

export default class Util extends Controller {
  public async getDailyWord() {
    const { ctx } = this;
    const data = await ctx.service.util.index.getDailyWord();
    ctx.body = { data };
  }
}
