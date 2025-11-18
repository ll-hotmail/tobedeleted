# Project Context

## Purpose
Web page assembly project using code snippets from an external library.

## Tech Stack
- HTML5
- CSS3
- JavaScript (ES6+)
- File system operations

## Project Conventions

### Code Style
- Standard HTML5 structure
- BEM-like CSS class naming
- ES6+ JavaScript with clear function naming

### Architecture Patterns
- Component-based snippet organization
- Separation of concerns (HTML/CSS/JS)
- Modular snippet library structure

### Testing Strategy
- Manual browser testing
- Cross-browser compatibility checks

### Git Workflow
- Feature-based development
- Atomic commits per snippet integration

## Domain Context
This project focuses on assembling web pages by combining reusable code snippets from an external library located at `../snippets`. The snippets library contains UI components, animations, and styling patterns that can be combined to create complete web pages.

## Important Constraints
- Snippets are stored in an external directory (`../snippets`)
- Must maintain snippet reusability and independence
- No build tools or bundlers required
- Static file serving only

## External Dependencies
- Snippets library: `../snippets/` directory
- Standard web browser for rendering
