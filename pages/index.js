import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AccessPage() {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code === 'letmein') {
      router.push('/home');
    } else {
      setError('Invalid access code');
    }
  };

  return (
    <div className="container">
      <h1>Enter Access Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Access Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
