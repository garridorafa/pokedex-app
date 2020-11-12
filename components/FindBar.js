import styled from 'styled-components';

const StyledBar = styled.input`
  margin: 5px 10px;
  width: 50px;
`

function FindBar(props){
  return (
    <div>
      FIND Pokemon by No: 
      <StyledBar onChange={(e) => props.onChange(e.target.value)}></StyledBar>
    </div>
  )
}

export default FindBar;