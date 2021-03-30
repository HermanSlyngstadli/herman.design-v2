import styled from 'styled-components'

const Item = styled.div`
	grid-column: ${(props) => props.large};
	
	@media only screen and (max-width: 850px) {
		grid-column: ${(props) => props.small};
	}
`;

const GridItem = ({ children, small, large }) => {
	return <Item small={small} large={large}>{children}</Item>
}

export default GridItem;