import { Client , Databases, Account } from "appwrite";



  let API = {
    sdk: null,
  
    provider: () => {
      if (API.sdk) {
        return API.sdk;
      }
      let client = new Client();
      client
      .setEndpoint("https://ap.kbve.com/v1")
      .setProject("6436a6dc9a6b48db802f"); 
      const account = new Account(client);
      const database = new Databases(client);
  
      API.sdk = { database, account };
      return API.sdk;
    },
  
    createAccount: (email, password, name) => {
      return API.provider().account.create("unique()", email, password, name);
    },
  
    getAccount: () => {
      let account = API.provider().account;
      return account.get();
    },
  
    createSession: (email, password) => {
      return API.provider().account.createEmailSession(email, password);
    },
  
    deleteCurrentSession: () => {
      return API.provider().account.deleteSession("current");
    },
  
    createDocument: (databaseId, collectionId, data, permissions) => {
      return API
        .provider()
        .database.createDocument(databaseId, collectionId, 'unique()', data, permissions);
    },
  
    listDocuments: (databaseId, collectionId) => {
      return API.provider().database.listDocuments(databaseId, collectionId);
    },
  
    updateDocument: (databaseId, collectionId, documentId, data) => {
      return API
        .provider()
        .database.updateDocument(databaseId, collectionId, documentId, data);
    },
  
    deleteDocument: (databaseId, collectionId, documentId) => {
      return API.provider().database.deleteDocument(databaseId, collectionId, documentId);
    },
  };
  
  export default API;