import Vue from 'vue'
import App from './App.vue'
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

Vue.config.productionTip = false;

const getHeaders = () => {
  const headers = {
    Authorization : `Bearer YOUR-API-KEY-HERE`
  };  
  return headers;
};

 // Create an http link:
const link = new HttpLink({
  uri: 'YOUR-ENDPOINT-HERE',
  fetch,
  headers: getHeaders()
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
 apolloProvider,
  render: h => h(App)
}).$mount("#app");