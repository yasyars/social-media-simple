<template>
  <div class="home">
    <h1 class="d-flex justify-content-center">Timeline</h1>
    <div class="d-flex justify-content-center">
      <Post :user_id=this.user_id></Post>
      <div class="d-flex flex-column ml-2" >
        <a class="ml-2" href=# @click="addPost()">
        <div class="btn btn-primary ">
          <div class="fa fa-plus d-flex justify-content-center"></div>
          <div>Add Post</div>
        </div>
        </a>
        <br>
        <div class="mr-2">
          <div><h3>Trending Hashtags</h3>
          <h5>(last 24 hours)</h5></div>
          <ul id="trending">
            <li v-for="hashtag in hashtags" :key="hashtag.id">
              {{ hashtag.word }}
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue';
import axios from "axios";

export default {
  name: 'Home',
  components: {
    Post
  },
  props:
    ['user_id']
  ,
  data(){
    return{
      hashtags: []
    }
  },
  created(){
    console.log("user_id home: " +this.user_id)
    const url = `http://34.97.129.31:4567/hashtag/trending`
    axios.get(url)
    .then(res => {
      let result = res.data
      this.hashtags = result.data
    })
  },
  methods: {
    addPost(){
      this.$router.push({ name: 'Post', params: {user_id: this.$props.user_id }})
    }
  }
}
</script>
<style scoped>
.table th{
  padding: 5px !important;
}

ul{
  list-style-type: none;
  padding:0;
}
</style>
