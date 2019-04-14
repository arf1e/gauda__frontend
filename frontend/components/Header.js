/*
  Компонент, внутри которого собираются воедино все компоненты, необходимые на каждой странице.
*/

import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <div className="bar">
    <Link href="/">
      <a>Gouda</a>
    </Link>
    <Nav />
  </div>
);

export default Header;
