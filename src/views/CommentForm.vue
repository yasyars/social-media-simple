<template>

<h2 class="d-flex justify-content-center" >Add Comment</h2>
  <div class="d-flex justify-content-center">
    <table class="table w-50 mt-3" >
      
      <tbody>
        <tr>
          Comment:
          <textarea v-model="content" class="form-text w-100" name="content" ></textarea>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center">
    <table class="table w-50" >
      <tbody>
        <tr>
          <td>Upload file</td>
          <td>
            <input type="file" id="attachment" ref="attachment" v-on:change="handleFileUpload()"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center ">
    <button @click= addPost() class="mr-2 btn btn-primary" > Post Comment</button>
  </div>
  <br>
  <a href=# @click= back() > Back</a>

</template>

<script>
import axios from "axios";

export default {
  name: 'Post',
  props: ['user_id',
    'post_id',
    'post_username',
    'post_content',
    'post_attachment',
    'post_timestamp'],
  data() {
    return{
      content: '',
      attachment: '',
      userId: this.user_id,
      postId: this.post_id,
      postUsername: this.post_username,
      postContent: this.post_content,
      postAttachment: this.post_attachment,
      postTimestamp: this.post_timestamp
    }
  },
  mounted(){
    console.log("user_id comment_form: " + this.userId)
  },
  methods: {
    handleFileUpload() {
      this.attachment = this.$refs.attachment.files[0];
    },
    addPost(){
      console.log("user_id comment_form addcomment: " + this.userId)

      const url = `http://34.97.129.31:4567/post/${this.postId}/comment`
      var formData = new FormData();
      formData.append('user_id', this.userId);
      formData.append('content', this.content);

      if (this.attachment != ''){
        formData.append('attachment',this.attachment)
      }
      console.log(this.attachment)

      axios.post(url,formData,
      {
        headers:{
          'Content-Type': 'multipart/form-data'
        }
      })
      .catch( error =>{
        alert(error.response.data.error.message)
      })
      .then( res => {
        alert(res.data.message)
        this.$router.push({ name: 'Comment', params: {user_id: this.userId, post_id:this.postId, post_username: this.postUsername, post_content: this.postContent, post_attachment: this.postAttachment, post_timestamp: this.postTimestamp }})
      })
    },
    back(){
      this.$router.push({ name: 'Comment', params: {user_id: this.userId, post_id:this.postId, post_username: this.postUsername, post_content: this.postContent, post_attachment: this.postAttachment, post_timestamp: this.postTimestamp }})
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
.form-text{
  height: 100px;
}
</style>
