import { useState, useEffect } from "react";
import firebase from "../firebase/config";

export default function ImageGrid() {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const firestore = firebase.firestore();
        const unsub = firestore
            .collection("images")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                let documents = [];
                snapshot.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
                console.log(docs);
            });
        return () => unsub();
    });

    return (
        <div className="image-grid">
            {docs &&
                docs.map((doc) => (
                    <div className="image-wrap" key={doc.id}>
                        <img src={doc.url} alt="uploaded pic" />
                    </div>
                ))}
        </div>
    );
}
