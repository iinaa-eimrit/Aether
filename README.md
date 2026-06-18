# Aether: Advanced Football Intelligence Platform

Aether is a next-generation football analytics platform designed to centralize and enhance player intelligence, match telemetry, and scouting workflows. Leveraging real-time data ingestion and modern AI pipelines, Aether provides clubs with the competitive edge needed to optimize recruitment and performance tracking.

## 🚀 Core Features

- **Match Intelligence:** Real-time 25fps spatial telemetry tracking for tactical analysis.
- **Biometric Monitoring:** AI-driven injury risk prediction models based on training loads, sleep cycles, and high-intensity sprint volume.
- **Scouting Assistant (RAG):** Natural language semantic search across player scouting reports and profiles using high-dimensional vector embeddings.
- **Executive Overviews:** High-level dashboards summarizing tactical decay, recruitment matches, and critical injury alerts.

## 🏗 Architecture & Tech Stack

Aether is built as a highly scalable monorepo, powered by **Turborepo** and **pnpm**.

### Applications

- `apps/web-client`: The primary Next.js (App Router) user interface. Features dynamic spatial pitch visualizations and real-time WebSocket data subscriptions.
- `apps/api-gateway`: Node.js/Socket.io gateway handling 25fps telemetry streams and routing critical system events.
- `apps/ai-inference`: Python FastAPI microservice managing machine learning workloads, including logistic regression endpoints for injury prediction and semantic search vectorization.

### Shared Packages

- `packages/database`: Centralized Prisma ORM schema and seed configurations mapping to PostgreSQL.
- `packages/ui-kit`: A bespoke React component library establishing Aether's premium aesthetic with tokens, layouts, and data visualization primitives.
- `packages/types`: Shared TypeScript definitions enforcing contract safety across the gateway and web client.

## 🛠 Getting Started

### Prerequisites

- Node.js (v18+)
- Python (3.10+)
- pnpm (v8+)
- PostgreSQL (for Prisma database)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/iinaa-eimrit/Aether.git
   cd Aether
   ```

2. **Install JavaScript/TypeScript dependencies:**
   ```bash
   pnpm install
   ```

3. **Install Python dependencies for the AI Inference engine:**
   ```bash
   cd apps/ai-inference
   pip install -r requirements.txt
   cd ../..
   ```

4. **Initialize the Database:**
   Ensure PostgreSQL is running locally or via Docker.
   ```bash
   cd packages/database
   npx prisma generate
   npx prisma db push
   npx prisma db seed
   cd ../..
   ```

### Running the Application

You can spin up the entire microservices ecosystem with a single Turborepo command from the root directory:

```bash
pnpm dev
```

This will concurrently start:
- The **Web Client** (Next.js) on `http://localhost:3000`
- The **API Gateway** (Socket.io) on `http://localhost:4000`
- The **AI Inference Engine** (FastAPI) on `http://localhost:8000`

## 🛡 License

Proprietary and confidential. Do not distribute without explicit authorization.