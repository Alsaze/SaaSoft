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
import { storeToRefs } from 'pinia'
import { useAccountStore } from '~/stores/useAccountStore'

const accountStore = useAccountStore()
const { accounts } = storeToRefs(accountStore)
const { addAccount } = accountStore
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
