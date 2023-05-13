import React from 'react';

const Login = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleLogin = async () => {};

  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };

  return (
    <div className="login-button">
      <form onSubmit={handleLogin}>
        <label>
          <h1>Username:</h1>
          <input type="text" handleUsername={setUserName()} />
        </label>
        <label>
          <h1>Password:</h1>
          <input type="text" handlePassword={setPassWord()} />
        </label>
        <button>Log-in</button>
      </form>
    </div>
  );
};

export default Login;
