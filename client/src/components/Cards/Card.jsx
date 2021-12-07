import React from 'react';
import { StyledCards } from './StyledCards';

const Card = ({ name, image, continents }) => {
	return (
		<StyledCards>
			<div className='info'>
				<div className=' contImg'>
					<img src={image} alt='imagen de welcome' />
				</div>
				<h2>{name}</h2>
				<div className='contenedor'>
					<p>
						<strong>Continent:</strong>
						{continents}
					</p>
				</div>
			</div>
		</StyledCards>
	);
};

export default Card;
