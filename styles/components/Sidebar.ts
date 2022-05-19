import styled from 'styled-components';

export const MainSidebar = styled.div`
  height: 100vh;
  width: 7.5vw;
  background: #f7f7f7;
  border-right: 1px solid #ededed;
  text-align: center;
  left: 0;
  position: fixed;
  padding: 0;
`;

export const SidebarLogo = styled.img`
  width: 4vw;
  padding-top: 1.7vw;
  display: table-inline;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;
  transition: all 0.35s;
  filter: drop-shadow(2px 2px 3px #ff3e3e);

  &:hover {
    cursor: pointer;
    filter: drop-shadow(2px 2px 5px #FF3E3E);
  }
`;

export const SidebarLink = styled.div`
  display: flex;
  transition: all 0.35s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
`;

export const SidebarItem = styled.img`
  width: 2vw;
  display: table-inline;
  margin-left: 2.75vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

export const SidebarItemWrapper = styled.div`
  margin-right: auto;
`;

export const SidebarItemSelector = styled.div`
  background: #ff3e3e;
  height: 12vh;
  width: 0.4vw;
  margin: auto;
  margin-right: 0;
  position: sticky;
  border-radius: 8px 0 0 8px;
`;
