export class Greeter {
  public constructor(public name: string) {}

  public greet(): string {
    return `Hello, ${ this.name }`;
  }
}
