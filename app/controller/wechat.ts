import { Controller } from 'egg';

export default class Wechat extends Controller {
    public async identify() {
        const { ctx } = this;
        const { signature, timestamp, nonce, echostr } = ctx.request.query;
        ctx.body = await ctx.service.wechat.identify(signature, timestamp, nonce, echostr);
    }
}
