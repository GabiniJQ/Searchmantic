import { FeatureExtractionPipeline, pipeline } from '@xenova/transformers'

// Initialize model (cached after first run)
let extractor: FeatureExtractionPipeline | undefined
export const vectorize = async (text: string): Promise<number[]> => {
  if (!extractor) {
    extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
  }
  const output = await extractor(text, { pooling: 'mean', normalize: true })
  return Array.from(output.data) // Returns 384-dim vector
}
