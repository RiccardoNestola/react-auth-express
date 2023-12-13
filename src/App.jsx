import React from 'react';
import { AuthProvider } from './ContextAPI/AuthContext';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Layout from './Pages/Layout';
import ChiSono from './Pages/ChiSono';
import Contatti from './Pages/Contatti';
import Login from './Auth/Login';
import Dashboard from './Auth/Dashboard';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";

import { itIT } from "@clerk/localizations";
/* import withAuth from './Middlewares/withAuth'; */
/* import oldPosts from './data/posts'; */

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


function ProtectedPage() {
  return (
    <>
      <Homepage />
      {/* <UserButton /> */}
    </>
  );
}

function ClerkProviderWithRoutes() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
      localization={itIT}
    >
      <Routes>

        <Route element={<Layout />}>
          <Route path="/chi-sono" element={<ChiSono />}></Route>
          <Route path="/contatti" element={<Contatti />}></Route>


        </Route>

        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}




export default App
