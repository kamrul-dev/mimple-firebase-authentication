
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});

  const googleProvider = new GoogleAuthProvider();

  const hadleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }

  return (
    <div className="App">
      {
        user.email ? <button onClick={handleSignOut}>Sign Out</button> :
          <button onClick={hadleGoogleSignIn}>Sign in With Google</button>

      }
      <div>
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>
        <img src={user.photoURL} alt="" />
      </div>
    </div>
  );
}

export default App;
