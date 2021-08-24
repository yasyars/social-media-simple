<template>
  <div class="home">
    <h1 class="d-flex justify-content-center">Timeline</h1>
    <div class="d-flex justify-content-center">
    <table class="table w-75" >
      <thead class="thead-dark sm">
        <th>User</th>
        <th>Post</th>
        <th>Time</th>
        <th>Action</th>
      </thead>
      <tbody>
        <!-- <tr>
          <td>
            <form>
            <a class="mr-2" href='/items/<%= item.id %>'> Show</a> 
            <a class="mr-2" href='/items/<%= item.id %>/edit'> Edit</a>
             <input name="_method" type="hidden" value="delete">
            </form>
          </td>
        </tr> -->
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td><a href=#>see comments</a>&nbsp;&nbsp;&nbsp; <a href=#>add comments</a></td>
        </tr>
      </tbody>
    </table>
      <div class="d-flex flex-column ml-2" >
        <a class="ml-2" href = "/items/new">
        <div class="btn btn-primary ">
          <div class="fa fa-plus d-flex justify-content-center"></div>
          <div>Add Post</div>
        </div>
        </a>
        <br>
        <div >
          <div class=" d-flex justify-content-center"></div>
          <div>Trending Hashtags</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.table th{
  padding: 5px !important;
}
</style>
