# Nexus University

## Introduction

This project is a comprehensive academic management system designed to streamline the administration of various academic processes. The system manages students, faculty members, academic departments, courses, and academic semesters. It provides functionalities for creating, updating, and retrieving records, ensuring efficient management and access to essential academic information.

## Features

- User Management: Handle user creation, authentication, and authorization.
- Student Management: Manage student information, including personal details, guardian information, and academic records.
- Faculty Management: Manage faculty member details and their association with academic departments.
- Academic Departments: Organize and manage academic departments and their associated faculties.
- Course Management: Create and manage courses, including prerequisite courses and offered sections.
- Semester Management: Manage academic semesters, including registration and offered courses

## Technology Stack

- React
- TypeScript
- Redux Toolkit
- React Router
- Tailwind CSS

## Installation Guideline

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above) or yarn (version 1.22 or above)

### Installation Steps

1. **Clone the repository**

   ```sh
   https://github.com/yasin-arafat-389/Nexus-University-Client
   ```

   2. **Navigate to the project directory**

   ```sh
   cd Nexus-University-Client

   ```

   3. **Install the dependencies**

   ```sh
   npm install
   ```

### Configuration

1.  **Replace base URL according to your local machine**

```sh
const baseQuery = fetchBaseQuery({
baseUrl: "http://localhost:5000/api",
});
```

## Usage

1.  **Start the development server**

```sh
npm run dev

```
