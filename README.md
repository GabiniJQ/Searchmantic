# 🔍 Semantic & Full-Text Search with Next.js, PostgreSQL & Upstash

This project is a modern web application that combines **full-text search** with **semantic vector search** to deliver rich and relevant search results. It features a unified search bar UI that uses both traditional SQL-based text matching and modern embedding-based similarity using vector indexes.

## 🧠 Features

- 🔡 Full-text search powered by PostgreSQL (hosted on Neon serverless)
- 🧠 Semantic vector search using Upstash Vector
- 🔗 Merged results from both search strategies
- ⚡ Fast, serverless backend using Next.js API routes
- 🎯 Typed and scalable with Drizzle ORM
- 🧪 Live suggestion-ready architecture

## 🛠 Tech Stack

| Technology     | Description                                 |
|----------------|---------------------------------------------|
| **Next.js**    | React framework with SSR & API routes       |
| **PostgreSQL** | Neon serverless with full-text capabilities |
| **Upstash**    | Vector search (cosine similarity)           |
| **Drizzle ORM**| Type-safe SQL generation                    |
| **Vercel**     | Ideal for deployment                        |

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/semantic-postgres-search.git
cd semantic-postgres-search
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables
Create a .env.local file at the root:

PostgreSQL (Neon)  
DATABASE_URL=postgresql://user:password@your-neon-host/dbname

Upstash Vector  
UPSTASH_VECTOR_REST_URL=https://your-upstash-vector-url
UPSTASH_VECTOR_REST_TOKEN=your-upstash-token

### 4. Run the development server
```bash
npm run dev
```

Visit http://localhost:3000 to use the app.

## 🧬 How It Works
🔡 PostgreSQL Full-Text Search  
We use to_tsvector and to_tsquery to match user input against indexed columns in your content table. This gives fast and relevant keyword-based matches.

🧠 Semantic Vector Search with Upstash  
We embed your content using a sentence embedding model (e.g., OpenAI or HuggingFace) and store the vectors in Upstash. On each query:

The query is embedded.

We send the embedding to Upstash for k-NN similarity search.

The most semantically similar items are returned.

🔗 Result Fusion
The system searches related content if literal matches where not found:  

Remove duplicates  

Return a unified result set for display  

This creates a search experience that captures both exact matches and contextually related content.  

## 🧪 Example Query Flow
User searches for: dark jacket

Backend:

Executes to_tsquery('dark jacket') on PostgreSQL  

Embeds the query and sends it to Upstash Vector  

Results are combined, deduplicated, and ranked  

Frontend displays the search results in one list  

## 🧰 Scripts
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
```

Vercel is recommended for deploying the project. PostgreSQL is serverless via Neon and Upstash Vector handles the vector database with low latency.

## 💡 Use Cases
Product search with typo-tolerance and relevance

FAQ or documentation retrieval

Semantic blog or article explorer

Code snippet or recipe search

## 🔒 Security Note
Make sure to never expose your embedding API keys (e.g., OpenAI keys) to the frontend. All embeddings should happen server-side or during ingestion.
