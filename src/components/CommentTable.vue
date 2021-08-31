<template>
<div class="w-100 ml-5 d-flex flex-column justify-content-center">
  <div class="kotak justify-content-center mb-3 ">
    <h4>Post</h4>
    <b>@{{post_username}}</b> : {{post_content}} 
    <br>
    <br>
    <a target="_blank" v-bind:href="post_attachment">{{post_attachment}}</a>
  </div>
  <div class="d-flex justify-content-center mb-3 ">
    <p class="pt-2">
    Enter hashtags: &nbsp;&nbsp;# 
    </p>
    <input v-model="filter_hashtag" class=" ml-2 form-text mr-2">
    <button @click = filterHashtag() class="btn btn-primary" > Filter</button>
  </div>
   <table class="table" >
      <thead class=" sm">
        <th>User</th>
        <th>Comment</th>
        <th>Time</th>
      </thead>
      <tbody>
        <tr v-for= "comment in comments" :key="comment.id">
          <td>@{{comment.user.username}}</td>
          <td>{{comment.content}}
            <br>
            <br>
            <a target="_blank" v-bind:href="comment.attachment">{{comment.attachment}}</a>
          </td>
          <td>{{comment.timestamp}}</td>
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
      comments: [],
      filter_hashtag: "",
      userId: this.user_id,
      postId: this.post_id,
      postUsername: this.post_username,
      postContent: this.post_content,
      postAttachment: this.post_attachment,
      postTimestamp: this.post_timestamp
    }
  },
  props:
    ['user_id',
    'post_id',
    'post_username',
    'post_content',
    'post_attachment',
    'post_timestamp']
  ,
  mounted(){
    console.log('commentTable ' + this.postUsername)
    console.log('commentTable ' + this.postId)
    console.log('commentTable ' + this.postContent)
    console.log('commentTable ' + this.postAttachment)
    console.log('commentTable ' + this.postTimestamp)
    console.log("user_id comment table: " + this.user_id)
    this.getAll()
  },
  methods:{
    getAll(){
      const url = `http://34.97.129.31:4567/post/${this.postId}/comment`
      axios.get(url)
      .then(res => {
        let result = res.data
        this.comments = result.data
      })
    },
    filterHashtag(){
      if (this.filter_hashtag!=""){

        const url = `http://34.97.129.31:4567/post/${this.postId}/comment?hashtag=%23${this.filter_hashtag}`

        axios.get(url)
        .then(res => {
          let result = res.data
          this.comments = result.data
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

.kotak{
  border-style: solid;
  border-width: 2px;
  padding:5px;
}
.table{
  width: 100%;
}
</style>
