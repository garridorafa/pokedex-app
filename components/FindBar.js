import styled from 'styled-components';

const StyledBar = styled.input`
  margin: 5px 10px;
  width: 50px;
`

function FindBar(){
  return (
    <div>
      FIND Pokemon by No: 
      <StyledBar></StyledBar>
    </div>
  )
}


export default FindBar;