import React from 'react'
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';
import "./Login.css"
import signup from "../signup/signup";
import { Link } from 'react-router-dom';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


 function Login() {

	
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	

	const handleName = (e) => {
		
		setName(e.target.value);
		setSubmitted(false);
	};
	console.log(name)

	const handleEmail = (e) => {
		console.log(email)
		setEmail(e.target.value);
		setSubmitted(false);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
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
					display: submitted ? "" : "none",
				}}
			>
				<alert>Log in sucessfully</alert>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? "" : "none",
				}}
			>
                <alert>Please enter all the fields</alert>
		
			</div>
		);
	};
	
	const alert=()=> {
		alert("Your file is being uploaded!")
	}
	

	return (

	
		
	
		<div className="form">
			<ScrollToTop/>
			<Navbar/>
			<div>
				<h1 className='page-heading'>Log in</h1>
			</div>

			
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>

			<form className='container shadow bg-white p-5 login'>
				<input
					onChange={handleName}
					className="input-box"
					placeholder='Username'
					type="text"
				/><br/>
              
				<input
					onChange={handleEmail}
					className="input-box"
				    placeholder='Email'
					type="email"
				/><br/>
				<input
					onChange={handlePassword}
					className="input-box"
					placeholder='Password'
					type="password"
				/>
				<br/>
				<div className='check-box'>
				<input type="checkbox" id="Remember" name="Remember me" value="Remember me"/>    
                 <label>Remember me</label> <br/>
				 </div> 
				 <p className='pass'>Forgot Password</p>
       
				<button onClick={handleSubmit} className="btn" type="submit">
					Log in
				</button>
				<Link to="/signup"><p>Don't have an account?</p></Link>
				
			</form><br/><br/>
			<Footer />
			
		</div>
		
	);
}



export default Login;

