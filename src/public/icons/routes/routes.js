import Detail from '../../../scripts/views/pages/detail';
import Like from '../../../scripts/views/pages/like';
import NowPlaying from '../../../scripts/views/pages/now-playing';
import Upcoming from '../../../scripts/views/pages/upcoming';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
