import React from "react";
import Header from "./components/Header";
import { StoreProvider } from "./store/Store";
import { Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./views/About";
import ContentEngagement from "./views/ContentEngagement";
import Home from "./views/Home";
import Login from "./views/Login";
import Product from "./views/Product";
import Shop from "./views/Shop";
import Teaser from "./views/Teaser";
import Account from "./views/Account";
import ThankYou from "./views/ThankYou";
import Snackbar from "./components/Snackbar";
import Reducer from "./views/Reducer";
import Components from "./views/Components";
import Redux from "./views/Redux";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
    { path: "*", Component: Root },
  ], {basename: '/apps/react'});

export default function App() {
    return <RouterProvider router={router}/>;
  }

function Root() {
    return (
        // <Router basename={'/apps/react'}>
            <Provider store={store}>
            <StoreProvider>
                <div id="app">
                    <div className="sticky">
                        <Header />
                    </div>
                </div>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop/:id" element={<Product />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route
                            path="/content-engagement"
                            element={<ContentEngagement />}
                        />
                        <Route path="/teaser" element={<Teaser />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/thankyou" element={<ThankYou />} />
                        <Route path="/reducer" element={<Reducer />} />
                        <Route path="/components" element={<Components />} />
                        <Route path="/redux" element={<Redux />} />
                    </Routes>
                </div>
                <Snackbar />
            </StoreProvider>
            </Provider>
        // </Router>
    );
}
