export class Hero {
  active = false;

  // The next 2 fields are passed as constructor's arguments
  constructor(public name: string,
              public team: string[]) {
  }
}
