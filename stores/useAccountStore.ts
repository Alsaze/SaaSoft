import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export interface Account {
  uid: string
  tags?: string
  type?: 'local' | 'ldap' | ''
  login?: string
  password?: string | null
}

export const useAccountStore = defineStore('account', () => {
  const accounts = useStorage<Account[]>('accounts', [])

  function addAccount() {
    accounts.value.push({
      uid: Math.random().toString(16).slice(2),
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
    accounts.value = accounts.value.filter(account => account.uid !== updatedAccount.uid)
  }

  return {
    accounts,
    addAccount,
    updateAccount,
    removeAccount,
  }
})
