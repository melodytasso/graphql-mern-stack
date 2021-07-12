import { ApolloClient,ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
// import components
import Home from './pages/home';
import Nav from './components/Nav';
import Register from './pages/auth/register';
import Login from './pages/auth/login';
import CompleteRegistration from './pages/auth/completeregistration';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});
const App = () => {

  return (
    <ApolloProvider client={client}>
      <Nav />  
      <ToastContainer />    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/complete-registration" component={CompleteRegistration} />
      </Switch>
    </ApolloProvider>
  );
};

export default App;
