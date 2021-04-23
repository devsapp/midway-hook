'use strict';
import { CommandCore } from '@midwayjs/command-core';
import get from 'lodash.get';
import { spawn } from 'child_process';
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

const deployReactHooks = async (baseDir: string, inputs) => {
  return new Promise((reslove, reject) => {
    spawn('npx', ['tsc && npx vite build'], {
      shell: true,
      cwd: baseDir,
      stdio: 'inherit',
    })
      .on('close', async () => {
        await deployFaas(baseDir, inputs);
        reslove('success');
      })
      .on('error', () => {
        reject();
      });
  });
};

export default deployReactHooks;
