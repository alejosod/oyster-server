import bcrypt from 'bcrypt';

class User {
  constructor() {
    this.userDb = [
      {
        username: 'test-user',
        password: bcrypt.hashSync('testPassword', parseInt(process.env.BCRYPT_ROUNDS, 10)),
      },
    ];
  }

  async findByName(username) {
    console.log('here user');
    if (!username) return undefined;

    return (
      this.userDb
        .find((dbUser) => dbUser.username === username)
    );
  }
}

export default new User();
