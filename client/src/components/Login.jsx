import React from 'react';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleLogin = async () => {};

  return (
    <div className="login-button">
      <form onSubmit={handleLogin}>
        <label>
          <h1>Username:</h1>
          <input type="text" onChange={setUserName()} />
        </label>
        <label>
          <h1>Password:</h1>
          <input type="text" onChange={setPassWord()} />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
