<template>

<h2 class="d-flex justify-content-center" >Register</h2>
<!-- <form  > -->
  <div class="d-flex justify-content-center">
  <table class="table w-50" >
    <tbody>
      <tr>
        <td>Username</td>
        <td>
          <input v-model="username" class="form-text mr-2" name="username" type="text" >
        </td>
      </tr>
      <tr>
        <td>Email</td>
        <td>
          <input v-model="email" class="form-text mr-2" name="username" type="text" >
        </td>
      </tr>
      <tr>
        <td>Bio</td>
        <td>
          <input v-model="bio" class="form-text mr-2" name="username" type="text" >
        </td>
      </tr>
    </tbody>
  </table>
  </div>
  <div class="d-flex justify-content-center ">
    <button @click= onClick() class="mr-2 btn btn-primary" > Register</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      username: '',
      email: '',
      bio:''
    }
  },
  methods: {
    onClick() {
      if (this.username!='' && this.email!=''){
        const url = `http://34.97.129.31:4567/user`
        axios.post(url,{
          params : {   
            username: this.username,
            email: this.email,
            bio: this.bio
          }
          
        })
        .then(res => {
          let result = res.data
          console.log(result.message)

          if (result.status=='success'){
            alert("Welcome "+this.username)
            this.$router.push('/home')

          }else{
            alert(result.error.message)
          }
        })
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
a {
  color: #42b983;
}
</style>
