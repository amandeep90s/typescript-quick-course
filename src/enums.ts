enum AuthError {
  WRONG_CREDENTIALS,
  SERVER_FAILURE,
  EXPIRED_SESSION,
  UNEXPECTED_ERROR,
}

console.log(AuthError[AuthError.SERVER_FAILURE]);

enum AuthError2 {
  WRONG_CREDENTIALS = 'Wrong credentials',
  SERVER_FAILURE = 'Server failure',
  EXPIRED_SESSION = 'Expired session',
}

console.log(AuthError2.WRONG_CREDENTIALS);

function handleErrors(error: AuthError) {
  switch (error) {
    case AuthError.EXPIRED_SESSION:
      console.log('Get a new session!');
      break;
    case AuthError.SERVER_FAILURE:
      console.log('Restart the server!');
      break;
    case AuthError.WRONG_CREDENTIALS:
    case AuthError.UNEXPECTED_ERROR:
      console.log('Check your input!');
      break;
    default:
      break;
  }
}

handleErrors(AuthError.SERVER_FAILURE);
