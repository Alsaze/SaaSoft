<template>
  <div class="account-row">
    <UInput
      v-model="tags"
      placeholder="Метки"
      size="xl"
      maxlength="50"
    />

    <USelect
      v-model="type"
      placeholder="Тип записи"
      :items="ACCOUNT_TYPES"
      size="xl"
      class="min-w-[150px]"
      required
    />

    <UInput
      v-model="login"
      placeholder="Логин"
      size="xl"
      required
      maxlength="100"
    />

    <UInput
      v-if="type === 'ldap'"
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      placeholder="Пароль"
      size="xl"
      required
    >
      <template #trailing>
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
          :aria-label="showPassword ? 'Hide password' : 'Show password'"
          :aria-pressed="showPassword"
          aria-controls="password"
          @click="showPassword = !showPassword"
        />
      </template>
    </UInput>

    <UButton
      icon="i-lucide-trash"
      size="xl"
      @click="deleteAccount"
    />
  </div>
</template>

<script setup lang="ts">
export interface Account {
  tags?: string
  type?: 'local' | 'ldap' | ''
  login?: string
  password?: string | null
  uid: string
}

const props = withDefaults(defineProps<Account>(), {
  tags: '',
  type: '',
  login: '',
  password: null,
})

const emit = defineEmits<{
  update: [account: Account]
  delete: [account: Account]
}>()

const ACCOUNT_TYPES = [
  { label: 'Локальный', value: 'local' },
  { label: 'LDAP', value: 'ldap' },
] as const

const tags = ref(props.tags)
const type = ref(props.type)
const login = ref(props.login)
const password = ref(props.password)
const showPassword = ref(false)

const formatTags = (tags: string) =>
  tags.split('; ').map(tag => ({ text: tag }))

watch([tags, type, login, password], ([newTags, newType, newLogin, newPassword]) => {
  emit('update', {
    uid: props.uid,
    tags: formatTags(newTags),
    type: newType,
    login: newLogin,
    password: type?.value === 'ldap' ? newPassword : null,
  })
}, { deep: true })

function deleteAccount() {
  emit('delete', {
    uid: props?.uid,
    tags: tags?.value,
    type: type?.value,
    login: login?.value,
    password: password?.value,
  })
}
</script>

<style lang="scss">
.account-row {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
</style>
