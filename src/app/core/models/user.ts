interface UserInterface extends firebase.User {
  name: string,
  email: string,
  photoURL: string,
  emailVerified: boolean,
}

export {
  UserInterface
}