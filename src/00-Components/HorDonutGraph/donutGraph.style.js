import styled from "styled-components";

const StyledDonutGraph = styled.div`
  position: relative;
  .label {
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    &-wrapper {
      svg {
        width: 30px;
        display: inline-block;
        margin-right: 6px;
      }
      h2{margin:0 12px 0 0}
      margin-top: 14px;
      width: 300px;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
    }
  }
  .content {
    margin-right: 12px;
  }
  .hovered {
    left: 30px;
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    z-index: 1000;
    stroke-width: 6px;
  }
  .donut-icon {
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .active {
    border-radius: 30px;
  }
  h2{
    margin-right: 12px;
  }
`;

export default StyledDonutGraph;
