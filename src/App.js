import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { BaseProvider } from "./common/context/BaseContext";
import Header from "./components/organisms/Header/Header";
import AdView from "./components/pages/AdView/AdView";
import IndexView from "./components/pages/IndexView/IndexView";
import ReadView from "./components/pages/ReadView/ReadView";
const Layout = () => {
  return (
    <BaseProvider>
      <Header />
      <Outlet />
    </BaseProvider>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexView />} />
          <Route path="readView/:productId" element={<ReadView />} />
          <Route path="adView/:id" element={<AdView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
