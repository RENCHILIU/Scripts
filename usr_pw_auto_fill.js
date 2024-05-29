(function() {
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    if (usernameField && passwordField) {
        usernameField.value = 'yourUsername';
        passwordField.value = 'yourPassword';
        // Optional: document.forms[0].submit();
    } else {
        alert('Form fields not found!');
    }
})();





// URL-encode the code to ensure it can be stored in a URL format. 
// Create a new bookmark in your browser and set its URL to the encoded JavaScript code.
