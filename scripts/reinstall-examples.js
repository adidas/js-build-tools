const { join } = require('path');
const { readdirSync } = require('fs');
const { spawnSync } = require('child_process');
const notifier = require('node-notifier');
const { red, green, blue, bold } = require('chalk');

const nl = () => process.stdout.write('\n');

const examplesDir = join(__dirname, '..', 'examples');
const examplesSuite = readdirSync(examplesDir);

notifier.notify({
  title: 'reinstall-examples',
  message: 'Started'
});

examplesSuite.forEach((dir) => {
  const options = { cwd: join(examplesDir, dir) };

  process.stdout.write(`Reinstalling ${ bold(blue(dir)) }... `);

  const { status: rmStatus } = spawnSync('rm', [ '-rf', 'node_modules', 'package-lock.json' ], options);
  const { status: installStatus } = spawnSync('npm', [ 'install' ], options);

  process.stdout.write(bold(rmStatus || installStatus ? red('nok') : green('ok')));
  nl();
});

process.stdout.write(bold(green('Done!')));

notifier.notify({
  title: 'reinstall-examples',
  message: 'Done!'
});

nl();
