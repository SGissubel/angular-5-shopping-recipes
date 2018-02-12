import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, password: string) {
    debugger;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }  
}