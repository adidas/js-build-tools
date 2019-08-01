export class Greeter {
  public constructor(private readonly name: string) {}

  public greet(): string {
    return `Hello, ${ this.name }`;
  }
}
