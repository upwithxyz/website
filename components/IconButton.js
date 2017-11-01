import styled from 'styled-components';

const IconButton = styled.button`
  background-color: transparent;
  background-image: url('${p => p.src}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  height: ${p => p.height}px;
  width: ${p => p.width}px;

  padding: 0;
  margin: 0;
  appearance: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
`;

export default IconButton;
