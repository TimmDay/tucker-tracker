import { 
  firebase, 
  emailAuthProvider, 
  googleAuthProvider 
} from '../googleAPIs/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginEmail = () => {
  return () => {
    return firebase.auth().signInWithPopup(emailAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
