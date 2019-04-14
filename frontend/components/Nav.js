// Компонент для отрисовки меню

import Link from 'next/link';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/catalog">
          <a>Catalog</a>
        </Link>
      </li>
      <li>
        <Link href="/me">
          <a>Me</a>
        </Link>
      </li>
      <li>
        <Link href="/me">
          <a>Cart</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
