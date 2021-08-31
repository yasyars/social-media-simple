<template>

<h2 class="d-flex justify-content-center" >Add Post</h2>
  <div class="d-flex justify-content-center">
    <table class="table w-50 mt-3" >
      
      <tbody>
        <tr>
          What's happening?
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
    <button @click= addPost() class="mr-2 btn btn-primary" > Post</button>
  </div>
  <br>
  <a href=# @click= back() > Back</a>

</template>

<script>
import axios from "axios";

export default {
  name: 'Post',
  props: ['user_id'],
  data() {
    return{
      content: '',
      attachment: '',
      user : this.user_id
    }
  },
  mounted(){
    console.log("user_id post_form: " + this.user_id)
  },
  methods: {
    handleFileUpload() {
      this.attachment = this.$refs.attachment.files[0];
    },
    addPost(){
      console.log("user_id post_form addpost: " + this.user)

      const url = `http://34.97.129.31:4567/post`
      var formData = new FormData();
      formData.append('user_id', this.user);
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
        this.$router.push({ name: 'Home', params: {user_id: this.user }})
      })
    },
    back(){
      this.$router.push({ name: 'Home', params: {user_id: this.user }})
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
