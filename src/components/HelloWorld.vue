<template>
  <div>
    <h1>Product Collections</h1>
      <div v-for="item in getCollectionList.items" :key="item._id">
        <h2>{{item.title}}</h2>
        <ul>
          <li v-for="product in item.products" :key="product._id">
            {{product.name}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  apollo: {
    getCollectionList: gql`
      query {
        getCollectionList {
          items {
            _id
            title
            products {
              _id
              name
            }
          }
        }
      }
    `,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
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
