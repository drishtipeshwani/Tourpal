import { Appwrite } from "appwrite";

var appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Set your endpoint
    .setProject('6167fbb64f1f8') // Your Appwrite Project UID
    ;

export const api = {

    loginWithGoogle: async () => {
        try {
            await appwrite.account.createOAuth2Session('google', 'http://localhost:3000/dashboard/', 'http://localhost:3000/');
        } catch (error) {
            throw error;
        }
    },
}