// Default Imports below
import Head from 'next/head';
import Template from '../src/components/Template';
import CurrentPage from '../src/components/Sidebar/CurrentPage';

export default function TemplatePage() {
    return (
        <>
            <Head>

            </Head>

            <Template CurrentPage={CurrentPage.NONE}>

            </Template>
        </>
    )
}
