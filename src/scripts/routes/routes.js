import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Tim from '../views/pages/tim';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/resto/:id': Detail,
  '/tim': Tim,
};

export default routes;
