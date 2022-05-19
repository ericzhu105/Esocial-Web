import Sidebar from '../Sidebar/index';
import CurrentPage from '../Sidebar/CurrentPage';
import { Content, Layout } from '@styles/components/Template';

type TemplateProps = {
  children: any;
  CurrentPage: CurrentPage;
};

export default function Template(props: TemplateProps) {
  return (
    <Layout>
      <Sidebar CurrentPage={props.CurrentPage} />
      <Content>{props.children}</Content>
    </Layout>
  );
}
