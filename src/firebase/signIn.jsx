import { signInWithGooglePopup } from "./utils";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

export const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response);
        console.log(response.user.displayName);
        localStorage.setItem("name",response.user.displayName);
        localStorage.setItem("profilePic", response.user.photoURL);
 
    }

    const getName=()=>{
        return( localStorage.getItem("name"));
    }

    const getPic =() => {
        return(localStorage.getItem("profilePic"));
    }

    return(
        <div>
            {getName()} <Image src={getPic()} width='25px' roundedCircle/> <Button varient = 'primary' onClick={logGoogleUser}>Sign In</Button>
        </div>
        
    )
}

export default SignIn;