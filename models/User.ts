export interface UserLike {
  name: string
  surname: string
}
export class User implements UserLike {
  name: string
  surname: string
  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }
  get fullName() {
    return `${this.name} ${this.surname}!`
  }

  static fromJSON(data: UserLike) {
    return new User(data.name, data.surname)
  }
}
