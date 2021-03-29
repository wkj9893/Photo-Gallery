import React, { useState } from "react";
import Swal from "sweetalert2";
import firebase from "../firebase/config";
import ImageGrid from "../components/ImageGrid";

export default function UploadForm() {
    const [change, setChange] = useState(0);
    const isImage = (file: File) => file["type"].includes("image");

    async function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        if (!event.target.files || event.target.files?.length === 0) {
            return;
        }
        const file = event.target.files[0];
        console.log(file);
        if (!isImage(file)) {
            Swal.fire("warn", "Please choose an image file", "warning");
            return;
        }
        try {
            await submitFile(file);
        } catch (error) {
            Swal.fire("Something went wrong", `${error.message}`, "error");
            return;
        }

        setChange((change) => change + 1);
        Swal.fire("Good job!", "上传图片成功", "success");
    }

    async function submitFile(file: File): Promise<void> {
        const storage = firebase.storage();
        const storageRef = storage.ref();
        const imageRef = storageRef.child(file.name);
        const firestore = firebase.firestore();
        const collectionRef = firestore.collection("images");
        const timestamp = firebase.firestore.FieldValue.serverTimestamp;

        imageRef.put(file).on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            null,
            (error) => {
                return Promise.reject(error);
            },
            async () => {
                const url = await imageRef.getDownloadURL();
                const createdAt = timestamp();
                collectionRef.add({ url, createdAt });
                return Promise.resolve();
            }
        );
    }
    return (
        <>
            <form
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: "36px",
                }}
            >
                <label
                    htmlFor="file"
                    style={{
                        fontSize: "24px",
                        marginBottom: "20px",
                    }}
                >
                    Choose image to upload
                </label>
                <input
                    type="file"
                    style={{ fontSize: "16px" }}
                    id="file"
                    accept="image/*"
                    onChange={changeHandler}
                />
            </form>
            <ImageGrid ImageChange={change} />
        </>
    );
}
