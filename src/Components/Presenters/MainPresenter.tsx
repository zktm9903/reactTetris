import styled from 'styled-components';

const BackPresenter = styled.div`
    width:100vw;
    height:100vh;
    background-color:rgb(34, 40, 49);
`;

const PlayGroundPresenter = styled.div`
    width:250px;
    height:500px;
    background-color:rgb(57, 62, 70);
    
    position: absolute; 
    top: 60px; 
    left: 30px;

    display:flex;
    flex-wrap: wrap;
`

export { BackPresenter, PlayGroundPresenter };