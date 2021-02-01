const { join } = require('path');
const { readdirSync, copyFileSync } = require('fs');
const { spawnSync } = require('child_process');
const notifier = require('node-notifier');
const { red, green, blue, bold } = require('chalk');

const nl = () => process.stdout.write('\n');

const rootDir = join(__dirname, '..');
const examplesDir = join(rootDir, 'examples');
const examplesSuite = readdirSync(examplesDir);

notifier.notify({
  title: 'reinstall-examples',
  message: 'Started'
});

examplesSuite.forEach((dir) => {
  const exampleDir = join(examplesDir, dir);
  const options = { cwd: exampleDir };

  process.stdout.write(`Reinstalling ${ bold(blue(dir)) }... `);

  copyFileSync(join(rootDir, '.npmrc.nexus'), join(exampleDir, '.npmrc'));
  const { status: rmStatus } = spawnSync('rm', [ '-rf', 'node_modules', 'package-lock.json' ], options);
  const { status: installStatus } = spawnSync(
    'npm',
    [ 'install', '--no-package-lock' ],
    {
      ...options,
      env: {
        PATH: process.env.PATH
      }
    }
  );

  process.stdout.write(bold(rmStatus || installStatus ? red('nok') : green('ok')));
  nl();
});

process.stdout.write(bold(green('Done!')));

notifier.notify({
  title: 'reinstall-examples',
  message: 'Done!'
});

nl();
