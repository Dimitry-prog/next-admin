'use client';

import { useFormState } from 'react-dom';
import { authenticate } from "@/features/login/actions";
import SubmitLogin from "@/features/login/components/submit-btn";

const Login = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <form
        action={formAction}
        className='w-full max-w-xl p-5 flex flex-col justify-center gap-2.5 rounded-md bg-bg-light'
      >
        <h1 className='text-xl font-bold text-center'>Login</h1>
        <label>Email</label>
        <input
          name='email'
          type="email"
          placeholder='Email'
          className='w-full p-4 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <label>Password</label>
        <input
          name='password'
          type="password"
          placeholder='Password'
          className='w-full p-4 border-2 border-bg-hover rounded bg-transparent outline-none'
        />
        <SubmitLogin/>
        {state && <span className='text-xs text-center text-red'>{state}</span>}
      </form>
    </div>
  );
};

export default Login;