import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

import styles from '../styles/utils.module.css';

const { headingMd, listItem, lightText } = styles;
export const getStaticProps = () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

type HomePostData = {
  date: string;
  id: string;
  title: string;
};

interface HomeProps {
  allPostsData: HomePostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <section className={ headingMd }>
        <p>Hello, I'm Oleh. I' m a software engineer.</p>
        <p>
          (Tis is a sample website - you'll be building a site like this on{ ' ' }
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        { allPostsData.map(({ id, date, title }) => (
          <li
            key={ id }
            className={ listItem }
          >
            <Link href={ `/posts/${ id }` }>{ title }</Link>
            <br/>
            <small className={ lightText }>
              <Date dateString={ date }/>
            </small>
          </li>
        )) }
      </section>
    </Layout>
  );
}