import React, { useEffect, useState } from 'react';
import './login.css'

const users = [
  { username: 'Aiyanna', password: '123456' },
  { username: 'Adele', password: 'burningbridges' }
];

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(user);
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <input className="login__name"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className='login'>
        <input className='login__pass'
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <button className='login__btn' type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}

function Logout({ onLogout }) {
  return (
    <button onClick={() => {
      localStorage.removeItem('user');
      onLogout();
    }}>
      Logout
    </button>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <div>
      <Logout onLogout={() => setUser(null)} />
      <p>Welcome, {user.username}!</p>
    </div>
  );
}

export default Login;
