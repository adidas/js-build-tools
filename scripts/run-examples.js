const { join } = require('path');
const { readdirSync } = require('fs');
const { spawnSync } = require('child_process');
const notifier = require('node-notifier');
const { red, green, blue, bold } = require('chalk');

const nok = ({ ok }) => !ok;
const nl = () => process.stdout.write('\n');

function logErrorMessage({ dir, error }) {
  process.stdout.write(`${ bold(blue(dir)) } scripts failed with error:`);
  nl();
  process.stdout.write(red(error));
  nl();
  nl();
}

const examplesDir = join(__dirname, '..', 'examples');
const examplesSuite = readdirSync(examplesDir);

notifier.notify({
  title: 'run-examples',
  message: 'Started'
});

const results = examplesSuite.reduce((accum, dir) => {
  process.stdout.write(`Running scripts in ${ bold(blue(dir)) }... `);

  const { stderr, status } = spawnSync('npm', [ 'run', 'all' ], {
    cwd: join(examplesDir, dir)
  });

  process.stdout.write(bold(status ? red('nok') : green('ok')));
  nl();

  return [ ...accum, { dir, ok: !status, error: stderr }];
}, []);

if (results.some(nok)) {
  const errors = results.filter(nok);

  nl();
  errors.forEach(logErrorMessage);

  process.stdout.write(`${ bold(red(errors.length)) } out of ${ bold(blue(results.length)) } executions failed.`);
  nl();
  process.stdout.write('Check output above for more details.');
  nl();

  notifier.notify({
    title: 'run-examples',
    message: `${ errors.length } out of ${ results.length } executions failed.`
  });

  process.exit(1);
} else {
  process.stdout.write(bold(green('Done!')));
  nl();

  notifier.notify({
    title: 'run-examples',
    message: 'Done!'
  });
}
