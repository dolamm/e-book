import { app, auth, db } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, "books", new Date().getTime().toString());

const addBook = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];
    const fileExt = file.name.split('.').pop();
    if (acceptFile.includes(fileExt)) {
        uploadBytes(imgRef, file).then(() => {
            getDownloadURL(imgRef).then((url) => {
                const data = {
                    title: title,
                    author: author,
                    description: description,
                    image: url
            }
            setDoc(docRef, data).then(() => {
                alert('Book added successfully!');
            }).catch((error) => {
                console.log(error);
            });
        })
        })
    }
    else {
        alert("Please upload a valid image file");
    }
}

export function AddBook() {
    return (
        <div>
            <h1>Add Book</h1>
            <form>
                <label>Book Title</label>
                <input type="text" id="title" />
                <label>Author</label>
                <input type="text" id="author" />
                <label>Description</label>
                <input type="text" id="description" />
                <label>Image</label>
                <input type="file" id="file" />
                <button type="button" onClick={addBook}>Add Book</button>
            </form>
        </div>
    )
}