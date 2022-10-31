import styled from 'styled-components';
import makeSpace from '../../06-Utils/spacing-function/index.ts';

const StyledCount = styled.div`
    display:flex;
    align-items:center;
    height:30px;
    width:86px;
    margin-top: ${makeSpace('small')};
    margin-bottom: ${makeSpace('small')};
    p{
        text-align:center;
    }
    button{
        :hover{
            cursor:pointer;
        }
    }
`;

export default StyledCount;
