import {Controller} from 'egg';

export default class Identify extends Controller {
    public async index() {
        const { ctx } = this;
        const { signature, timestamp, nonce, echostr } = ctx.request.query;
        ctx.body = await ctx.service.wechat.identify(signature, timestamp, nonce, echostr);
    }
}
