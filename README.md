# Lingshot Support Site

Static support website for the iOS app `Lingshot`.

## Stack
- Vite
- React + TypeScript
- Tailwind CSS
- shadcn-style UI components (`components/ui`)

## Routes
- `/lingshot/` -> Technical support page
- `/lingshot/privacy` -> Privacy policy

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- `vite.config.ts` uses `base: /lingshot/` by default.
- You can override base path with env:
  - `VITE_BASE_PATH=/another-project/`
