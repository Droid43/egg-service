import { Service } from 'egg';

/**
 * Wechat Service
 */
export default class Wechat extends Service {

    /**
     * identify wechat service
     * @param signature
     * @param timestamp
     * @param nonce
     * @param echostr
     */
    public async identify(signature: string, timestamp: string, nonce: string, echostr: string) {
        const token = 'wechatToken';
        const dataList = [ token, timestamp, nonce ];
        dataList.sort();
        const codeTool = require('crypto');
        const sha1 = codeTool.createHash('sha1');
        dataList.map(dataItem => {
            sha1.update(dataItem);
        });
        const hashcode = sha1.digest('hex');
        // console.log(hashcode + '');
        let content = '';
        if (hashcode === signature) {
            content = echostr;
        }
        // content = hashcode;
        return content;
    }
}
