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
    :style="isVowel ? { border: 'solid 2px red'} : { border: 'solid 2px black'}"
    @click="onClick(letter)"
>
  {{ letter }}
</div>
</template>

<style scoped>
.letter {
  width: 100px;
  height: 100px;
  font-size: 45pt;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
</style>