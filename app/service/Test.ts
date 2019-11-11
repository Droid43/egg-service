import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    console.log(name);
    const result = await this.app.mysql.insert('posts', { title: 'Hello World' });
    // return `hi, ${name}` + JSON.stringify(this.config);
    // return JSON.stringify(Object.keys(this.app));
    return JSON.stringify(result);
  }
}
