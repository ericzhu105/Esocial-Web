import Head from 'next/head';

import Template from '../src/components/Template/index';
import CurrentPage from '../src/components/Sidebar/CurrentPage';

import CalendarBox from '../src/components/CalendarBox/index';

import Notifications from '../src/components/Notifications/index';

// Temporarily using images added to /public until we have a image API
export default function Calendar() {
  return (
    <div>
      <Head>
        <title>Calendar</title>
      </Head>

      <Template CurrentPage={CurrentPage.CALENDAR}>
        <CalendarBox />
        <Notifications />
      </Template>
    </div>
  );
}
