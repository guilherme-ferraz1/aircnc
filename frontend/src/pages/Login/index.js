import React, {useState} from 'react';
import api from '../../services/api';

export default function Login({ history }) { 
    
    const  [email, setEmail ] = useState('');
  
  async function handleSubmit(event) {
      event.preventDefault();

      const response = await api.post('/sessions', { email })

      const { _id } = response.data; 

      localStorage.setItem('user', _id);

      history.push('/dashboard');
  }
  
    return (
        <>    
            <p>
            Make your business <strong>visible</strong> and find new <strong>talents</strong>.
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input 
                type="email" 
                id="email" 
                placeholder="Your e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button type="submit" className="btn">Login</button>
            </form>
        </>
    )
}