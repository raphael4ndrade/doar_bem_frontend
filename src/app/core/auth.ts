import { Injectable, NgZone } from '@angular/core'
import { AngularFireAuth } from "@angular/fire/auth"
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { Router } from "@angular/router"

import { UserInterface } from './models/user'
import { auth } from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export default class AuthService {
  userData: UserInterface | null = null

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.onAuthStateChanged((user) => {
      if (user) {
        this.userData = user as UserInterface
        localStorage.setItem('user', JSON.stringify(this.userData))
      } else {
        localStorage.setItem('user', null)
      }
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'))

    return (user !== null && user.emailVerified !== false)
  }

  onSignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => this.router.navigate([ 'necessidades' ]))
        this.setUserData(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  onSignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user)
        this.onSendEmailValidation()
      }).catch(error => {
        window.alert(error.message)
      })
  }

  onSendEmailValidation() {
    return this.userData.sendEmailVerification()
  }

  onForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => window.alert('Password reset email sent, check your inbox...'))
      .catch(error => window.alert(error))
  }

  onSignOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user')
        this.router.navigate([ '' ])
      })
  }


  setUserData(user: firebase.User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)
    const userData: Partial<firebase.User> = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  GoogleAuth() {
    return this.AuthLoginProvider(new auth.GoogleAuthProvider())
  }

  AuthLoginProvider(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => (
          this.router.navigate([ 'necessidades' ])
        ))
        this.setUserData(result.user)
      }).catch(error => window.alert(error))
  }
}