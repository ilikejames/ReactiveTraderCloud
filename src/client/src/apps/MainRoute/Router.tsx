import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AnalyticsRoute, BlotterRoute, SpotRoute, ShellRoute, TileRoute } from './routes'
import { usePlatform } from 'rt-components'

const ShellSwitchRoute: FC = () => {
  const { PlatformRoute } = usePlatform()
  return (
    <PlatformRoute>
      <ShellRoute />
    </PlatformRoute>
  )
}

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ShellSwitchRoute} />
      <Route path="/analytics" component={AnalyticsRoute} />
      <Route path="/blotter" component={BlotterRoute} />
      <Route path="/tiles" component={TileRoute} />
      <Route path="/spot/:symbol" component={SpotRoute} />
    </Switch>
  </BrowserRouter>
)
