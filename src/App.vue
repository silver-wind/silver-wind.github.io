<template>
  <div class="content">
  <div class="header inline">
    <h1 class="label">Invictus</h1>
    <p class="author">By William Ernest Helnsey</p>
  </div>

  <div>
    <div class="inline texts">
      <div class="inline texts text-content">
        <div v-on:click="part1()" class="cube":style="{background: part1Visible ? 'black' : 'white'}"/>
        <div v-on:click="part2()" class="cube":style="{background: part2Visible ? 'black' : 'white'}"/>
        <div v-on:click="part3()" class="cube":style="{background: part3Visible ? 'black' : 'white'}"/>
        <div v-on:click="part4()" class="cube":style="{background: part4Visible ? 'black' : 'white'}"/>
      </div>

      <div >
      <div class="parts" v-show="part1Visible">
        Out of the night that covers me,<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Black as the pit from pole to pole,<br>
        I thank whatever gods may be<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For my unconquerable soul.<br>
      </div>
        <br>
        <div class="parts" v-show="part2Visible">
          In the fell clutch of circumstance<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have not winced nor cried aloud.<br>
          Under the bludgeonings of chance<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My head is bloody, but unbowed.<br>
        </div><br>

        <div class="parts" v-show="part3Visible">
          Beyond this place of wrath and tears<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Looms but the Horror of the shade,<br>
          And yet the menace of the years<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finds and shall find me unafraid.<br>
        </div><br>

        <div class="parts" v-show="part4Visible">
          It matters not how strait the gate,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How charged with punishments the scroll,<br>
          I am the master of my fate,<br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am the captain of my soul.<br>
        </div>
      </div>
    </div>
  </div>

  </div>

</template>

<script>

export default {
  data() {
    return {
      part1Visible: true,
      part2Visible: true,
      part3Visible: true,
      part4Visible: true,
      counter: 4,

    }
  },
  methods: {
    part1() {
      if(this.part1Visible){
        if(this.counter > 1){
          this.part1Visible = false
          this.counter--;
        }

      } else {
        this.part1Visible = true
        this.counter++;
      }
    },
    part2() {
      if(this.part2Visible){
        if(this.counter > 1){
          this.part2Visible = false
          this.counter--;
        }

      } else {
        this.part2Visible = true
        this.counter++;
      }

    },
    part3() {
      if(this.part3Visible){
        if(this.counter > 1){
          this.part3Visible = false
          this.counter--;
        }

      } else {
        this.part3Visible = true
        this.counter++;
      }
    },
    part4() {
      if(this.part4Visible){
        if(this.counter > 1){
          this.part4Visible = false
          this.counter--;
        }

      } else {
        this.part4Visible = true
        this.counter++;
      }
    }
  }
}



</script>

<style>
.text-content{
  margin-top:0.7vw;
}
body{
  background-color: #f0f0f0;
  overflow-x: hidden;
}
.parts{
  font-size: 2.6vw;
  font-weight: 100;
}
.header{
  margin-left: 27vw;
  height: 0.5vw;
  padding-bottom:7%;
}

.cube{
  border: 0.2vw solid;
  height:1.6vw;
  width:1.6vw;
  background-color:black;
  margin-right: 2.1vw;
}

.inline {
  display: inline-flex;
}
.author{
  margin-top: 4.7vw;
  margin-left: 7vw;
  font-size: 1.9vw;
  width: 30vw;
}
.content{
  width: 100%;
  position: absolute;
  top: -2.5vw;
  padding-left: 12vw;
}
.label{
  font-size: 4vw;
  font-weight: 100;
}

</style>

