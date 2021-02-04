import Title from "../src/components/Title";
import UploadForm from "../src/components/UploadForm";
import ImageGrid from "../src/components/ImageGrid";
import Footer from "../src/components/Footer";

function App() {
    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid />
            <Footer />
        </div>
    );
}

export default App;
