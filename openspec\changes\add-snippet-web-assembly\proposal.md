## Why
Create a simple "Hello World" web page by assembling specific snippets from the external snippets depot, demonstrating targeted snippet usage for web page creation through directory copying.

## What Changes
- Copy CSS directory from `../snippets/css/` to local `css/` directory
- Copy JavaScript directory from `../snippets/js/` to local `js/` directory
- Create a new HTML page with "Hello World" text using the `red-bg-blue-text` class
- Configure the page to show hourglass animation before displaying the "Hello World" text
- Establish basic snippet integration pattern through local directory copying

## Impact
- Affected specs: `targeted-snippet-assembly`
- Affected code: HTML page creation, snippet integration
- Non-breaking: Creates new page without affecting existing functionality