import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  background: ${p => p.theme.colours.white};
  box-shadow: 0 10px 70px rgba(0, 0, 0, 0.25);
  padding: ${p => p.theme.sizes.small} ${p => p.theme.sizes.medium};
  color: ${p => p.theme.colours.nightBlue};
`;

export default Card;
