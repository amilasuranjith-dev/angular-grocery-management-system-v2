# Angular Grocery Management System V2

A full-featured grocery store management system built with Angular 21. Manage customers, inventory items, and orders through a responsive web interface backed by a RESTful API.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Building](#building)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)
- [Additional Resources](#additional-resources)

## Features

- **Customer Management** — Create, view, update, and delete customer records (name, date of birth, salary, address, and more).
- **Inventory Management** — Full CRUD operations for grocery items including description, pack size, unit price, and quantity on hand.
- **Order Management** — Order processing module (in development).
- **Authentication** — Login page for user access control.
- **Responsive UI** — Built with Tailwind CSS and Flowbite components for a modern, mobile-friendly experience.
- **User Notifications** — SweetAlert2 confirmation dialogs and toast messages for all actions.

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [Angular](https://angular.dev/) | 21.1.0 | Frontend framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Programming language |
| [Tailwind CSS](https://tailwindcss.com/) | 4.1 | Utility-first CSS framework |
| [Flowbite](https://flowbite.com/) | 4.0 | UI component library |
| [SweetAlert2](https://sweetalert2.github.io/) | 11.26 | Alert and confirmation dialogs |
| [RxJS](https://rxjs.dev/) | 7.8 | Reactive programming |
| [Vitest](https://vitest.dev/) | 4.0 | Unit test runner |

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli) v21+
- A running instance of the backend API server on `http://localhost:8080` (see [API Endpoints](#api-endpoints))

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/amilasuranjith-dev/angular-grocery-management-system-v2.git
   cd angular-grocery-management-system-v2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any source files.

## Project Structure

```
src/
├── app/
│   ├── page/
│   │   ├── login/                 # Login page component
│   │   ├── dashboard/             # Main dashboard layout
│   │   │   ├── home/              # Dashboard home view
│   │   │   ├── customer/          # Customer management (CRUD)
│   │   │   ├── item/              # Item/product management (CRUD)
│   │   │   └── order/             # Order management
│   │   └── model/
│   │       └── type.ts            # TypeScript interfaces (CustomerModel, ItemModel)
│   ├── app.ts                     # Root component
│   ├── app.routes.ts              # Route configuration
│   ├── app.config.ts              # Application configuration
│   ├── app.html                   # Root template
│   └── app.css                    # Root styles
├── index.html                     # HTML entry point
├── main.ts                        # Application bootstrap
└── styles.css                     # Global styles
```

## API Endpoints

The frontend communicates with a backend REST API at `http://localhost:8080`. Below are the expected endpoints:

### Customers

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/customer/getAll` | Retrieve all customers |
| `POST` | `/customer/add` | Create a new customer |
| `PUT` | `/customer/update` | Update an existing customer |
| `DELETE` | `/customer/delete-by-id/:id` | Delete a customer by ID |

### Items

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/item/get-all` | Retrieve all items |
| `POST` | `/item/add` | Create a new item |
| `PUT` | `/item/update` | Update an existing item |
| `DELETE` | `/item/delete-by-id/:id` | Delete an item by ID |

## Building

To build the project for production:

```bash
ng build
```

Build artifacts are stored in the `dist/` directory. The production build is optimized for performance and speed.

## Running Tests

### Unit Tests

Execute unit tests with [Vitest](https://vitest.dev/):

```bash
ng test
```

### End-to-End Tests

```bash
ng e2e
```

> **Note:** Angular CLI does not include an end-to-end testing framework by default. Choose one that suits your needs, such as [Cypress](https://www.cypress.io/) or [Playwright](https://playwright.dev/).

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please make sure your code follows the existing style and passes all tests before submitting.

## License

This project is currently unlicensed. See the repository owner for licensing details.

## Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Flowbite Documentation](https://flowbite.com/docs/getting-started/introduction/)
- [SweetAlert2 Documentation](https://sweetalert2.github.io/)
