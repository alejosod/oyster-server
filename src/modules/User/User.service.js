class User {

    constructor(props) {
        this.userDb = [
            {
                username: 'testuser1',
                password: 'testpassword1'
            }
        ]
    }

    async validate(userInformation) {
        const {username, password} = userInformation;

        if (!username || !password) return undefined;

        return (
            this.userDb
                .find(
                    dbUser =>
                        dbUser.username === username &&
                        dbUser.password === password
                )
        )
    }
}

export default User
