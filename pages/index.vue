<template>
  <div>
    <UserCard :model-value="user" />
  </div>
</template>

<script setup lang="ts">
import { UserService } from '@/services/UserService'
import { User } from '@/models/User'

const userService = new UserService()
const { data } = await useAsyncData('user', () => userService.get(0))

if (!data.value) {
  throw createError({ statusCode: 500, message: 'Юзер пустой' })
}

const user = ref(User.fromJSON(data.value))

setTimeout(async () => {
  user.value.name = 'Василий'
}, 2000)

setTimeout(async () => {
  user.value = User.fromJSON(await userService.get(1))
}, 4000)
</script>
