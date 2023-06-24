import { useState } from 'react';

const SimpleForm = () => {
	const [name, setName] = useState('');
	const [nameInitialized, setNameInitialized] = useState(false);

	let nameValid = name.trim() !== '' ? true : false;
	const nameErrorMessageClassName = !nameValid && nameInitialized ? 'error-message display-error-message' : 'error-message';

	const [email, setEmail] = useState('');
	const [emailInitialized, setEmailInitialized] = useState(false);

	let emailValid = email.trim().indexOf('@') !== -1 ? true : false;
	const emailErrorMessageClassName = !emailValid && emailInitialized ? 'error-message display-error-message' : 'error-message';

	const submitHandler = (event) => {
		event.preventDefault();
		
		setNameInitialized(true);
		setEmailInitialized(true);

		if (name.trim() === '' || email.trim().indexOf('@') === -1) {
			nameValid = false;
			emailValid = false;
			return false;
		}

		nameValid = true;
		setNameInitialized(false);

		emailValid = true;
		setEmailInitialized(false);

		console.log('Form submitted YEAY!!');
		setName('');
		setEmail('');
	};

	const nameChangeHandler = (event) => {
		setName(event.target.value);
		setNameInitialized(true);
	};

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
		setEmailInitialized(true);
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label>Name</label>
				<input id="name" value={name} onChange={nameChangeHandler} />
				<p className={nameErrorMessageClassName}>Name cannot be empty!</p>
			</div>
			<div>
				<label>Email</label>
				<input id="email" value={email} onChange={emailChangeHandler} />
				<p className={emailErrorMessageClassName}>Email cannot be empty!</p>
			</div>
			<div>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default SimpleForm;