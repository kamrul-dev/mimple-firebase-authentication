
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const hadleGoogleSignIn = () => {
    console.log('sign in');
  }

  return (
    <div className="App">
      <button onClick={hadleGoogleSignIn}>Sign in With Google</button>
    </div>
  );
}

export default App;
