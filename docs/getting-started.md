---
outline: deep
---

# Getting Started

## Download Status

CurseForge distribution is still under review.

Download latest JAR from modifold:
https://modifold.com/mod/vuetale    

## Prerequisites

- Java 25 toolchain (for current starter project setup)
- Node.js 20+
- pnpm
- IntelliJ IDEA (Kotlin/Gradle side)
- VS Code (Vue/Vite side)

## 1. Clone the Starter

```bash
git clone git@github.com:KelpyCode/vuetale-starter.git --recurse-submodules my-mod-project
cd my-mod-project
rm -rf .git
rm -rf src/ui/.git
```

## 2. Add Vuetale JAR

Copy `Vuetale-*.jar` to:

- `lib/Vuetale.jar` (rename as needed)

## 3. Open Both IDE Workspaces

- Open `my-mod-project` in IntelliJ
- Open `my-mod-project/src/ui` in VS Code

## 4. Validate Server Side First (IntelliJ)

1. Sync Gradle dependencies.
2. Run the `runServer` task once.
3. After the `run` folder appears, copy `Vuetale.jar` into `run/mods/`.
4. Run server again and test `/vuetale` in chat.

If the test UI appears, runtime wiring is working.

## 5. Configure UI Side (VS Code)

Install dependencies:

```bash
pnpm install
```

If pnpm is missing:

```bash
npm install -g pnpm
```

### CLI Note

`vuetale` CLI commands are available after installation. If you prefer, use the `pnpm vt` script wrappers defined in `package.json` for better compatibility with local dependencies.

```bash
pnpm vt command
```

is the same as

```bash
(npx) vuetale command
```

## 6. Configure Companion CLI

Run the setup commands from `src/ui`:

```bash
pnpm vt config hytale-jar <absolute-path-to-Vuetale.jar>
pnpm vt config resources <absolute-path-to-src/main/resources>
pnpm vt extract # Extracts module/type definitions from the JARs in the mods folder
pnpm vt dev true # Enables dev properties for hot reload support
```

Notes:

- Standard resources path is `src/main/resources`.
- `vt extract` also extracts definitions from Vuetale (@core) itself and other Vuetale mods found in configured locations.

## 7. Build and Watch UI Assets

For active development:

```bash
pnpm watch
```

For one-off builds:

```bash
pnpm build
```

Output is written to:

- `src/main/resources/vuetale/<your-module-name>/`

## Next Steps

- Continue with [Using Vuetale](/docs/guide/using-vuetale)
- Review [Starter Walkthrough](/docs/guide/starter-walkthrough)
- Use [Companion CLI](/docs/cli/companion-cli) for command details
- Check [Troubleshooting](/docs/troubleshooting) if setup fails
