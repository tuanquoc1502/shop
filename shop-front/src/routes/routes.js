import App from '../App';
import Product from '../containers/products'
import Detail from '../containers/detail'

export const Routes = [
  {
    path: '/',
    element: <Product />,
    exact: true,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
    exact: true,
  },
];
