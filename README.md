# Admin Todos

This project is a task management application built with Next.js.

---

## Development

### Steps to set up the app in development:k

1. **Start the database:**
   ```bash
   docker compose up -d
   ```

2. Create a copy of the `.env.template` file and rename it to `.env`.

3. Replace the environment variables in the `.env` file.

4. Install the project dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Run the following Prisma commands:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

7. Seed the local database by visiting the following URL:
   [http://localhost:3000/api/seed](http://localhost:3000/api/seed)

---

## Prisma Commands

- Initialize Prisma:
  ```bash
  npx prisma init
  ```

- Apply migrations:
  ```bash
  npx prisma migrate dev
  ```

- Generate the Prisma client:
  ```bash
  npx prisma generate
  ```

---

## Production

(Add specific instructions for the production environment here.)

---

## Staging

(Add specific instructions for the staging environment here.)
