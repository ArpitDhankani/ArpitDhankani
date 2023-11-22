import "./App.css";

import React, { useState } from "react";

import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 15;
  let apiKey = import.meta.env.VITE_NEWS_API;

  const [progress, setprogress] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <LoadingBar
          color="red"
          progress={progress}
          onLoaderFinished={() => setprogress(0)}
        />
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="general"
                key={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="business"
                key={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="entertainment"
                key={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="health"
                key={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="sports"
                key={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="science"
                key={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setprogress={setprogress}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="technology"
                key={"technology"}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
