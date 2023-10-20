import { Client, Databases, Storage } from 'appwrite';
import config from '../config/config';

export class ProjectService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getProjects() {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId
      );
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      console.log('Get prrojects func called and executed');
    }
  }

  getFilePreview(mediaid) {
    return this.bucket.getFilePreview(config.appwriteBucketId, mediaid);
  }
}

const projectService = new ProjectService();
export default projectService;
