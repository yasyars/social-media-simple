<template>
   <table class="table w-75" >
      <thead class="thead-dark sm">
        <th>User</th>
        <th>Post</th>
        <th>Time</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for= "post in posts" :key="post.id">
          <td>{{post.user.username}}</td>
          <td>{{post.content}}</td>
          <td>{{post.timestamp}}</td>
          <td><a href=#>see comments</a>&nbsp;&nbsp;&nbsp; <a href=#>add comments</a></td>
        </tr>
        <!-- <tr>
          <td>
            <form>
            <a class="mr-2" href='/items/<%= item.id %>'> Show</a> 
            <a class="mr-2" href='/items/<%= item.id %>/edit'> Edit</a>
             <input name="_method" type="hidden" value="delete">
            </form>
          </td>
        </tr> -->
        <!-- <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><a href=#>see comments</a>&nbsp;&nbsp;&nbsp; <a href=#>add comments</a></td>
        </tr> -->
      </tbody>
    </table>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',
  data(){
    return{
      posts: []
    }
  },
  created(){
    console.log("WeLCOM")
    const url = `http://34.97.129.31:4567/post`
    axios.get(url)
    .then(res => {
      let result = res.data
      this.posts = result.data
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
