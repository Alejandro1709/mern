import { Route } from 'wouter';
import Board from './components/Board';
import Layout from './components/Layout';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Layout>
      <Wrapper>
        <Route path='/' component={Board} />
        <Route path='/login'>Login</Route>
        <Route path='/register'>Register</Route>
      </Wrapper>
    </Layout>
  );
}

export default App;
