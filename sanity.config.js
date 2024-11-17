import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { config as dotenvConfig } from 'dotenv';

dotenvConfig(); // Loads .env variables into process.env


export default defineConfig({
  name: 'default',
  title: 'devs-portfolio',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
