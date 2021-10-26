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

    getCurrentUser: async () => {
        let promise = appwrite.account.get();

        return promise.then(function (response) {
            return response.$id
        }, function (error) {
            console.log(error); // Failure
        });
    },

    postData: async (date, location, content, userId) => {
        let promise = appwrite.database.createDocument('61713e3e5257a', { "date": date, "location": location, "experience": content }, [`user:${userId}`], [`user:${userId}`]);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    },

    getData: async () => {
        let promise = appwrite.database.listDocuments('61713e3e5257a');
        return promise.then(function (response) {
            //response.documents is a array
            return response.documents
        }, function (error) {
            console.log(error); // Failure
        });

    },


    userLogout: async () => {
        let promise = appwrite.account.deleteSession('current');

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });

    },
}
