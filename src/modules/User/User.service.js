class User {
  constructor() {
    this.userDb = [
      {
        email: 'testuser@testdomain.com',
        password: 'testpassword1',
      },
    ];
  }

  async validate(userInformation) {
    const { username, password } = userInformation;

    if (!username || !password) return undefined;

    return (
      this.userDb
        .find(
          (dbUser) => (
            dbUser.email === username
                && dbUser.password === password
          ),
        )
    );
  }
}

export default new User();
