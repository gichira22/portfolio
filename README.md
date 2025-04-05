# Full-Stack Portfolio Website

A modern portfolio website built with Next.js and Django, showcasing professional experience, projects, and technical expertise.

## Features
- Responsive Design
- Dark/Light Mode
- Project Showcase
- Blog/Articles Section
- Contact Form
- SEO Optimized
- Admin Dashboard

## Tech Stack

### Frontend
- Next.js 14
- React
- TailwindCSS
- Framer Motion

### Backend
- Django 4.2
- Django REST Framework
- PostgreSQL

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- PostgreSQL

### Clone the Repository
```bash
git clone git@github.com:gichira22/portfolio.git
cd portfolio
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

4. Run development server:
```bash
npm run dev
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file:
```bash
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
```

5. Run migrations:
```bash
python manage.py migrate
```

6. Create a superuser:
```bash
python manage.py createsuperuser
```

7. Start development server:
```bash
python manage.py runserver
```

## Development
- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8000
- Admin interface: http://localhost:8000/admin

## Contributing
1. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit them:
```bash
git add .
git commit -m "feat: add your feature description"
```

3. Push to your branch:
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request on GitHub
