'use strict';
import { CommandCore } from '@midwayjs/command-core';
import { BuildPlugin } from '@midwayjs/cli-plugin-build';
import { remove, existsSync } from 'fs-extra';
import { join } from 'path';

const buildFaas = async (cwd: string) => {
  const dist = join(cwd, 'dist');
  if (existsSync(dist)) {
    await remove(dist);
  }

  const core = new CommandCore({
    commands: ['build'],
    options: {
      buildCache: true,
      clean: true,
    },
    log: console,
    cwd,
  });
  core.addPlugin(BuildPlugin);
  await core.ready();
  await core.invoke();
};

export default buildFaas;
