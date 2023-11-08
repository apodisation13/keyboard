<script>
import LetterComp from "@/components/LetterComp.vue"
import { alphabet, numbers } from "@/lib/alphabet"

export default {
  components: {LetterComp},
  data() {
    return {
      text: "",
      alphabet: alphabet,
      numbers: numbers,
      language: "RU",
    }
  },
  methods: {
    onClick(letter) {
      this.text += letter
    },
    deleteSymbol() {
      this.text = this.text.slice(0, -1)
    },
    deleteAll() {
      this.text = ""
    },
    switchLang() {
      if (this.language === "RU") {
        this.language = "ENG"
        return
      }
      this.language = "RU"
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

  <div class="erase">
    <div class="space" @click="onClick(' ')">пробел</div>
    <div class="symbol" @click="onClick('?')">?</div>
  </div>

  <div class="first_line" v-for="letter in alphabet[1]">
    <LetterComp
        v-if="letter[language]"
        :letter="letter[language]?.value"
        :is-vowel="letter[language]?.isVowel"
        @on-click="onClick"
    />
  </div>
  <br/>

  <div class="first_line" v-for="letter in alphabet[2]">
    <LetterComp
        v-if="letter[language]"
        :letter="letter[language]?.value"
        :is-vowel="letter[language]?.isVowel"
        @on-click="onClick"
    />
  </div>
  <br/>

  <div class="first_line" v-for="letter in alphabet[3]">
    <LetterComp
        v-if="letter[language]"
        :letter="letter[language]?.value"
        :is-vowel="letter[language]?.isVowel"
        @on-click="onClick"
    />
  </div>
  <br/>

  <div class="first_line" v-for="number in numbers">
    <LetterComp
        :letter="number.toString()"
        @on-click="onClick"
    />
  </div>
  <br/>

  <div class="first_line">
    <LetterComp
        letter="lang"
        @on-click="switchLang"
    />
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
  font-size: 40pt;
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
.erase {
  width: 100%;
  height: 100px;
  //border: solid 2px red;
  margin: 10px;
}
.first_line {
  display: inline-block;
  flex-direction: row;
  height: 100%;
  //border: solid 1px green;
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
.space {
  float: left;
  width: 75%;
  border: solid 2px black;
  height: 100%;
  font-size: 50pt;
  justify-content: center;
  align-items: center;
  display: flex;
}
.symbol {
  float: right;
  width: 20%;
  height: 100%;
  border: solid 2px black;
  font-size: 20pt;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>