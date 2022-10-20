import { Nav } from '../Layout/NavBar';
import "../../css/List.css"
import { app, auth, db, generateKeywords } from '../Firebase';
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
                    image: url,
                    keywords: generateKeywords(title)
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
            <Nav/>
            <section class="vh-100">
                <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://media.istockphoto.com/vectors/male-and-female-characters-are-editing-profile-online-vector-id1300004790?k=20&m=1300004790&s=612x612&w=0&h=ECJkSK1bNjOaC1oWbrCsqtsGCLNKA0MuKa6TPzGGmmA=" class="img-fluid" alt="Sample image"></img>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div className='addBook'>
                        <h1 >Add Book</h1>
                    </div>
                    <form>
                        <div class="form-outline mb-4">
                        <input type="text" id="title" class="form-control form-control-lg"
                            placeholder="Title" />
                        <label class="form-label">Enter your book title!</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input type="text" id="author" class="form-control form-control-lg"
                            placeholder="Name..." />
                            <label class="form-label">What your's name ?</label>
                        </div>

                        <div class="form-outline mb-3">
                            <input type="text" id="description" class="form-control form-control-lg"
                            placeholder="Write something about your book.." />
                            <label class="form-label">Description</label>
                        </div>

                        <input type="file" id="file" />
            
                        <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg" onClick={addBook} >Add Book</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}