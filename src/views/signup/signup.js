import { useState } from 'react';
import "./signup.css"

export default function Form() {


const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);


const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};


const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};


const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};


const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '') {
setError(true);
} else {
setSubmitted(true);
setError(false);
}
};


const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<h1>User {name} successfully registered!!</h1>
</div>
);
};


const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<h1>Please enter all the fields</h1>
</div>
);
};

return (
<div className="form">
<div>
<h1>Sign Up</h1>
</div>


<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<form>

<input onChange={handleName} className="input" placeholder='Name'
value={name} type="text" />

<input onChange={handleEmail} className="input" placeholder='Email'
value={email} type="email" />

<input onChange={handlePassword} className="input" placeholder='Password'
value={password} type="password" />

<input onChange={handlePassword} className="input" placeholder=' Confirm Password'
value={password} type="password" />

<button onClick={handleSubmit} className="btn" type="submit">
Sign up
</button>
</form>
</div>
);
}

