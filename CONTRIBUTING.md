# Contributing to GRepo

Thank you for your interest in contributing to GRepo! This document provides guidelines and information to help you contribute effectively.

## Development Setup

1. **Prerequisites**
   - Node.js (v20 or later)
   - Yarn (v3.6.0 or later)
   - A Google Cloud Platform account for testing

2. **Local Development**
   ```bash
   # Clone the repository
   git clone https://github.com/neirfeno/grepo.git
   cd grepo

   # Install dependencies
   yarn install

   # Build all packages
   yarn build

   # Run tests
   yarn test
   ```

## Project Structure

```
grepo/
├── packages/
│   ├── grepo-core/     # Core utilities and interfaces
│   ├── gcalendar/      # Google Calendar integration
│   └── gsheets/        # Google Sheets integration
├── jest.config.js      # Jest configuration
└── tsconfig.json       # TypeScript configuration
```

## Development Guidelines

### TypeScript

- Write all code in TypeScript
- Maintain strict type safety
- Document public APIs with TSDoc comments
- Follow the existing code style

### Testing

- Write unit tests for all new functionality
- Include integration tests where appropriate
- Ensure all tests pass before submitting PRs
- Maintain test coverage

### Git Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to your branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Pull Request Process

1. Update documentation for any new features or changes
2. Add or update tests as needed
3. Ensure the test suite passes
4. Update the README.md if needed
5. Link any related issues in the PR description

## Code Review Process

- All submissions require review
- Reviewers will provide feedback within 48 hours
- Address review feedback in new commits
- Once approved, maintainers will merge your PR

## Setting Up for Google API Development

1. Create a Google Cloud Project
2. Enable required APIs:
   - Google Calendar API
   - Google Sheets API
3. Create credentials (OAuth 2.0 client ID)
4. Store credentials securely during development

## Questions or Problems?

- Open an issue for bugs or feature requests
- Tag issues appropriately:
  - `bug`: Something isn't working
  - `enhancement`: New feature or request
  - `question`: Further information is requested
  - `documentation`: Documentation improvements

## License

By contributing to GRepo, you agree that your contributions will be licensed under the MIT License. 