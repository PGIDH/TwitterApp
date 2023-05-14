import { useRef, useState } from "react";

function Contact() {

    // OPtion1 
    // const [ username, setUsername ] = useState('');
    // const [ password, setPassword ] = useState('');

    // Option 2
    // const [formDetail, setFormDetail] = useState({
    //     username: '',
    //     password: ''
    // })

    // const handleInputChange = (key) => (e) => {
    //     // console.log(key, e.target.value);
    //     setFormDetail((oldState) => ({
    //         ...oldState,
    //         [key]: e.target.value
    //     }))
    // }

    // option 3
    const usernameRef = useRef(''); 
    const passwordRef = useRef('');    


    const handleUsernameChange = (e) =>{
        usernameRef.current = e.target.value;
    }

    const handlePasswordChange = (e) =>{
        passwordRef.current = e.target.value;
    }

    const handleSubmit = () => {
        console.log({ username: usernameRef.current, password : passwordRef.current });
    }
    return (
        <div className="form">
            <div className="form-field">
                <label>
                    Username
                </label>
                <input type="text" placeholder="Please enter username"  ref={usernameRef}>
                       {/* onChange={handleInputChange('username')} name="username123" id="username"> */}
                      
                </input>
            </div>
            <div className="form-field">
                <label>
                    Password
                </label>
                {/* name for auto suggestions */}
                <input type="password" placeholder="Please enter password" ref={passwordRef}>
                        {/* onChange={handleInputChange('password')} name="password123" id="password123"> */}
                </input>
            </div>
            <div className="form-field">
                <button onClick={handleSubmit}>Signin</button>
            </div>
        </div>
    )
}

export default Contact;