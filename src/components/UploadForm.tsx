import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

export default function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const types = ["image/png", "image/jpeg"];

    function changeHandler(event: any) {
        let selected = event.target.files[0];
        if (selected && types.includes(selected.type)) {
            setError("");
            setFile(selected);
        } else {
            setError("Please select an image file");
        }
    }
    return (
        <form className="UploadForm">
            <input type="file" onChange={changeHandler} />

            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <ProgressBar file={file} />}
            </div>
        </form>
    );
}
