import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`
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
export async function getSingleItem(ID){

    const docRef = doc(db, "products", ID);
    const docSnap = await getDoc(docRef);

    const data = docSnap.data()
    data.id = docSnap.id;

    return data;
}



//Filtrar por categoria
export async function getItemsByCategory(category){
  const productsRef = collection(db, "products")

  const q = query(productsRef, where ("categoria", "==", category))

  const productsSnap = await getDocs(q)
  const documents = productsSnap.docs
    
  const docsData = documents.map((doc) => { 
    const data = doc.data()
    data.id = doc.id;

    return data
  });
   
  return docsData;

}

//Crear orden de compra
export async function createOrder(order){
  const collectionOrdersRef = collection(db, "orders")
  const respuesta = await addDoc(collectionOrdersRef, order)
  return respuesta.id
}