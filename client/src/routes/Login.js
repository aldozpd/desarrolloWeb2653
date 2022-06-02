import React, {useEffect , useState} from 'react';
import {Navigate, useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

function Login() {
    
    const [user,setUser] = useState('');
    const [pass, setPass] = useState('');
    const [userData, setUserData] = useState([{}]);

    let navigate = useNavigate();
    let location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        const login = {user , pass};
        
        const apiConn = async () => {
            const res = await axios.post('/login',login);
            setUserData(res.data);
        }

        apiConn();

        console.log(userData);
    
    }

    return(
        <div className='container'>
            <form action='/login' method='post' onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col'>
                        <input type='number' required value={user} onChange={(e) => setUser(e.target.value)} placeholder='Numero de cuenta' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <input type='password' required value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Contraseña' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type='submit'>Login</button>
                        
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;