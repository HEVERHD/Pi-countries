import styled from 'styled-components';

export const StyledSearch = styled.div`
	margin: auto;
	max-width: 400px;
	width: 90%;
	padding-top: 20px;
	box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);

	input {
		width: 100%;
		border-radius: 5px;
		border: none;
		height: 48px;
		line-height: 48px;
		padding: 0 2rem;
		font-size: 0.8em;
		&::-webkit-input-placeholder {
			color: #c4c4c4;
			position: center;
		}
	}

	&::after {
		font-family: 'font awesome 5 pro';
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 25px;
		color: blue;
	}
`;
