export interface Article {
  id: string
  type: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  pillarName: string
  tags?: Tag[]
  blocks?: Blocks
}

interface Tag {
  id: string
  type: string
  webTitle: string
  webUrl: string
}

interface Blocks {
  requestedBodyBlocks: BodyBlock
}

interface BodyBlock {
  'body:latest': Block[]
}

interface Block {
  id: string
  bodyTextSummary: string
}

export interface ArticlesResponse {
  results: Article[]
}

export interface ArticleResponse {
  content: Article
}
