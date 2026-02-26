# Lingshot Support Site

Static support website for the iOS app `Lingshot`.

## Stack
- Vite
- React + TypeScript
- Tailwind CSS
- shadcn-style UI components (`components/ui`)

## Routes
- `/:product` -> Technical support page (example: `/lingshot`)
- `/:product/privacy` -> Privacy policy (example: `/lingshot/privacy`)

## Page Organization
- Product pages are organized as `src/pages/<product>/`.
- For each product folder, provide:
  - `SupportPage.tsx`
  - `PrivacyPage.tsx`
- Example: `src/pages/lingshot/SupportPage.tsx` and `src/pages/lingshot/PrivacyPage.tsx`.

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
- `vite.config.ts` uses root `base: /` so one build can serve multiple product paths.
