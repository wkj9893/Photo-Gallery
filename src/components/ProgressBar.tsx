import useStorage from "../hooks/useStorage";

export default function ProgressBar({ file }) {
    const { progress } = useStorage(file);
    let Progress = progress;
    if (Progress === 100) {
        Progress = 0;
    }
    return (
        <div className="progress-bar" style={{ width: Progress + "%" }}></div>
    );
}
