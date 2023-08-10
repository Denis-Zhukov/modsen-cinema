import styled from 'styled-components';

export const StyledVolumeBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 25px;

  div{
    display: flex;
    align-items: center;
  }
  
  input[type='range'] {
    overflow: hidden;
    width: 80px;
    -webkit-appearance: none;
    background-color: #fff;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    margin-top: -1px;
  }

  input[type='range']::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    background: #89501a;
    box-shadow: -80px 0 0 80px #D98639;
    cursor: pointer;
  }
`;
