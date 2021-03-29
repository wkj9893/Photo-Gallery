import { useState, useEffect } from "react";
import firebase from "../firebase/config";

type ChangeProps = {
    ImageChange: number;
};

export default function ImageGrid({ ImageChange }: ChangeProps) {
    const [images, setImages] = useState<Array<any>>([]);

    useEffect(() => {
        const firestore = firebase.firestore();
        const unsub = firestore
            .collection("images")
            .orderBy("createdAt", "desc")
            .onSnapshot((snapshot) => {
                let documents: Array<any> = [];
                snapshot.forEach((doc) => {
                    documents.push(doc.data());
                });
                setImages(documents);
            });
        return () => unsub();
    }, [ImageChange]);

    return (
        <div className="image-grid">
            {images.map((image) => (
                <div className="image-wrap" key={image.id}>
                    <img src={image.url} alt="uploaded pic" />
                </div>
            ))}
        </div>
    );
}
