import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import ListCardapio from './pages/ListCardapio';
import Cardapio from './pages/Cardapio';
import Count from './pages/Count';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    ListCardapio,
    Cardapio,
    Count
  })
);

export default Routes;