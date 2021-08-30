<template>
<div class="w-100 ml-5 d-flex flex-column justify-content-center">
  <div class="d-flex justify-content-center mb-3 ">
    Post:
    user : post attachment
  </div>
  <div class="d-flex justify-content-center mb-3 ">
    <p class="pt-2">
    Enter hashtags: &nbsp;&nbsp;# 
    </p>
    <input v-model="filter_hashtag" class=" ml-2 form-text mr-2">
    <button @click = filterHashtag() class="btn btn-primary" > Filter</button>
  </div>
   <table class="table" >
      <thead class="thead-dark sm">
        <th>User</th>
        <th>Comment</th>
        <th>Time</th>
      </thead>
      <tbody>
        <tr v-for= "post in posts" :key="post.id">
          <td>{{post.user.username}}</td>
          <td>{{post.content}}
            <br>
            <br>
            <a target="_blank" v-bind:href="post.attachment">{{post.attachment}}</a>
          </td>
          <td>{{post.timestamp}}</td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Comment',
  data(){
    return{
      posts: [],
      filter_hashtag: ""
    }
  },
  props:
    ['user_id']
  ,
  mounted(){
    console.log("user_id post table: " + this.user_id)
    this.getAll()
  },
  methods:{
    getAll(){
      const url = `http://34.97.129.31:4567/post`
      axios.get(url)
      .then(res => {
        let result = res.data
        this.posts = result.data
      })
    },
    filterHashtag(){
      if (this.filter_hashtag!=""){

        const url = `http://34.97.129.31:4567/post?hashtag=%23${this.filter_hashtag}`

        axios.get(url)
        .then(res => {
          let result = res.data
          this.posts = result.data
        })
      }else{
        this.getAll()
      }
    }
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


a{
  text-decoration: underline;
}

.table{
  width: 100%;
}
</style>
