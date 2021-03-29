import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UploadForm from "./components/UploadForm";

function App() {
    return (
        <div className="App">
            <Header />
            <UploadForm />
            <Footer />
        </div>
    );
}

export default App;
