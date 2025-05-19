import './home.css';
import NavBar from '../../components/navbar/navbar';
import LoginForm from '../../components/form/loginForm';
import { useEffect, useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import { useNavigate, Navigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState(null)
  const [checked, setChecked] = useState(false);

  const navigate = useNavigate();

  useEffect(() =>{
      setUser( JSON.parse(sessionStorage.getItem("Active-User") ) );
      setChecked(true);
  }, [])

  if (!checked) return <p>Loading...</p>;

  if (user) {
    console.log("Navigating! " + JSON.stringify(user))
    return <Navigate to={"/asb-gradba-redisign/dashboard"} replace />
  }
  
  return (
    <>
      <NavBar />
      <div id="content">
          <LoginForm onLogin={(cred) => {setUser(cred)}} /> 
      </div>
    </>
  );
}

export default Home;
