/*
  Компонент, внутри которого собираются воедино все компоненты, необходимые на каждой странице.
*/

import Link from 'next/link';
import Nav from './Nav';
import Cart from './Cart';

const Header = () => (
  <div className="bar">
    <Link href="/">
      <a>Gouda</a>
    </Link>
    <Nav />
    <Cart />
  </div>
);

export default Header;
