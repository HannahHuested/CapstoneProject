import { auth } from "./firebase";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const doSignInWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    //result.user
    return result;
};
export const doSignOut = () => {
    return auth.signOut();
}