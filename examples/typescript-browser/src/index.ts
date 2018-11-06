import { Greeter } from './greeter';

export function sum(a: number, b: number) {
  return a + b;
}

const greeter = new Greeter('World');

greeter.greet();
