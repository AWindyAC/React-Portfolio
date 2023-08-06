import React, { useState} from "react";
import Nav from './components/Nav';
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Page from './components/Page';
//Maybe I could have a conditional here to dictate which COMPONENT is displayed and handle the on click event
//So make each component first. Navbar, Home page, About Me, Portfolio, and Contact.
//THEN make the conditional HERE to make the page function

/*  */
function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="">
      <Header/>
      <Home/>
      <div>
      {/* Footer */}
      <Footer/>
    </div>
    <main>
      <Page currentPage={currentPage}></Page>
    </main>
    </div>

  );
}

export default App;
