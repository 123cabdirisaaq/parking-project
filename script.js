/* script.js */

/** * 1. SHARED VALIDATION FUNCTIONS 
 */
// Hubinta magaca: Waa inuu xarfo kaliya ahaadaa (No spaces/numbers)
function isValidName(name) {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}

// Hubinta password-ka: Waa inuusan ka yaraan 6 nambar
function isValidPassword(pass) {
    return pass.length >= 6;
}

/** * 2. LOGIN LOGIC (Xog-tirtirid & Validation)
 */
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('logName');
        const passInput = document.getElementById('logPass');
        const feedback = document.getElementById('logFeedback');

        // Validation Check
        if (!isValidName(nameInput.value)) {
            feedback.innerHTML = "Cillad: Magaca waa inuu xarfo kaliya ahaadaa!";
            feedback.style.color = "red";
            return;
        }

        if (!isValidPassword(passInput.value)) {
            feedback.innerHTML = "Cillad: Password-ku waa inuu ugu yaraan 6 noqdaa!";
            feedback.style.color = "red";
            return;
        }

        const storedUser = JSON.parse(localStorage.getItem('userAccount'));

        if (storedUser && storedUser.name === nameInput.value && storedUser.password === passInput.value) {
            alert("Login guul ah!");

            // --- TIRTIRISTA XOGTA (Reset) ---
            loginForm.reset();
            window.location.href = "index.html";
        } else {
            feedback.innerHTML = "Magaca ama Password-ka waa khalad!";
            feedback.style.color = "red";
            // Tirtir password-ka haddii uu khalad dhaco
            passInput.value = "";
        }
    });
}

/** * 3. SIGN UP LOGIC
 */
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('regName');
        const emailInput = document.getElementById('regEmail');
        const passInput = document.getElementById('regPass');
        const feedback = document.getElementById('regFeedback');

        if (!isValidName(nameInput.value)) {
            feedback.innerHTML = "Cillad: Magaca xarfo kaliya ka dhig!";
            feedback.style.color = "red";
            return;
        }

        if (!isValidPassword(passInput.value)) {
            feedback.innerHTML = "Cillad: Password-ku waa inuu 6 ka badnaadaa!";
            feedback.style.color = "red";
            return;
        }

        // Keydi xogta
        const user = { name: nameInput.value, email: emailInput.value, password: passInput.value };
        localStorage.setItem('userAccount', JSON.stringify(user));

        alert("Signup guul ah!");
        signupForm.reset(); // Tirtir xogta ka dib gudbinta
        window.location.href = "parking.html";
    });
}

/** * 4. PARKING LOGIC (Source 7)
 */
function addParkingEntry() {
    const driverInput = document.getElementById('driverName');
    const plateInput = document.getElementById('carPlate');
    const tableBody = document.getElementById('parkingBody');
    const feedback = document.getElementById('parkFeedback');

    if (!isValidName(driverInput.value)) {
        feedback.innerHTML = "Magaca darooga xarfo kaliya!";
        feedback.style.color = "red";
        return;
    }

    // Ku dar xogta Table-ka
    const row = document.createElement('tr');
    row.innerHTML = `<td>${driverInput.value}</td><td>${plateInput.value}</td><td>${new Date().toLocaleTimeString()}</td>`;
    tableBody.appendChild(row);

    // Tirtir xogta ka dib markii lagu daro table-ka
    driverInput.value = "";
    plateInput.value = "";
    feedback.innerHTML = "Baabuurka waa la xereeyay!";
    feedback.style.color = "green";
}

/** * 5. CONTACT LOGIC (Source 14)
 */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const feedback = document.getElementById('conFeedback');

        feedback.innerHTML = "Mahadsanid, fariintaada waa la helay!";
        feedback.style.color = "green";

        // Tirtir foomka (Reset)
        contactForm.reset();

        setTimeout(() => { window.location.href = "index.html"; }, 2000);
    });
}