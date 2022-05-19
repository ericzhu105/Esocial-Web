import styled from 'styled-components';

export const StyledMemberList = styled.div`
  background-color: #f7f7f7;
  border-radius: 30px;
  margin: 2rem 0;
  padding: 2rem;

  h6 {
    font-family: 'Circular Std', sans-serif;
    font-size: 21px;
    margin-bottom: 0.5rem;
  }
`;

export const SearchBar = styled.div`
  position: relative;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 0.9rem;
  left: 0.75rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background-color: #f0f0f0;
  border-radius: 10px;
`;
