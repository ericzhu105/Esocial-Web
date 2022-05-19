import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  font-family: Poppins;
  margin: 0.5rem;
  flex-basis: 45%;
  padding: 1rem;
  text-align: center;
  background: #f7f7f7;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  box-shadow: 18px 17px -16px #e1e1e1;
  border-radius: 20px;
  transition: color 0.15s ease, border-color 0.15s ease;
  min-width: 50px;

  transition: all 0.35s;
  margin-top: 60px;

  &:hover {
    background: #dcdcdc;
    cursor: pointer;
  }

  &:active {
    background: #fc3c3c;
    cursor: pointer;
  }
`;

export const StyledArrows = styled.img`
  margin-left: 970px;
`;

export const H3 = styled.main`
  margin-left: 50px;
  font-size: 30px;
  max-width: 10px;
`;
