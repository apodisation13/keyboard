<script setup>
import KeyboardPage from "@/components/KeyboardPage.vue";
</script>

<template>
  <header>
    <div class="wrapper">

    </div>
  </header>

  <main>
    <KeyboardPage />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
