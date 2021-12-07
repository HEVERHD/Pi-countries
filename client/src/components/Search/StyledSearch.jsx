import styled from 'styled-components';

export const StyledSearch = styled.div`
	background: var(--white);
	box-shadow: 0 2px 9px rgba(0, 0, 0, 0.05);
	padding: 0 2rem;
	border-radius: 4px;
	/* border: 3px solid red; */
	.ti {
		color: var(--gray);
	}
	i {
		margin-right: 1em;
		color: var(--gray);
	}

	input {
		color: var(--gray);
		background: var(--white);
		position: center;
		/* width: 100%; */
		flex: 1;
		border-radius: 7px;
		border: none;
		height: 48px;
		line-height: 48px;
		font-size: 0.8em;
		outline: 0;
		&::-webkit-input-placeholder {
			color: var(--gray);
		}
	}

	&::after {
		font-family: 'font awesome 5 pro';
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
		font-size: 25px;
		color: var(--gray);
	}
`;
