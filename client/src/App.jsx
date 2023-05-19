import { Route } from 'wouter';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Wrapper from './components/Wrapper';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Layout>
      <Wrapper>
        <Route path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Wrapper>
    </Layout>
  );
}

export default App;
