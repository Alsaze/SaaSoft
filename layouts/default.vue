<template>
  <div class="layout">
    <header class="header">
      <div class="header__container">
        <h1
          class="header__headline"
          @click="router.push(`/`)"
        >
          SaaSoft
        </h1>
      </div>
    </header>

    <main class="main">
      <UContainer class="container">
        <slot />
      </UContainer>
    </main>

    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  --ui-container: 100%;
  max-width: 1200px;

  margin: auto;
  padding: 20px 0 0 0;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 54px;
  background: white;

  &__container {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__headline {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 32px;
    color: black;
    cursor: pointer;
  }
}

.main {
  flex: 1;
  margin-top: 54px;
}

.footer {
  margin-top: auto;
}
</style>
