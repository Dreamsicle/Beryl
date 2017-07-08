function setAccountInfo(username, password) {
    hashpw(username, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        localStorage.username = hashed
    })
    hashpw(password, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        localStorage.password = hashed
    })
}