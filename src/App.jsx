import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input type="password" required />
            <label>Password</label>
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
