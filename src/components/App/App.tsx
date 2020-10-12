import React, { useEffect, useState } from 'react';
import './App.css';
import { CustomInput } from '../CustomInput/CustomInput';
import { User } from '../utils/User';
import { getUser } from '../utils/getUser';

function App() {
  const [text, setText] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async ()  => {
      const user = await getUser();
        setUser(user);
    };

    try {
      fetchUser();
    } catch(error) {
      console.log(error)
    }
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      {user ? <p>Username: {user.name}</p> : null}
      <CustomInput value={text} onChange={handleChange}>Input:</CustomInput>
      <p>You typed: {text ?? '...'}</p>
    </div>
  );
};

export default App;