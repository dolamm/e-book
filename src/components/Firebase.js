import { initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
    projectId: "e-book-d712c",
    apiKey: "AIzaSyAtWIMLfTLSWFhrncWCh2zrayY57RVDjVU",
    storageBucket: 'gs://e-book-d712c.appspot.com',
    databaseURL: "gs://e-book-d712c.appspot.com",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

export const generateKeywords = (displayName) => {
    // liet ke tat cac hoan vi. vd: name = ["David", "Van", "Teo"]
    // => ["David", "Van", "Teo"], ["David", "Teo", "Van"], ["Teo", "David", "Van"],...
    const name = displayName.split(' ').filter((word) => word);
  
    const length = name.length;
    let flagArray = [];
    let result = [];
    let stringArray = [];
  
    /**
     * khoi tao mang flag false
     * dung de danh dau xem gia tri
     * tai vi tri nay da duoc su dung
     * hay chua
     **/
    for (let i = 0; i < length; i++) {
      flagArray[i] = false;
    }
  
    const createKeywords = (name) => {
      const arrName = [];
      let curName = '';
      name.split('').forEach((letter) => {
        curName += letter;
        arrName.push(curName);
      });
      return arrName;
    };
  
    function findPermutation(k) {
      for (let i = 0; i < length; i++) {
        if (!flagArray[i]) {
          flagArray[i] = true;
          result[k] = name[i];
  
          if (k === length - 1) {
            stringArray.push(result.join(' '));
          }
  
          findPermutation(k + 1);
          flagArray[i] = false;
        }
      }
    }
  
    findPermutation(0);
  
    const keywords = stringArray.reduce((acc, cur) => {
      const words = createKeywords(cur);
      return [...acc, ...words];
    }, []);
  
    return keywords;
  };