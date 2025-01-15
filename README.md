# 3D Portfolio Project

A modern React application for creating portfolio project.

## Technologies Used

- **React** - Frontend library for building user interfaces
- **TypeScript** - Static type checking for JavaScript
- **Tailwind** - Component library for building accessible React applications
- **React Router** - Routing library for React applications
- **React Three Fiber** - Library for rendering 3D graphics in reactjs project

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.x or higher)
- npm (version 8.x or higher) or yarn (version 1.22.x or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-directory]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Running the Application

### Development Mode

To start the development server:
```bash
npm start
# or
yarn start
```
The application will open in your default browser at `http://localhost:3000`

### Production Build

To create a production build:
```bash
npm run build
# or
yarn build
```

The build files will be created in the `build` directory.

To serve the production build locally:
```bash
npm install -g serve
serve -s build
```

## Project Structure

```
src/
├── components/           # Reusable components
├── pages/                # Web pages components
│   ├── common/           # Common UI components
│   ├── icons/            # SVG icons and icon components
│   └── GlobalDashboard/  # Dashboard-specific components
├── utils/
│   ├── api/             # API service functions
│   ├── context/         # React context providers
│   └── hooks/           # Custom React hooks
├── pages/               # Page components
└── App.tsx             # Root component
```

## Key Features

- 🔔 Real-time notifications
- 📊 Campaign management
- 🏢 Brand registration
- 📱 Responsive design
- 🔐 User authentication
- 🌐 Multi-tab interface

## Development Guidelines

### Coding Standards

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use proper component naming conventions
- Implement error boundaries where necessary
- Write clear and concise comments

### State Management

- Use React Query for server state
- Use Context API for global application state
- Use local state for component-specific state

### Styling

- Use Chakra UI components for consistent styling
- Follow the design system variables
- Use responsive design principles
- Maintain accessibility standards

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App
- `npm run lint` - Runs ESLint
- `npm run format` - Formats code with Prettier

## Contributing

1. Create a new branch from `main`
2. Make your changes
3. Submit a pull request
4. Wait for review and approval

## Troubleshooting

Common issues and their solutions:

1. **Build Errors**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall: `rm -rf node_modules && npm install`

2. **API Connection Issues**
   - Verify environment variables
   - Check API endpoint availability
   - Confirm CORS settings

## Support

For support, please:
1. Check existing documentation
2. Search closed issues
3. Open a new issue if needed

## License

[Your License Here]