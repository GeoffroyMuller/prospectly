export class Company {
  constructor(
    public name?: string,
    public idCode?: string,
    public size?: number,
  ) {}
}

export class Prospect {
  constructor(
    public company: Company,
    public score?: number,
  ) {}
}
