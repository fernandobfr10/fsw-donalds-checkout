# FSW Donalds - Fast Food Self-Service System

## About the Project

FSW Donalds is a modern self-service ordering system for a fast-food restaurant, built with Next.js and TypeScript. The application allows customers to browse menus, customize orders, and place them directly through a digital interface, enhancing the ordering experience.

## Key Features

- Digital menu with categories and product details
- Real-time cart management
- Two consumption methods: Dine-in and Takeaway
- Product customization options
- Integration with PostgreSQL database

## Technologies Used

- Frontend:
  - Next.js 15.1.6
  - React 19
  - TypeScript
  - Tailwind CSS
  - Shadcn UI
  - Lucide React (Icons)

- Backend:
  - Prisma ORM
  - PostgreSQL
  - Docker

- Development Tools:
  - Biome (Linting and Formatting)

## Prerequisites

Before you begin, ensure you have installed:

- Node.js
- Docker and Docker Compose
- NPM

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/fsw-donalds.git
cd fsw-donalds
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy the `.env.example` file to `.env`
- Update the variables according to your setup
```bash
cp .env.example .env
```

4. Start the PostgreSQL database using Docker:
```bash
docker compose up -d
```

5. Run Prisma migrations to create the database schema:
```bash
npx prisma migrate dev
```

6. Seed the database with initial data:
```bash
npx prisma db seed
```

7. Start the development server:
```bash
npm run dev
```

8. (Optional) Open Prisma Studio to manage database:
```bash
npx prisma studio
```

The application will be available at `http://localhost:3000`

## Project Structure

The project follows a feature-based structure:

```
src/
├── app/                # Next.js app router pages
├── components/         # Shared components
├── lib/                # Utility functions and configurations
├── helpers/            # Helper functions
└── types/              # TypeScript type definitions
```

## Docker Configuration

The project uses Docker for PostgreSQL database. Configuration can be found in:

```
docker-compose.yaml

name: fsw-donalds
services:
  pg:
    container_name: pg
    image: postgres:latest
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: root
      POSTGRES_DB: fsw-donalds
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UI Components powered by Shadcn UI
- Styling system by Tailwind CSS
- Database management by Prisma
- Icons provided by Lucide React

For more information about the components and their usage, check the source code in the repository.