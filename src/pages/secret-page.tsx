import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'

interface SecretPageProps {
    isLoggedIn: boolean
}

const SecretPage: FC<SecretPageProps> = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h3>This page is full of secrets!!!</h3>
            </div>
        )
    }
    return <Redirect to="/login" />
}

export default SecretPage