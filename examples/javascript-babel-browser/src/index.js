import { Greeter } from './greeter';

export function sum(a, b) {
  return a + b;
}

const greeter = new Greeter('World');

greeter.greet();
