import styled from 'styled-components';
export const StyledCards = styled.div`
display: grid;
background: var(--white);
width: 264px;
box-shadow: 0 0 7px 2px rgba(0, 0, 0, .03);
border-radius: 5px;
margin: 1em;
overflow: hidden;
padding: 4em 2em;
grid-row-gap: 2.3em;
justify-content: center;

.nim{
		border: red solid 2px;
	}



	&:hover {
		border-bottom: var(--black) solid 4px;
		grid-template-columns: 1fr;
		transform: scale(1.02);
		transition: all .3s ease-in-out;
		cursor: pointer;
	}


		img {
			width: 100%;
			height: 160px;
			object-fit: cover;
		}
	}

	.info {
		color: var(--black);
		font-size: 8px;
		height: 50%;
		text-align: center;
		font-size: 14px;
		h1 {
			
			color: var(--black);
			font-family: 'Overpass', sans-serif;
		}

		h2 {
			height: 40%;
			font-size: 12px;
			/* border : 3px solid red; */
			color: var(--black);
			font-weight: 900;
			margin-bottom: 1rem;
            margin: 0;
			font-size: 22px;
			font-family: 'Overpass', sans-serif;
		
	}
	

	@media (max-width: 650px) {
		flex-direction: column;
		width: 100%;
		height: 520px;
		margin: 30px 0;
		.contImg {
			width: 100%;
			max-height: 50%;
		}
		.info {
			padding: 0 15px;
			width: 100%;
			h2 {
				font-size: 30px;
			}
			h5 {
				font-size: 17px;
			}
			p {
				font-size: 19px;
			}
		}
	}
`;
export const StyledOverlay = styled.div``;
