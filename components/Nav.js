// Компонент для отрисовки меню

import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';

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
        <Link href="/new">
          <a>Add Item</a>
        </Link>
      </li>
      <li>
        <Mutation mutation={TOGGLE_CART_MUTATION}>
          {toggleCart => <a onClick={toggleCart}>Cart</a>}
        </Mutation>
      </li>
    </ul>
  </nav>
);

export default Nav;
