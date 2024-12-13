import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/about': Home,
  '/detail/:id': Detail,
};

export default routes;
