<template>

<h2 class="d-flex justify-content-center" >Login</h2>
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
    </tbody>
  </table>
  </div>
  <div class="d-flex justify-content-center ">
    <button @click= toRegister() class="mr-2 btn btn-primary" > Register</button>
 
    <button @click= onClick() class="btn btn-primary"> Login</button>

  </div>
<!-- </form> -->

</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return{
      username: ''
    }
  },
  methods: {
    onClick() {
      if (this.username!=''){
        const url = `http://34.97.129.31:4567/user/${this.username}`
        axios.get(url)
        .then(res => {
          let result = res.data

          if (result.data!=null){
            alert("Welcome "+this.username)
            this.$router.push({ name: 'Home', params: {user_id: result.data.id }})
          }else{
            alert(`${this.username} not found`)
          }
        })
      }

    },
    toRegister(){
      this.$router.push('/register')
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
