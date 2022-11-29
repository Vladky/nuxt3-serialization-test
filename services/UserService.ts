import { UserLike } from '@/models/User'

const mock: UserLike[] = [
  { name: 'Вася', surname: 'Пупкин' },
  { name: 'Пал', surname: 'Палыч' },
]

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))

export class UserService {
  private counter = 1
  async get() {
    await delay(1000)
    this.counter++
    return mock[this.counter % 2]
  }
}
