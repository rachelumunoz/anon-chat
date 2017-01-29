import React from 'react'
import {Route, IndexRoute } from 'react-router'
import {App} from './components/layout'
import {Zone} from './components/presentational'
import ZonesIndex from './components/containers/ZonesIndex'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ZonesIndex}/>
    <Route path="zone/:id" component={Zone}/>
  </Route>
)


