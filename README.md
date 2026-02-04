# GLEIF API CLI

A command-line tool for searching the [GLEIF (Global Legal Entity Identifier Foundation)](https://www.gleif.org/) API to look up Legal Entity Identifier (LEI) records.

## Overview

This CLI allows you to search for legal entities by name and retrieve their LEI records. Results are displayed in formatted tables. When multiple entities match your search, a prompt will have you select one to view detailed information.

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev <legal-name>
```

### Example

```bash
npm run dev "Apple Inc"
```

This will:
1. Search the GLEIF API for entities matching "Apple Inc"
2. Display results in a table showing the legal name, LEI, and status
3. Prompt you to select an entity by number for more details

### Sample Output

```
Search results for: Apple Inc

┌───┬─────────────────────┬──────────────────────┬────────┐
│ # │ Legal Name          │ LEI                  │ Status │
├───┼─────────────────────┼──────────────────────┼────────┤
│ 1 │ Apple Inc.          │ HWUPKR0MPOU8FGXBT394 │ ACTIVE │
│ 2 │ Apple Inc           │ ...                  │ ...    │
└───┴─────────────────────┴──────────────────────┴────────┘

Enter the number of the entity in the list corresponding to the record you want to view:
```

## Data Returned

Each LEI record includes:
- **LEI** - The 20-character Legal Entity Identifier
- **Legal Name** - The official registered name of the entity
- **Status** - The entity's current status (e.g., ACTIVE, INACTIVE)
