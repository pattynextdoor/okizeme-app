import { useEffect } from "react";
import { useRouter } from 'next/router'
import { Auth, Hub } from 'aws-amplify'
import { withAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";

async function updateUserWithDefaultAttributes() {
    const user = await Auth.currentAuthenticatedUser()
    const avatarString = 'https://avatars.dicebear.com/api/jdenticon/' + user.username + '.svg'
    await Auth.updateUserAttributes(user, {
        picture: avatarString
    })
}

Hub.listen('auth', (data) => {
    switch(data.payload.event) {
        case 'signUp':
            console.log('User signed up. Assigning default attributes...')

            break;
    }
})

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