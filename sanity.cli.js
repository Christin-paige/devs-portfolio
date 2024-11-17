import {defineCliConfig} from 'sanity/cli'
import { config as dotenvConfig } from 'dotenv';

dotenvConfig(); // Loads .env variables into process.env


export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
