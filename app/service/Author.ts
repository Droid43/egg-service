import { Service } from 'egg';

/**
 * Author Service
 */
export default class Author extends Service {

    /**
     * sayHi to you
     * @param name - your name
     */
    public async action(name: string) {
        return `hi, ${name}`;
    }
}
