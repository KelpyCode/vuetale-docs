

# Companion CLI

Vuetale Companion CLI helps initialize projects, configure paths, extract types, and enable development reload workflows.

## Command Naming Compatibility

Some guides use `pnpm vt init`, while current command sets often use `vuetale install`.

Use the command names available in your installed CLI version.

## Core Commands

## install / init

Initialize project support files and Vuetale metadata wiring.

```bash
vuetale install
# or
pnpm vt init
```

## config hytale-jar

Set path to Hytale/Vuetale JAR source used for extraction.

```bash
pnpm vt config hytale-jar <absolute-path-to-jar>
```

## config resources

Set project resources output location.

```bash
pnpm vt config resources <absolute-path-to-src/main/resources>
```

## extract

Extract module/type definitions.

```bash
pnpm vt:extract
# or
vuetale extract
```

## dev

Enable/Disable dev/hot-reload support properties.

```bash
pnpm vt dev true
pnpm vt dev false
```

## remove

Remove a registered/extracted module alias.

```bash
vuetale remove @alias
```

## Typical Setup Sequence

Run from `src/ui`:

```bash
pnpm install    
pnpm vt init
pnpm vt config hytale-jar <jar-path>
pnpm vt config resources <resources-path>
pnpm vt:extract
pnpm vt dev true
pnpm watch
```

## Common Problems

- Not a Vite project: run commands in `src/ui` where `vite.config.ts` exists.
- Missing extraction output: verify `hytale-jar` path and rerun extract.
- No runtime updates: ensure `dev true` is enabled and watch/build is running.

See [Troubleshooting](/docs/troubleshooting) for detailed fixes.
