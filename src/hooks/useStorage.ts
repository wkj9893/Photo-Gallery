import { useState, useEffect } from "react";
import firebase from "../firebase/config";

export default function useStorage(file: File) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const imageRef = storageRef.child(file.name);
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("images");
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;
        imageRef.put(file).on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (error) => {
                setError(error.toString());
            },
            async () => {
                const url = await imageRef.getDownloadURL();
                setUrl(url);
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
            }
        );
    }, [file]);

    return { progress, url, error };
}
