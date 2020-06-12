import React, { useState } from 'react';
import './styles.css';

const App = () => {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState([]);

	const addTodo = text => {
		const newTodos = [{ text }, ...todos];
		setTodos(newTodos);
	};

	const handleInputChange = e => {
		setInputValue(e.currentTarget.value);
	};

	const handleComplete = e => {
		const index = e.currentTarget.getAttribute('data-index');
		const newTodos = [...todos];
		newTodos[index].isComplete = !newTodos[index].isComplete;
		setTodos(newTodos);
	};

	const handleRemove = e => {
		e.stopPropagation();
		const index = e.currentTarget.getAttribute('data-index');
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!inputValue) return;
		addTodo(inputValue);
		setInputValue('');
	};

	return (
		<div className="App">
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputValue} onChange={handleInputChange} />
			</form>
			<ul>
				{todos.map(({ text, isComplete }, index) => (
					<li
						onClick={handleComplete}
						className={isComplete ? 'complete' : null}
						data-index={index}>
						<div>{text}</div>
						<button
							onClick={handleRemove}
							data-index={index}
							className="remove">
							x
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
