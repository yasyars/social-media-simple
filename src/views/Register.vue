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
import qs from "qs";

export default {
  name: 'Register',
  data() {
    return{
      username: '',
      email: '',
      bio:'',
      user_id:0
    }
  },
  methods: {
    onClick() {
      if (this.username!='' && this.email!=''){
        const url = `http://34.97.129.31:4567/user`
        axios.post(url,qs.stringify({   
            username: this.username,
            email: this.email,
            bio: this.bio
          }),
          {
            headers: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }
        )
        .then( res =>{
          res.data
          this.getUsername()
        })
        .catch(function (error) {
            alert(error.response.data.error.message);
        })
      }
    },
    getUsername(){
      const get_url = `http://34.97.129.31:4567/user/${this.username}`
      axios.get(get_url)
      .then(res_get => {
        var result_get = res_get.data
        this.user_id = result_get.data.id
        // console.log(2)
        alert("Welcome "+this.username)
        // console.log(this.user_id)
        this.$router.push({ name: 'Home', params: {user_id: this.user_id }})
        // console.log(1)

      })
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
