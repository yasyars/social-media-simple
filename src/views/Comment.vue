<template>
  <div class="home">
    <div class="d-flex justify-content-center">
      <Comment 
      :user_id=this.user_id 
      :post_id=this.postId
      :post_username=this.postUsername
      :post_content=this.postContent
      :post_attachment= this.postAttachment
      :post_timestamp=this.postTimestamp></Comment>
      <div class="d-flex flex-column ml-2" >
        <a class="ml-2" href=# @click="back()" >Back</a>
        <br>
        <br>
        <a class="ml-2" href=# @click="addComment()">
        <div class="btn btn-primary ">
          <div class="fa fa-plus d-flex justify-content-center"></div>
          <div>Add Comment</div>
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
import Comment from '@/components/CommentTable.vue';
import axios from "axios";

export default {
  name: 'Home',
  components: {
    Comment
  },
  props:
    ['user_id',
    'post_id',
    'post_username',
    'post_content',
    'post_attachment',
    'post_timestamp']
  ,
  data(){
    return{
      hashtags: [],
      userId: this.user_id,
      postId:this.post_id,
      postUsername: this.post_username,
      postContent: this.post_content,
      postAttachment: this.post_attachment,
      postTimestamp: this.post_timestamp
    }
  },
  created(){
    console.log('see comment child ' + this.post_id)
    console.log('see comment child' + this.post_username)
    console.log('see comment child' + this.post_content)
    console.log('see comment child' + this.post_attachment)
    console.log('see comment child' + this.post_timestamp)
    console.log("user_id comment: " +this.user_id)
    const url = `http://34.97.129.31:4567/hashtag/trending`
    axios.get(url)
    .then(res => {
      let result = res.data
      this.hashtags = result.data
    })
  },
  methods: {
    addComment(){
      this.$router.push({ name: 'CommentForm', params: {user_id: this.userId, post_id:this.postId, post_username: this.postUsername, post_content: this.postContent, post_attachment: this.postAttachment, post_timestamp: this.postTimestamp }})
    },
    back(){
      this.$router.push({ name: 'Home', params: {user_id: this.userId }})
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


a{
  text-decoration: underline;
}
</style>
