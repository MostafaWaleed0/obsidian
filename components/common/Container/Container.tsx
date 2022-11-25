import Head from 'next/head';
import { Footer, Header } from 'components/common';

export default function Container(props) {
  const { children, ...customMeta } = props;

  const meta = {
    title: '',
    description: ``,
    image: '',
    type: '',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
      </Head>
      <Header />
      <main tabIndex={-1}>{children}</main>
      <Footer />
    </>
  );
}
