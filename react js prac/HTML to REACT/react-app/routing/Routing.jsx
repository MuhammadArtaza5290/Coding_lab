import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Resume from "../pages/resume/Resume";
import Blog from "../pages/blog/Blog";
import Contect from "../pages/contect/Contect";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import All from "../pages/portfolio/All";
import WebDesign from "../pages/portfolio/WebDesign";
import Application from "../pages/portfolio/Application";
import WebDevelopment from '../pages/portfolio/WebDevelopment'
function Routing() {
  return (
    <>
      <BrowserRouter>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} >
                <Route path="/portfolio/all" element={<All/>} />
                <Route path="/portfolio/webdesign" element={<WebDesign/>} />
                <Route path="/portfolio/application" element={<Application/>} />
                <Route path="/portfolio/webdevelopment" element={<WebDevelopment/>} />
              </Route>
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />}/>
              <Route path="/contect" element={<Contect />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default Routing;
