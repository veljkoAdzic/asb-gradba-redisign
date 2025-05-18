import './home.css';
import NavBar from '../components/navbar/navbar';
import LoginForm from '../components/form/loginForm';

function Home() {
  return (
    <>
    <NavBar />
    <div id="content">
        <LoginForm />
    </div>
    </>
  );
}

export default Home;
