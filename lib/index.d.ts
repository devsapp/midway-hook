import { ILogger } from '@serverless-devs/core';
export default class JamStackComponent {
    logger: ILogger;
    /**
     * 部署应用
     * @param inputs
     */
    deploy(inputs: any): any;
}
