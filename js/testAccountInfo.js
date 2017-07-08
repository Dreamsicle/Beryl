function testAccountInfo(username, password) {

    hashpw(username, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        if (hashed === localStorage.username) {
            var correctName = 'true'
        } else {
            var correctName = 'false'
        }
    })
    hashpw(password, "$2a$08$b0MHMsT3ErLoTRjpjzsCie", function (hashed) {
        if (hashed === localStorage.password) {
            var correctPass = 'true'
        } else {
            var correctPass = 'false'
        }
    })

    if (correctName && correctPass) {
        return true
    } else {
        return false
    }
}