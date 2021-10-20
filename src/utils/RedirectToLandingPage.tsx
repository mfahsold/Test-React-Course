import { Redirect } from "react-router";
import React from 'react';

export default function RedirectToLandingPage() {
    return <Redirect to = {{pathname: '/'}} />
}