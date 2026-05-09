---
---

:::warning
Please try updating to the latest version of Vuetale before troubleshooting, as many issues are often resolved in newer releases.
:::

# Troubleshooting

## Registering module fails with `java.lang.NoClassDefFoundError`

```java{3}
protected void setup() {
    // ...
    ModuleRegistry.INSTANCE.registerModule("myMod", Plugin.class); // Errors here with NoClassDefFoundError
    // ...
}
```

This is a common issue when the plugin classloader cannot find the Vuetale classes.
This is 100% a setup issue, not a bug in Vuetale itself and is usually only experienced when running a test server.


### Suggested fix:
There are multiple potential fixes for this, but one is guaranteed to work if you are using Gradle.
We can use the `app.ultradev.hytalegradle` plugin for a great developer experience and it also handles the classpath setup correctly for you.

::: code-group

```kotlin [build.gradle.kts]
plugins {
    kotlin("jvm") version "2.3.0"
    id("com.gradleup.shadow") version "9.3.1" // [!code ++]
    id("app.ultradev.hytalegradle") version "2.0.1" // [!code ++]
}

hytale { // [!code ++]
    allowOp.set(true) // [!code ++]
    patchline.set("release") // or pre-release // [!code ++]
    includeLocalMods.set(false) // [!code ++]
    manifest { // [!code ++]
        version.set(project.version.toString()) // [!code ++]
    } // [!code ++]
} // [!code ++]

```

```kotlin [settings.gradle.kts]
pluginManagement {
    repositories {
        gradlePluginPortal()
        maven("https://mvn.ultradev.app/snapshots") // [!code ++]
    }
}

```

:::

After your adjustments, sync Gradle dependencies. Now in your tasks, you should see `hytale > runServer`.
Prefer using this for development as it ensures the classpath is correct and includes Vuetale. 
Also if it wasn't working for you before, this setup will allow JVM hotswap support which can be a huge boost to development speed.
By default, the dev server folder will be located in `your-project/run`, don't forget to copy `Vuetale.jar` into `run/mods/` before running the server and adjusting paths with the CLI if necessary.

## Command Not Found (`pnpm vt` / `npx vuetale`)

### Symptoms:

- `pnpm vt ...` fails
- `npx vuetale` command not found

### Fix:

1. Run `pnpm install` inside `src/ui`.
2. Use project script wrappers from `package.json`.
3. If needed, install globally: `npm install -g vuetale`.

## Not a Vite Project

### Symptoms:

- CLI reports invalid project or missing Vite config.

### Fix:

1. Run commands from `src/ui`.
2. Confirm `vite.config.ts` exists.

## Extraction Produces Nothing

### Symptoms:

- `vt:extract` finishes but expected modules/types are missing.

### Fix:

1. Recheck `npx vuetale config server-mods` and `resources` path.
2. Ensure `Vuetale.jar` is in the specified mods folder.
3. Rerun extraction after confirming paths.

## UI Not Loading In-Game

### Symptoms:

- Command runs but page does not appear.

### Fix:

1. Confirm module name matches in `vuetale-plugin.json` and `registerModule`.
2. Confirm page name in `openPage` matches built entry name.
3. Confirm build artifacts exist in `src/main/resources/vuetale/<module>/`.

## HMR/Reload Not Updating

### Symptoms:

- Changes compile but runtime still shows stale UI.

### Fix:
1. Ensure `pnpm vt config server-mods` is set to the correct mods folder.
2. Ensure `pnpm vt config resources` has the correct path to `src/main/resources`.
1. Ensure `pnpm vt dev true` has been run. (Rerun when changing config values!)
2. Keep `pnpm watch` running in `src/ui`.
3. Verify server-side dev properties are present and pointing to the intended resources path.

## Resource Path Confusion

Use `src/main/resources` as the standard path for JVM/Gradle projects.

If older notes mention `src/resources`, prefer `src/main/resources` unless your project is intentionally custom.

## Related Pages

- Setup flow: [Getting Started](/docs/getting-started)
- Runtime usage: [Using Vuetale](/docs/guide/using-vuetale)
- CLI details: [Companion CLI](/docs/cli/companion-cli)
