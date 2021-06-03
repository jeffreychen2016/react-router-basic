import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <MainHeader />
      <header></header>
      <main>
        {/* `Switch` will prevent more than one component shows on the page
        example: `/products/:productId` and `/products`
        because of the way the react route evaluate the routes */}
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          {/* // path="/welcome"
            // our-domain.com/welcome */}
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* react route by default evaluates routes from top to bottom
          the way it matches the route is by looking at the path part by part
          meaning that `/products/:productId` and `/products` are both matches
          since `/products` and `/products/:productId` both have  `/products` part
          and because `/products` appear before `/products/:productId` route, 
          the route chooses to render `/products`
          to fix that, we need to add `exact` here, so that react router will render this page
          only when the exact path matches */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* this is dynamic route */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome component
// our-domain.com/products => Products component
// our-domain.com/product-detail/anything => Product Detail
