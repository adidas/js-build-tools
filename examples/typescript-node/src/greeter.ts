export class Greeter {
  public constructor(private name: string) {}

  public greet(): string {
    return `Hello, ${ this.name }`;
  }
}
