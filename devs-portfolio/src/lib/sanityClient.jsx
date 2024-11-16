import {createClient} from '@sanity/client'

const sanityClient = createClient({
  projectId: 'y4nk4kbp',
  dataset: 'production',
  useCdn: true,
  apiVerson: '2024-11-10',
})

export default sanityClient
