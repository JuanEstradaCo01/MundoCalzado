import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//Traer elementos
export async function getItems(){

  //Crear coleccion
  const productsRef = collection(db, "products")

  //Traer coleccion
  const productsSnap = await getDocs(productsRef)
  const documents = productsSnap.docs
    
  const docsData = documents.map((doc) => { 
    //(Usando spread) --> return {id: doc.id, ...doc.data()}
    const data = doc.data()
    data.id = doc.id;
    return data;

   });
  return docsData;

}



//Traer un solo elemento
export async function getSingleItem(idURL){

    const docRef = doc(db, "products", idURL);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data()
    data.id = docSnap.id;

    return data;
}



//Filtrar por categoria
export async function getItemsByCategory(categoryURL){
  const productsRef = collection(db, "products")
  const q = query(productsRef, where ("categoria", "==", categoryURL))

  const productsSnap = await getDocs(q)
  const documents = productsSnap.docs
    
  const docsData = documents.map((doc) => { 
    return {id: doc.id, ...doc.data()}

   });
  return docsData;

}


export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders")
  const respuesta = await addDoc(collectionOrdersRef, order)
  return respuesta.id
}