'use client';

import { useFormStatus } from 'react-dom';

const SubmitLogin = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='w-full p-4 mt-4 rounded bg-green-dark disabled:cursor-not-allowed disabled:opacity-50'
    >
      {pending ? 'Login in...' : 'Submit'}
    </button>
  );
};

export default SubmitLogin;