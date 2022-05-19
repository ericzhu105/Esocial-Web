import Link from 'next/link';
import {
  MainSidebar,
  SidebarItem,
  SidebarItemSelector,
  SidebarItemWrapper,
  SidebarLink,
  SidebarLogo,
} from '@styles/components/Sidebar';

import CurrentPage from './CurrentPage';

type SidebarProps = {
  CurrentPage: CurrentPage;
};

export default function Sidebar(props: SidebarProps) {
  return (
    <MainSidebar>
      <Link href="/">
        <div>
          <div>
            <SidebarLogo src="/ESocialLogo.svg" />
          </div>
        </div>
      </Link>

      <Link href="/">
        <SidebarLink>
          <SidebarItemWrapper>
            <SidebarItem src="/Category.svg" />
          </SidebarItemWrapper>
          {props.CurrentPage == CurrentPage.HOME ? (
            <SidebarItemSelector />
          ) : null}
        </SidebarLink>
      </Link>

      <Link href="/linkpage">
        <SidebarLink>
          <SidebarItemWrapper>
            <SidebarItem src="/Link.svg" />
          </SidebarItemWrapper>
          {props.CurrentPage == CurrentPage.LINK ? (
            <SidebarItemSelector />
          ) : null}
        </SidebarLink>
      </Link>

      <Link href="/calendar">
        <SidebarLink>
          <SidebarItemWrapper>
            <SidebarItem src="/Calendar.svg" />
          </SidebarItemWrapper>
          {props.CurrentPage == CurrentPage.CALENDAR ? (
            <SidebarItemSelector />
          ) : null}
        </SidebarLink>
      </Link>
    </MainSidebar>
  );
}
