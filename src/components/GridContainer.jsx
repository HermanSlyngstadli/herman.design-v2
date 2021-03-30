import styled from 'styled-components'

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12,1fr);
	grid-gap: 16px;
	gap: 16px;
	padding: 0 64px;
	max-width: 1600px;
	margin: 0 auto;
	@media only screen and (max-width: 850px) {
	  padding:0 24px;
	}
`;

const GridContainer = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default GridContainer;