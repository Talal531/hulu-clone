import Head from "next/head";

import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";

import request from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <MoviesList list={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const url = request[genre]?.url || request.fetchTrending.url;

  const response = await fetch(`https://api.themoviedb.org/3${url}`);
  const results = await response.json();

  return {
    props: {
      results: results.results,
    },
  };
}
