# data_structures

Small collection of data structure implementations and related utilities.

## Overview

This repository contains implementations and examples of common data structures (linked lists, stacks, queues, trees, graphs, heaps, sorting algorithms, etc.). Each implementation lives in the `src/` directory. This README gives basic usage, structure, and contribution instructions.

## Prerequisites

- Node.js (v16+ recommended) and npm
- TypeScript (devDependency)

## Package / scripts (from package.json)

- dev: `vite` — development server
- build: `tsc && vite build` — compile TypeScript and build
- preview: `vite preview` — preview built app
- test: `vitest` — run unit tests
- start: `node --experimental-strip-types src/App.ts` — run a TS entry if present

Common commands:

```
npm install
npm run dev        # start development server
npm run build      # compile & build
npm run test       # run vitest tests
npm run start      # run src/App.ts (if present)
```

## Project structure

- src/
  - App.ts - Usage examples
  - LinkedList/ - Folder with TypeScript implementation of a singly linked list and tests:
    - LinkedList.ts
      - Node type + LinkedList class
      - Methods: insertAtHead, getByIndex, insertAtIndex, removeHead, removeAtIndex, fromValues, print
    - LinkedList.test.ts — Vitest unit tests covering insertion, removal, indexing cases

## Usage example (TypeScript) in `src/App.ts`

```ts
import { LinkedList } from "./LinkedList/LinkedList.ts";

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
ll.removeAtIndex(2);
ll.print();
```

## Tests

This project uses Vitest for unit tests. Run:

```
npm run test
```

Vitest will pick up tests such as `src/LinkedList/LinkedList.test.ts`.

## Notes

- Code is written in TypeScript (see devDependencies in package.json). Ensure `npm install` before running scripts.
- All dependencies are locked, you can update them but keep them locked.
- The start script references `src/App.ts` — It is a helper file to use the data structures.

## Contributing

- Open issues and PRs. Keep changes small and add tests for behavior changes.
- Create a new folder for for a new data structure
- Create a file inside the folder for the data structure and one file for the tests.
- Follow the repository's TypeScript style and run tests locally.

## License

This project is licensed under the MIT License — see the LICENSE file for details.

## How to update this README from src

1. List files: `ls -R src` (or `dir src /s`)
2. For each folder representing a data structure in src, add a one-line description under "Project structure" for the folder. The files descriptions can be multiline.
3. Save changes.
