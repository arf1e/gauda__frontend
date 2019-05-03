// Компонент, содержащий всю мета-информацию. По факту - тег <head>

import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="utf-8" />
    <title>Gouda</title>
  </Head>
);

export default Meta;
