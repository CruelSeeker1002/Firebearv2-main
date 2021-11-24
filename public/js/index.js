function signUp() {
console.log("In sign up method")
    // var name = $('#signupName').val();
    // var email = $('#signupEmail').val();
    // var password = $('#signupPassword').val();

    var name = document.getElementById("signupName").value
    var email = document.getElementById("signupEmail").value
    var password = document.getElementById("signupPassword").value
    console.log("In sign up method  got name " + name + " password=>"+password + "email=>"+email)

    if (!(name === "") && !(email === "") && !(password === "")) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = firebase.auth().currentUser;

            user.updateProfile({
            displayName: name
            }).then(() => {

                firebase.auth().currentUser.sendEmailVerification()
                .then(() => {

                    Swal.fire({
                        title: 'Success!',
                        text: "Signed up successfully! Check your inbox for the verification email",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Okay'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location = "/"
                        }
                    })
                });
                
            }).catch((error) => {
                Swal.fire(
                    'Error!',
                    error.message,
                    'error'
                )
            });  
        })
        .catch((error) => {
            Swal.fire(
                'Error!',
                error.message,
                'error'
            )
        });

    }

}