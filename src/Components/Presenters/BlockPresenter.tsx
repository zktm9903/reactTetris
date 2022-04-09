import styled from 'styled-components';

const Block = styled.div`
    width:25px;
    height:25px;
    border-radius:5px;
    border:2px solid black; 
    box-sizing:border-box;
`

const GreenBlock = styled(Block)`
    background-color:Green;
`

export { GreenBlock };