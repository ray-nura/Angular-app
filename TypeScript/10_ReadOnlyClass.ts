class MyGreeter {
  readonly name: string = "Michael";

  constructor(otherName: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
}
