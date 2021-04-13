import { HLogger, ILogger } from '@serverless-devs/core';
import deploy from './deploy.faas';
// import build from './build.faas';

export default class JamStackComponent {
  @HLogger('MIDWAY_FAAS') logger: ILogger;
  /**
   * 部署应用
   * @param inputs
   */
  async deploy(inputs: any) {
    const { ProjectName } = inputs.Project || inputs.props;
    const { cwd } = process;
    this.logger.debug(`[${ProjectName}] inputs params: ${JSON.stringify(inputs, null, 2)}`);
    await deploy(cwd(), inputs);
    this.logger.info('部署完成');
  }
  async dev(inputs: any) {
    const { ProjectName } = inputs.Project;
    this.logger.debug(`[${ProjectName}] inputs params: ${JSON.stringify(inputs, null, 2)}`);
    const { faasConfig } = inputs.Properties || inputs.props;
    console.log(faasConfig);
    // faasConfig => midway.config.js
  }
}
