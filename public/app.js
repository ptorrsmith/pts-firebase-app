// Vanilla JS  - ES4 / ES5 ?  hence the semi-colons ;

// console.log("Now LOGGING: ", firebase)

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();


signInBtn.onclick = () => auth.signInWithPopup(provider);  // return a promise

signOutBtn.onclick = () => auth.signOut();  // return a promise
// debugger


auth.onAuthStateChanged(user => {
	if (user) {
		// signed-in
		whenSignedIn.hidden = false;
		whenSignedOut.hidden = true;
		userDetails.innerHTML = `<h3>Kia ora ${user.displayName} :-)</h3> <p>User Id: ${user.uid}</p>`;
	} else {
		// not-signed-in
		whenSignedIn.hidden = true;
		whenSignedOut.hidden = false;
		userDetails.innerHTML = '';
	}

});