
import {useState, useEffect} from 'react';
import { app, auth, db, generateKeywords } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs } from "firebase/firestore";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, "books", new Date().getTime().toString());


const addBook = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;
    const categories = document.querySelectorAll('input[data-name="category"]:checked');
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];
    const fileExt = file.name.split('.').pop();
    let category = [];
    categories.forEach((item) => {
        category.push(item.value);
    })
    category.push('all');
    console.log(category);
    if (acceptFile.includes(fileExt)) {
        uploadBytes(imgRef, file).then(() => {
            getDownloadURL(imgRef).then((url) => {
                const data = {
                    id: fileName,
                    title: title,
                    author: author,
                    category: category,
                    description: description,
                    image: url,
                    price: price,
                    // keywords: generateKeywords(title)
            }
            setDoc(docRef, data).then(() => {
                console.log("Document written with ID: ", docRef.id);
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
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const category = query(collection(db, "categories"));
        const querySnapshot = await getDocs(category);
        let data = [];
        querySnapshot.forEach((doc, index) => {
            data.push(doc.id);
        })
        return data;
    }
    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);
            console.log(data);
        })
    }, [])
    return (
        <div>
            {/* <Navdetail/> */}
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

                        <div class="form-outline mb-3">
                            <input type="text" id="price" class="form-control form-control-lg"
                            placeholder="Price" />
                            <label class="form-label">Price</label>
                        </div>

                        <div class="form-outline mb-3">
                            {
                                categories.map((category) => {
                                    return (
                                        <div class="form-check
                                        form-check-inline">
                                            <span>
                                            <input type="checkbox" id={category} value={category} data-name="category" />
                                                {category}
                                            </span>
                                        </div>
                                    )
                                })
                            }
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