import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, addDoc} from 'firebase/firestore/lite';

async function checkIfAlreadySupports(db, supporter){
    const q = query(collection(db, "soutiens"), where("email", "==", supporter.email));

    const querySnapshot = await getDocs(q);

    if(querySnapshot.size > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

async function addSupporter(db, supporter){
    const docRef = await addDoc(collection(db, "soutiens"), supporter);
    return true;
}

window.addEventListener('DOMContentLoaded', () =>{
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
    let form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let button = document.querySelector('button');
        button.setAttribute('disabled', 'disabled');

        let firstNameInput = document.querySelector('#firstname');
        let lastNameInput = document.querySelector('#lastname');
        let emailInput = document.querySelector('#email');
        let roleInput = document.querySelector('#role');

        console.log(firstNameInput);

        let supporter =  {
            firstname : firstNameInput.value,
            lastname: lastNameInput.value,
            email : emailInput.value,
            role : roleInput.value,
        };

        checkIfAlreadySupports(db, supporter).then(ret => {
            if(ret === true)
            {
                button.setAttribute('disabled', 'false');
                window.location.href = "liste-des-soutiens.html";
            }
            else
            {
                addSupporter(db, supporter).then(ret => {
                    button.setAttribute('disabled', 'false');
                    window.location.href = "liste-des-soutiens.html";
                })
            }
        });


    })
})