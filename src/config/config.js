const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  emailjsServiceID: String(import.meta.env.VITE_EMAILJS_SERVICEID),
  emailjsTemplateID: String(import.meta.env.VITE_EMAILJS_TEMPLATEID),
  emailjsPublicID: String(import.meta.env.VITE_EMAILJS_PUBLICKEY),
};

export default config;
