import styled from 'styled-components';
import colorPalette from '../../07-Styles/colorPalette';

const StyledHorMultiSelect = styled.div`
  width: ${(props) => props.selectWidth};
  position: relative;
  margin-bottom: 12px;
  .hor-label{
    &_non-selected{
      transition: all 0.3s ease;
      margin:3px 8px;
     opacity: ${(props) => (props.hasSomethingSelected ? '1' : '0')}
    }
  }
  .drop-down-icon{
    position: absolute;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    right:12px;
    background-color: ${colorPalette.whiteColor};
  }  
  .disabled{
    pointer-events:none;
    cursor:not-allowed !important;
    color: grey !important;
  }
  .menu-trigger{
    width:100%;
    background-color: ${colorPalette.whiteColor};
    border: 1px solid${colorPalette.greyColors[200]};
    border-radius: 3px;
    padding: 3px 0px;
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden; 
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    box-sizing : content-box;
    padding-bottom: 4px;
  }
  .hor-list{
    z-index:10;
  }
  ul.hor-list{
       transition: all 0.5s ease;
        display: block;
        position:absolute;
        top: 60px;
        border-bottom: 3px;
        box-shadow: ${(props) => (props.dropdownOpened ? '0 2px 5px 1px rgb(64 60 67 / 16%)' : 'none')};
        width:${(props) => props.selectWidth};
        > li{
          padding: 6px 10px;
          border-bottom: 1px solid #ccc;
          background-color: ${colorPalette.whiteColor};
          display: flex;
          align-items: center;
          &:hover{
            background: #ccc;
            color: ${colorPalette.whiteColor};
            cursor: pointer;
          }
       }
  }
  .hor-list-item{
    > p{
      display: flex;
      align-items: center;
    }
  }
`;

export default StyledHorMultiSelect;
