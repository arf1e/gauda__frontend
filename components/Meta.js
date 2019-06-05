// Компонент, содержащий всю мета-информацию. По факту - тег <head>

import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Gouda</title>
    <link rel="stylesheet" href="/static/nprogress.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" />
    <script
      src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
      id="snipcart"
      data-api-key="YjY0YzQxNjAtYTk3ZS00YTU1LWJjMjAtZjA4OTgyOWVmMTU5NjM2OTUxNzE4NzA3MTU3NTIz"
    />
    <link
      href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
      rel="stylesheet"
      type="text/css"
    />
  </Head>
);

export default Meta;
