import { useState } from 'react';
import Label from './components/Label';
import './App.scss';

function App() {
  const [value, setValue] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value);
    setValue({ email: '', password: '' });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Please Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control">
            <input
              type="text"
              value={value.email}
              onChange={(e) => setValue({ ...value, email: e.target.value })}
              required
            />
            <Label label="Email" />
          </div>
          <div className="form-control">
            <input
              type="password"
              value={value.password}
              onChange={(e) => setValue({ ...value, password: e.target.value })}
              required
            />
            <Label label="Password" />
          </div>
          <button className="btn">Login</button>
          <p className="text">
            Don't have an account? <a href="#!">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
