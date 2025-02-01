# GRepo (Google Repository Pattern)

GRepo is a lightweight TypeScript library that simplifies interactions with Google Workspace applications through a consistent repository pattern. It provides a clean, intuitive interface for working with Google Calendar, Google Sheets, and other Google Workspace products.

## Why GRepo?

While Google provides official APIs and SDKs for their Workspace products, integrating with them often requires:
- Complex authentication handling
- Verbose API calls
- Different patterns for each product
- Significant boilerplate code

GRepo solves these challenges by:
- Providing a unified repository pattern across Google Workspace products
- Simplifying common CRUD operations
- Handling authentication complexities
- Offering type-safe interfaces

## Features

- 🗓️ **Google Calendar Integration** (`@neirfeno/gcalendar`)
  - Manage events, calendars, and attendees through a simple repository interface
  - Handle recurring events, notifications, and calendar permissions

- 📊 **Google Sheets Integration** (`@neirfeno/gsheets`)
  - Treat sheets as type-safe data repositories
  - Perform bulk operations efficiently
  - Map sheet data to your domain entities

- 🛠️ **Core Utilities** (`@neirfeno/grepo-core`)
  - Common repository patterns and interfaces
  - Type-safe entity mapping
  - Shared authentication handling

## Installation

```bash
# Install the core package
yarn add @neirfeno/grepo-core

# Install specific integrations as needed
yarn add @neirfeno/gcalendar  # For Google Calendar
yarn add @neirfeno/gsheets    # For Google Sheets
```

## Quick Start

```typescript
// Example: Using Google Sheets as a repository
import { SheetRepository } from '@neirfeno/gsheets';

interface User {
  id: string;
  name: string;
  email: string;
}

// Create a type-safe repository for your sheet
const userRepo = new SheetRepository<User>({
  spreadsheetId: 'your-sheet-id',
  mapping: {
    id: 'A',
    name: 'B',
    email: 'C'
  }
});

// Use familiar repository patterns
const users = await userRepo.findAll();
await userRepo.create({ id: '1', name: 'John', email: 'john@example.com' });
```

## Project Status

This project is currently in early development. The API is subject to change as we gather feedback and refine the implementation.

## Contributing

Contributions are welcome! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT License - see the [LICENSE](LICENSE) file for details 