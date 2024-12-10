import { signInWithGooglePopup } from "./utils";
import Button from 'react-bootstrap/Button';
const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        
        console.log(response);
        console.log(response.user.displayName);
    }
    

    return(
        <div>
            <p>
            <Button varient = 'primary' onClick={logGoogleUser}>Sign In</Button>
            </p>
        </div>
        
    )
}

export default SignIn;