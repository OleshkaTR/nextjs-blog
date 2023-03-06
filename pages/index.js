import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

import { headingMd, listItem, lightText } from '../styles/utils.module.css';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
  )
}