import styled from 'styled-components';

export const StyledHome = styled.div`
	padding-top: 180px;

	.container {
		display: flex;
		margin-top: 25px;
	}

	.cards-container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 10px 20px;

		.contenedor {
			flex-direction: row;
		}
	}

	.select {
		display: flex;
		width: 100%;
		height: 2em;
		line-height: 4;

		.select::after {
			color: var(--background);
			position: absolute;
			top: 0;
			right: 0;
			padding: 0 1em;
			background: var(--switch);
			cursor: pointer;
			pointer-events: none;
			transition: all 0.3s ease;
		}

		.select:hover::after {
			color: var(--white);
		}

		select {
			border: 1px var(--background) solid;
			border-radius: 20px;
			background: var(--white);
			margin: 1px 20px;
			flex: 1;
			padding: 3px;
			color: var(--black);
			cursor: pointer;
			font-size: 1em;
		}
	}

	.contenedor_loading {
		.loading {
			color: var(--black);
			font-size: 20px;
			position: relative;
		}
	}
`;
