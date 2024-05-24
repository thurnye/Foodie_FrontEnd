// redirects the user here when the user creates an account
import React from 'react'
import CompleteForm from '../components/CompleteRegistrationForm/completeForm'
import { Container } from '@mui/material'

export default function userCompleteForm() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
           <CompleteForm/>
        </Container>
    )
}
   