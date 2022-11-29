<template>
  <div>
    <p>
      Имя: <strong>{{ modelValue.name }}</strong>
    </p>
    <p>
      Фамилия: <strong>{{ modelValue.surname }}</strong>
    </p>
    <p>
      Имя и фаимлия (геттер): <strong>{{ modelValue.fullName }}</strong>
    </p>
  </div>
</template>

<script setup lang="ts">
import { User } from '@/models/User'

interface UserCardProps {
  modelValue: User
}
defineProps<UserCardProps>()
</script>
