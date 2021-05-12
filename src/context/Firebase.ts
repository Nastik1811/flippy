import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export interface IUserData {
    name?: string
    email: string
    password: string
}

export class Firebase {
    app: firebase.app.App
    constructor(config: {options: Object, name?: string | undefined}) {
        this.app = firebase.initializeApp(config);
    }

    signOut =() => this.app.auth().signOut();
 
    createUser = ({email, password, name}: IUserData) => {
        this.app.auth().createUserWithEmailAndPassword(email, password).then(cred => {
                    if (cred.user){
                        cred.user.updateProfile({
                            displayName: name
                        })
                        this.app.firestore().collection('users').doc(cred.user.uid).set({
                            user_name: name
                        })
                        this.app.firestore()
                            .collection('users')
                            .doc(cred.user.uid)
                            .collection('collections')
                            .doc(cred.user.uid)
                            .set({
                                name: 'Default',
                                created: new Date(),
                                lastEdit: new Date()
                            })
                    }
                })
    }

  login = ({email, password}: IUserData) => this.app.auth().signInWithEmailAndPassword(email, password);
}
