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
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places" />
    {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js" /> */}
    {/* <link
      href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
      rel="stylesheet"
      type="text/css"
    /> */}
  </Head>
);

export default Meta;
