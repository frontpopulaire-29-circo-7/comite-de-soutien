// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, limit, getDocs} from 'firebase/firestore/lite';



async function getSupporters(db) {
    const supportersRef = query(collection(db, "soutiens"));
    const docSnapshot = await getDocs(supportersRef);
    const docList = docSnapshot.docs.map(doc => doc.data());
    return docList;
}

window.addEventListener("DOMContentLoaded", () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD1T695o8J8vps5e8YeTYSGVhQYIi1LJNY",
        authDomain: "comite-de-soutien.firebaseapp.com",
        projectId: "comite-de-soutien",
        storageBucket: "comite-de-soutien.appspot.com",
        messagingSenderId: "642182812817",
        appId: "1:642182812817:web:eff866d732bb08ba481b30"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    getSupporters(db).then(data => {
        data.forEach((supporter => {
            let tbody = document.querySelector("tbody");
            let tr = document.createElement("tr");

            let tdFirstName = document.createElement("td");
            tdFirstName.innerText = supporter.firstname;

            let tdLastName = document.createElement("td");
            tdLastName.innerText = supporter.lastname;

            let tdRole = document.createElement("td");
            tdRole.innerText = supporter.role;

            tr.appendChild(tdFirstName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdRole);

            tbody.appendChild(tr);
        }));
    });

});