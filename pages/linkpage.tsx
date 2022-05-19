import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Card, H3, Main, StyledArrows } from '@styles/pages/linkpage';

import Banner from '../src/components/Banner';
import CurrentPage from '../src/components/Sidebar/CurrentPage';
import Template from '../src/components/Template/index';

// Temporarily using images added to /public until we have a image API
export default function LinkPage() {
  return (
    <div>
      <Head>
        <title>School posts</title>
      </Head>

      <Template CurrentPage={CurrentPage.LINK}>
        <Banner
          title="Bishop Allen High School"
          description="671 members"
          backgroundUrl="/school.jpg"
          profileUrl="/profile.jpg"
        />

        <Card>
          <Image src="/BAround.png" alt="Baround" width={100} height={100} />
          <Link href="#">
            <H3>Website</H3>
          </Link>
          <StyledArrows
            src="/arrow-icon.png"
            alt="Arrow"
            width={25}
            height={40}
          />
        </Card>

        <Card>
          <Image src="/Tshirt.png" alt="Tshirt" width={100} height={100} />
          <Link href="#">
            <H3>Merch</H3>
          </Link>
          <StyledArrows
            src="/arrow-icon.png"
            alt="Arrow"
            width={25}
            height={40}
          />
        </Card>

        <Card>
          <Image src="/ClubFair.png" alt="Fair" width={100} height={100} />
          <Link href="#">
            <H3>Meetings</H3>
          </Link>
          <StyledArrows
            src="/arrow-icon.png"
            alt="Arrow"
            width={25}
            height={40}
          />
        </Card>

        <Card>
          <Image src="/TalentShow.png" alt="Dance" width={100} height={100} />
          <Link href="#">
            <H3>Talent</H3>
          </Link>
          <StyledArrows
            src="/arrow-icon.png"
            alt="Arrow"
            width={25}
            height={40}
          />
        </Card>
      </Template>
    </div>
  );
}
