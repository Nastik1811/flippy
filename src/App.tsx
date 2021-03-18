import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppNavigation, { BottomNavigation } from './components/AppNavigation'
import useRoutes from './routes'
import { AppContainer } from './App.style'
import theme from './theme'
import { GlobalStyle } from './theme/GlobalStyles'
import { Cloud } from './theme/Cloud'

function App() {
  const routes = useRoutes()
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Cloud />
          <AppNavigation />
          {routes}
        </AppContainer>
        <BottomNavigation />
      </ThemeProvider>
    </Router>
  )
}

export default App
