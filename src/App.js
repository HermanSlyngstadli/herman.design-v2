import styled from 'styled-components'
import './App.css'

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

const GridItem = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding-top:10em;
	grid-column: ${(props) => props.large};
    @media only screen and (max-width: 850px) {
        grid-column: ${(props) => props.small};
	}
`;

function App() {
  return (
    <Wrapper>
      <GridItem small="1 / 12" large="1 / 12">Herman Slyngstadli</GridItem>
    </Wrapper>
  );
}

export default App;
