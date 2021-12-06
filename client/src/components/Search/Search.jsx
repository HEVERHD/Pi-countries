import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoutryName } from '../../redux/action';
import { StyledSearch } from './StyledSearch';

const Search = () => {
	const dispatch = useDispatch();
	const [name, setName] = useState('');

	const handleChange = (e) => {
		// e.preventDefault()
		setName(e.target.value);
	};

	// const handleSubmit = () => {
	//     // e.preventDefault()
	//    dispatch(getCoutryName(name))
	//    setName('')
	// }

	useEffect(() => {
		dispatch(getCoutryName(name));
	}, [dispatch, name]);

	const clearInput = () => {
		dispatch({
			type: 'COUNTRY',
			payload: '',
		});
	};

	return (
		<StyledSearch>
			<div>
				<i class='fas fa-search'></i>
				<input
					type='text'
					placeholder='Buscar país...'
					onChange={(e) => handleChange(e)}
				></input>
				<i class='fas fa-times close'></i>
			</div>
		</StyledSearch>
	);
};

export default Search;
