<template>
  <div class="form-accounts">
    <div class="form-accounts__title">
      <h1>Учетные записи</h1>
      <UButton icon="i-lucide-plus" size="xl" @click="addAccount()" />
    </div>

    <AccountRow
      v-for="account in accounts"
      :key="account?.uid"
      v-bind="account"
      @update="updateAccount"
      @delete="removeAccount"
    />

    <div v-if="accounts?.length > 0">
      <pre>
        Вывожу данные
        {{ accounts }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Account } from '@/components/AccountRow.vue'

const accounts = ref<Account[]>([])

function addAccount() {
  accounts.value.push({
    uid: `${Math.random().toString(16).slice(2)}`,
    tags: '',
    type: '',
    login: '',
    password: null,
  })
}

function updateAccount(updatedAccount: Account) {
  const index = accounts.value.findIndex(account => account.uid === updatedAccount.uid)
  if (index !== -1) {
    accounts.value[index] = updatedAccount
  }
}

function removeAccount(updatedAccount: Account) {
  const index = accounts.value.findIndex(account => account.uid === updatedAccount.uid)
  if (index !== -1) {
    accounts.value.splice(index, 1)
  }
}
</script>

<style lang="scss">
.form-accounts {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__title {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    text-align: center;
    height: 40px;
  }
}
</style>
