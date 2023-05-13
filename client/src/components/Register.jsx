import React from 'react';

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleRegister = async () => {};

  return (
    <div className="login-button">
      <form onSubmit={handleRegister}>
        <label>
          <h1>Username:</h1>
          <input type="text" onChange={setUserName()} />
        </label>
        <label>
          <h1>Password:</h1>
          <input type="text" onChange={setPassWord()} />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
