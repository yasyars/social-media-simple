<template>
  <div class="hashtag-trending">

    <ul id="trending">

      <li v-for="hashtag in hashtags" :key="hashtag.id">
        {{ hashtags.word }}
        sda

      </li>
    </ul>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  data(){
    return{
      hashtags: []
    }
  },
  created(){
    console.log("WeLCOM")
    const url = `http://34.97.129.31:4567/hashtag/trending`
    axios.get(url)
    .then(res => {
      let result = res.data
      this.hashtags = result.data
    })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
