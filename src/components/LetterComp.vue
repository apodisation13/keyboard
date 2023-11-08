<script>
export default {
  props: {
    letter: {
      type: String,
      required: true
    },
    isVowel: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  methods: {
    onClick(letter) {
      this.$emit("on-click", letter)
    },
  }
}
</script>

<template>
<div
    class="letter"
    :style="isVowel ? { color: 'red'} : { color: 'blue'}"
    @click="onClick(letter)"
>
  {{ letter }}
</div>
</template>

<style scoped>
.letter {
  width: 50px;
  height: 100px;
  font-size: 45pt;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: solid 2px black;
}
</style>