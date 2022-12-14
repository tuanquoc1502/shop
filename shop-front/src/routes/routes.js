import Admin from '../app/admin';
import Home from '../app/pages/home';
import LayoutWrap from '../app/pages/layoutWrap';

export const Routes = [
  {
    path: '/',
    element: (
      <LayoutWrap>
        <Home />
      </LayoutWrap>
    ),
    exact: true,
  },
  {
    path: '/admin/tuanquoc',
    element: <Admin />,
    exact: true,
  },
];
