import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { hot } from 'react-hot-loader'

import '@/assets/scss/App.scss'
import Home from '@/pages/Home'

const theme = {}

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

declare let module: Record<string, unknown>

export default hot(module)(App)
