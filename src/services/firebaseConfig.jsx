import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, increment } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA07_ikKc5Pu-eQZ41odLY2zEX1_qnzYAw",
    authDomain: "burguer-queen-7cfdf.firebaseapp.com",
    projectId: "burguer-queen-7cfdf",
    storageBucket: "burguer-queen-7cfdf.appspot.com",
    messagingSenderId: "154097725911",
    appId: "1:154097725911:web:d24d6cf617829c17cd5b92",
    measurementId: "G-Z6FKQJLR64",
    experiments: {
        topLevelAwait: true
    }
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


// const signInFirebase = (email, password) => {
//     return new Promise((resolve, reject) => {
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 resolve(user);
//             })
//             .catch((error) => {
//                 const errorMessage = error.message;
//                 reject(errorMessage);
//             });
//     });
// }

async function dataList(collections) {
    const querySnapshot = await getDocs(collection(db, collections));
    const productsArray = [];
    querySnapshot.forEach((doc) => {
        const productData = doc.data();
        productData.id = doc.id;
        productsArray.push(productData);
    });
    return productsArray;
};

async function addData(collections, data) {
    try {
        const docRef = await addDoc(collection(db, collections), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function deletData(collections, document) {
    try {
        await deleteDoc(doc(db, collections, document));
        console.log("Document eliminado ");
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

async function updateData(collections, document, dataToUpdate) {
    try {
        await updateDoc(doc(db, collections, document), dataToUpdate);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

async function updateIncrementData(collections, document, number) {

    try {
        await updateDoc(doc(db, collections, document), {
            stock: increment(number)
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export { auth };