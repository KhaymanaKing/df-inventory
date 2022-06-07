import React from 'react';
import { useState } from 'react/cjs/react.production.min';
import { getUser, signIn } from '../services/supabase-utils';

export default function SignIn({ setEmail, setToken }) {
  const [user, setUser] = useState({
    email,
    password
  });
  async function handleSignIn(e){
    e.preventDefault();
    await signIn(user.email, user.password);
    const {
      access_token,
      user: { email }
    } = getUser();
    setEmail(email);
    setToken(access_token); 
  }
  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>
                email
          <input required type='email' value={user.email} onChange={e=> setUser.email(e.target.value)}/>
        </label>
        <label>
            password
          <input required type='password' value={user.password} onChange={e=> setUser.password(e.target.value)}/>
        </label>
        <button>sign in</button>
      </form>
    </div>
  );
}
