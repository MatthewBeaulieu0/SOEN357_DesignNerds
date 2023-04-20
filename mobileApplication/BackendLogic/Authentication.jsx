
import { app, auth, signInEmail } from "../firebaseConfig";

  export default async function Login(userType){

    let email= userType?"user1@test.com":"vet@test.com"

    authen = await auth()
    let userID=null
    await signInEmail(authen, email, "123456")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential;
    userID=auth().currentUser.uid
    console.log(userID)
   
    // ...
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("there is an error")
    return false
  });

  return userID

  }