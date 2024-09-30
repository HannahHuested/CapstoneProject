import { signInWithGooglePopup } from "./utils";
import Button from 'react-bootstrap/Button';
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <Button varient = 'primary' onClick={logGoogleUser}>SignIn</Button>
        </div>
    )
}

export default SignIn;