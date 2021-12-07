import React from 'react';
import { StyledNavbar } from './StyledNavbar';
import { NavLink } from 'react-router-dom';
// import Img from './images/lupa.svg';

function Navbar({ setDarkMode, darkMode }) {
	function handleClick() {
		setDarkMode(!darkMode);
	}
	return (
		<StyledNavbar>
			{/* <img className='img' src={Img} /> */}
			<div className='container'>
				<div className='title'>
					<p>HEVER DAVID GELIS DIAZ</p>
				</div>
				<div className='social-media'>
					<a
						href='https://www.linkedin.com/in/hevert-david-gelis-diaz-98a4ba16b/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i class='fab fa-linkedin'></i>
					</a>
					<a
						href='https://github.com/HEVERHD'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i class='fab fa-github-square'></i>
					</a>
				</div>
				<div>
					<ul className='list'>
						<li className='list-item'>
							<p onClick={handleClick}>
								Modo oscuro
								<i class='far fa-moon'></i>
							</p>
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
}

export default Navbar;
