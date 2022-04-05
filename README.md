## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build version
- `start`: starts a simple server with the build production code
- `generate`: generate component files
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `test:watch`: runs jest in watch mode
- `export`: deploy to static bucket

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Folder Strucutre

The following aspects were used to create the folder structure

```
↳ @types                            # extension types (not related to application types)
  ...
↳ src                               # sources
  ↳ components                      # shared components used in the pages templates
    ↳ complex                       # mixin of data display and input components
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ __test__                  # tests
          ↳ {CName}.test.tsx        # code test
    ↳ simple                        # very small components/reusable
      ↳ {ComponentName}             # component name with CamelCase
        ↳ index.tsx                 # element
        ↳ styles.ts                 # styles
        ↳ __test__                  # tests
          ↳ {CName}.test.tsx        # code test
  ↳ constants                       # application constants
    {filename}.tsx                  # some file with constants
    ...
  ↳ hooks                           # application hooks
    ↳ use{HookName}                 # application hook
      ↳ index.ts                    # hook function
      ↳ test.ts                     # hook tests
  ↳ layout                          # layout wrapper for all pages (header, etc.)
    ...
  ↳ page_templates                  # routes screens
    ↳ private                       # private screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
    ↳ public                        # public screens
      ↳ ComponentTemplate           # route main component (don't create subfolder)
        ↳ components                # components used only in a specific route (see components)
        index.tsx                   # element
        styles.ts                   # styles
  ↳ providers                       # application providers
    ↳ {ProviderName}Provider        # Provider component
      index.tsx                     # element
  ↳ styles                          # global styles and themes
    global.ts                       # global styles
    theme                           # global themes
    ...
  ↳ utils                           # helper functions
    {filename}.tsx                  # some file with helper functions
  ↳ service                         # API services
    index.tsx                       # Axios instance
    {filename}.tsx                  # some file with API connection and calls
    ...
```
