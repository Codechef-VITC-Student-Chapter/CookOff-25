import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'CookOFF',

  projectId: 'ji8x0pa7',
  dataset: 'cookoff',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
