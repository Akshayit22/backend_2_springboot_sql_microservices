const login = (username, password) => {
        const invalide = [null, ""]
        if (invalide.includes(username) || invalide.includes(password)) {
                console.log("username and password can not be null...")
                return null
        }

        if (username != "admin") {
                console.log("Only Admin is allowed...")
                return false
        }

        if (password != "admin") {
                console.log("Login Done...")
                return false
        }
        return true
}
module.exports = login