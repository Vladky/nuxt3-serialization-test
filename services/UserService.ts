import { UserLike } from '@/models/User'

const mock: UserLike[] = [
  { name: 'Вася', surname: 'Пупкин' },
  { name: 'Пал', surname: 'Палыч' },
]

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))

export class UserService {
  async get(index: number) {
    await delay(1000)

    return mock[index]
  }
}
