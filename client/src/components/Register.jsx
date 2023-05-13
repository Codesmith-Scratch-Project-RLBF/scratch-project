import React from 'react';

const Register = () => {
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const handleRegister = async () => {};
  const handleUsername = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassWord(e.target.value);
  };
  return (
    <div className="login-button">
      <form onSubmit={handleRegister}>
        <label>
          <h1>Username:</h1>
          <input type="text" handleUsername={setUserName()} />
        </label>
        <label>
          <h1>Password:</h1>
          <input type="text" handlePassword={setPassWord} />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
