const { useEffect, useState, useRef } = React;
const { BrowserRouter: Router, Link, Route, Switch } = ReactRouterDOM;
const { render } = ReactDOM;

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={ Products }/>
          <Route exact path='/product/:id' component={ ProductDetails }/>
        </Switch>
      </main>
    </Router>
  );
}

render(<Provider><App /></Provider>, document.body)
