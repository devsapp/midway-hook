'use strict';
import { CommandCore } from '@midwayjs/command-core';
import get from 'lodash.get';
import { PackagePlugin } from '@midwayjs/fcli-plugin-package';
import { AliyunFCPlugin } from '@midwayjs/fcli-plugin-fc';
import { DeployPlugin } from '@midwayjs/fcli-plugin-deploy';

const deployFaas = async (baseDir: string, inputs) => {
  const core = new CommandCore({
    config: {
      servicePath: baseDir,
    },
    commands: ['deploy'],
    service: inputs.props,
    log: console,
    options: {
      skipZip: true,
      serverlessDev: {
        access: get(inputs, 'credentials.Alias') || 'default',
        args: get(inputs, 'args'),
        path: get(inputs, 'path') || {},
        command: get(inputs, 'command'),
      },
    },
  });
  core.addPlugin(PackagePlugin);
  core.addPlugin(AliyunFCPlugin);
  core.addPlugin(DeployPlugin);
  await core.ready();
  await core.invoke(['deploy']);
};

export default deployFaas;
