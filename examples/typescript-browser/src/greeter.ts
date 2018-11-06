export class Greeter {
  constructor(public name: string) {}

  greet() {
    return `Hello, ${ this.name }`;
  }
}
