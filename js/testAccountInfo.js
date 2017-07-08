function testAccountInfo(username, password) {

    var correctName
    var correctPass

    hashpw(username, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        if (hashed === localStorage.getItem("username")) {
            correctName = true
        } else {
            correctName = false
        }
    })
    hashpw(password, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        if (hashed === localStorage.getItem("password")) {
            correctPass = true
        } else {
            correctPass = false
        }
    })

    if (correctName && correctPass) {
        return true
    } else {
        return false
    }
}