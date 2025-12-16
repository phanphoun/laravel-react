# Laravel React Starter Kit

A modern web application starter kit built with Laravel, Inertia.js, and React with TypeScript support.

## 🚀 Features

- **Laravel 12** - The PHP Framework For Web Artisans
- **Inertia.js** - The modern monolith
- **React 18** with TypeScript
- **Vite** for frontend asset bundling
- **Tailwind CSS** for styling
- **Authentication** with Laravel Fortify
- **TypeScript** support
- **ESLint** & **Prettier** for code quality
- **Pest PHP** for testing

## 🛠️ Prerequisites

- PHP 8.2 or higher
- Composer
- Node.js 18+
- MySQL/PostgreSQL/SQLite

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd laravel-app
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure your database**
   Update your `.env` file with your database credentials:
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel
   DB_USERNAME=root
   DB_PASSWORD=
   ```

6. **Run migrations**
   ```bash
   php artisan migrate
   ```

## 🏃 Development

1. **Start the Vite development server**
   ```bash
   npm run dev
   ```

2. **Start the Laravel development server**
   ```bash
   php artisan serve
   ```

3. Visit `http://localhost:8000` in your browser

## 🧪 Testing

Run the tests with:

```bash
# Run PHP tests with Pest
./vendor/bin/pest

# Run TypeScript type checking
npm run types

# Lint your code
npm run lint

# Format your code
npm run format
```

## 🛠️ Built With

- [Laravel](https://laravel.com/) - The PHP Framework
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Inertia.js](https://inertiajs.com/) - The modern monolith
- [TypeScript](https://www.typescriptlang.org/) - TypeScript is JavaScript with syntax for types
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Laravel](https://laravel.com/)
- [Inertia.js](https://inertiajs.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
