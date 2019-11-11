import { Controller } from 'egg';

export default class Author extends Controller {
    public async action() {
        const { ctx } = this;
        ctx.body = 'function in developing...';
    }
}
