---
outline: deep
---

# Troubleshooting

## Command Not Found (`pnpm vt` / `vuetale`)

Symptoms:

- `pnpm vt ...` fails
- `vuetale` command not found

Fix:

1. Run `pnpm install` inside `src/ui`.
2. Use project script wrappers from `package.json`.
3. If needed, install globally: `npm install -g vuetale`.

## Not a Vite Project

Symptoms:

- CLI reports invalid project or missing Vite config.

Fix:

1. Run commands from `src/ui`.
2. Confirm `vite.config.ts` exists.

## Extraction Produces Nothing

Symptoms:

- `vt:extract` finishes but expected modules/types are missing.

Fix:

1. Recheck `config hytale-jar` absolute path.
2. Ensure JAR is readable and valid.
3. Rerun extraction command.

## UI Not Loading In-Game

Symptoms:

- Command runs but page does not appear.

Fix:

1. Confirm module name matches in `vuetale-plugin.json` and `registerModule`.
2. Confirm page name in `openPage` matches built entry name.
3. Confirm build artifacts exist in `src/main/resources/vuetale/<module>/`.

## HMR/Reload Not Updating

Symptoms:

- Changes compile but runtime still shows stale UI.

Fix:

1. Ensure `pnpm vt dev true` has been run.
2. Keep `pnpm watch` running in `src/ui`.
3. Verify server-side dev properties are present and pointing to the intended resources path.

## Resource Path Confusion

Use `src/main/resources` as the standard path for JVM/Gradle projects.

If older notes mention `src/resources`, prefer `src/main/resources` unless your project is intentionally custom.

## Related Pages

- Setup flow: [Getting Started](/docs/getting-started)
- Runtime usage: [Using Vuetale](/docs/guide/using-vuetale)
- CLI details: [Companion CLI](/docs/cli/companion-cli)
