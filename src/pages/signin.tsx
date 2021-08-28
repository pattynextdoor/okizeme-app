import { useEffect } from "react";
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'
import { withAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";

const SignIn = () => {
    const router = useRouter()

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                router.push('/')
            })
            .catch(err => console.log(err))
    }) 

    return (
        <>
            <p>Sign-in successful!</p>
            <p>Redirecting...</p>
        </>
    )
}

export default withAuthenticator(SignIn)