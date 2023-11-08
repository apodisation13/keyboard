<script>
import LetterComp from "@/components/LetterComp.vue";

export default {
  components: {LetterComp},
  data() {
    return {
      text: "",
    }
  },
  methods: {
    onClick(letter) {
      this.text += letter
    },
    deleteSymbol() {
      this.text = this.text.slice(0, -1);
    },
    deleteAll() {
      this.text = ""
    },
  }
}
</script>

<template>
<div>
  <div class="text_zone_play">
    <div class="text_zone">
      {{ text }}
    </div>
    <div class="play_button">play sound</div>
  </div>

  <div class="erase">
    <div class="backspace" @click="deleteSymbol">Стереть</div>
    <div class="erase_all" @click="deleteAll">Стереть всё</div>
  </div>

  <div class="letters">
    <div class="first_line">
      <LetterComp letter="A" is-vowel @on-click="onClick" />
      <LetterComp letter="B" @on-click="onClick" />
    </div>
  </div>

</div>
</template>

<style scoped>
.text_zone_play {
  width: 100%;
  height: 210px;
}
.text_zone {
  border: solid 2px black;
  height: 200px;
  width: 70%;
  font-size: 20pt;
  float: left;
  display: flex;
  padding: 2%;
}
.play_button {
  float: right;
  height: 200px;
  width: 25%;
  border: solid 2px green;
  font-size: 20pt;
  justify-content: center;
  align-items: center;
  display: flex;
}
.letters {
  float: left;
  margin-top: 20px;
}
.erase {
  width: 100%;
  height: 100px;
  //border: solid 2px red;
}
.first_line {
  display: flex;
  flex-direction:row;
  height: 100%;
}
.backspace {
  float: left;
  width: 70%;
  border: solid 2px black;
  height: 100%;
  font-size: 50pt;
  justify-content: center;
  align-items: center;
  display: flex;
}
.erase_all {
  float: right;
  width: 25%;
  height: 100%;
  border: solid 2px black;
  font-size: 20pt;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>