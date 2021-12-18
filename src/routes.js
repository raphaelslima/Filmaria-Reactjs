import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home/index'
import Filme from './pages/filme/index'
import Favoritos from './pages/favoritos/index'
import NotFound from './pages/notFound'

import Header from './components/Header/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route exact path="/favoritos" component={Favoritos} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
