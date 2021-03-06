export default {
  login: {
    incorrectPassword: {
      message: 'Incorrect Password.',
      statusCode: 400,
    },
    emailNotFound: {
      message: 'Email do not exists.',
      state: 400,
    },
    tooManyFailAttempts: {
      message: 'Too many fail attempts',
      state: 400,
    },
  },
  authorization: {
    notAuthorized: {
      message: 'User is not authorized.',
      statusCode: 401,
    },
  },
  general: {
    badRequest: {
      message: 'One or more parameters are incorrect.',
      statusCode: 400,
    },
    notFound: {
      message: 'Route not found.',
      statusCode: 404,
    },
  },

};
