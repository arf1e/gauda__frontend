// Компонент, содержащий всю мета-информацию. По факту - тег <head>

import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <title>Gouda</title>
  </Head>
);

export default Meta;
