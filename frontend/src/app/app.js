import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LifeCycleHooksDemo from "./components/LifeCycleHooksDemo/LifeCycleHooks";
import OptimizedStateChange from "./components/OptimizedStateChange/OptimizedStateChange";
import NotFound from "./components/404/404";

import "./app.css";

const App = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between mb-5">
        <a class="navbar-brand" href="/">
          Redux Assessment
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/q1">
              Question 1
            </a>
            <a class="nav-item nav-link" href="/q2">
              Question 2
            </a>
            <a class="nav-item nav-link" href="/q3">
              Question 3
            </a>
            <a class="nav-item nav-link" href="/q4">
              Question 4
            </a>
            <a class="nav-item nav-link" href="/q5">
              Question 5
            </a>
          </div>
        </div>
      </nav>
      <div className="container border border-danger bg-light">
        <Router>
          <Suspense fallback={<h1 className="text-danger">Loading....</h1>} />
          <Routes>
            <Route path="/q1" element={<LifeCycleHooksDemo />} />
            <Route path="/q2" element={<OptimizedStateChange />} />
            <Route path="/q1" element={<LifeCycleHooksDemo />} />
            <Route path="/q1" element={<LifeCycleHooksDemo />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
