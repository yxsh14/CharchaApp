const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config

// ye hum isliye bana rahe qki har jagah 'import.meta.env.VITE_APPWRITE_URL' likhne se kabhi import nhi hui to puri app crash ho jayegi isko bachange ke liye hum config file mai checks dalenge 
