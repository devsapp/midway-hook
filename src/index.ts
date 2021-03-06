import { HLogger, ILogger } from '@serverless-devs/core';
import deploy from './service/faas.deploy';

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
  }
}
