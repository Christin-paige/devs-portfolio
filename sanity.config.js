import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import dotenv from 'dotenv';


if (typeof window === 'undefined') {
  dotenv.config()
}

export default defineConfig({
  name: 'default',
  title: 'devs-portfolio',

  projectId: 'y4nk4kbp',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
