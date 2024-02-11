

export class SearchCountry {
  static readonly type = '[Weather] Search Country';

  constructor(public searchKey: string) {
  }
}


export class SelectCountry {
  static readonly type = '[Weather] Select Country';

  constructor(public country: string) {
  }
}
