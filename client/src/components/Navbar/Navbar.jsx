import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';
// import Img from './images/lupa.svg';

const Navbar = () => {
	return (
		<StyledNavbar>
			{/* <img className='img' src={Img} /> */}
			<div className='container'>
				<div className='title'>
					<p>HEVER DAVID GELIS DIAZ</p>
				</div>
				<div className='social-media'>
					<a
						href='https://www.linkedin.com/in/luis-miguel-alfonzo-roca-web-developer/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i class='fab fa-linkedin'></i>
					</a>
					<a
						href='https://github.com/LuisRocca'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i class='fab fa-github-square'></i>
					</a>
					<a
						href='https://twitter.com/LuisRoc05207268'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i class='fab fa-twitter-square'></i>
					</a>
				</div>
				<div>
					<ul className='list'>
						<li className='list-item'>
							<i class='far fa-moon'>Modo oscuro</i>
							<NavLink exact to='/home'>
								Home
							</NavLink>
						</li>
						<li className='list-item'>
							<NavLink exact to='/create/activity'>
								<center>Create Activity </center>
							</NavLink>
						</li>
						<li className='list-item'>
							<NavLink exact to='/about'>
								About
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</StyledNavbar>
	);
};

export default Navbar;
