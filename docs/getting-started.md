---
outline: deep
---

# Getting Started

## Download
You can always get the very latest version of Vuetale from [GitHub](https://github.com/KelpyCode/Vuetale/releases).
Currently working on deployment to all the major mod hosting platforms.

* [CurseForge](https://www.curseforge.com/hytale/mods/vuetale)
* [Modifold](https://modifold.com/mod/vuetale)

## Prerequisites

- Java 25 toolchain (for current starter project setup)
- Node.js 20+
- pnpm
- IntelliJ IDEA (Kotlin/Gradle side)
- VS Code (Vue/Vite side)

## 1. Clone the Starter

This starter is using Gradle with Kotlin, but the structure should be adaptable to Maven or other JVM build tools.

```bash
git clone git@github.com:KelpyCode/vuetale-starter.git --recurse-submodules my-mod-project
cd my-mod-project
rm -rf .git
rm -rf src/ui/.git
```

## 2. Include Vuetale in your project

::: details Option 1: Download manually and include in project

Download and copy `Vuetale-*.jar` to `lib/Vuetale.jar` (rename as needed) and add the following to your `build.gradle.kts` dependencies:

```kotlin
dependencies {
    compileOnly(files("lib/Vuetale.jar")) // [!code ++]
}
```

:::
::: details Option 2: Use cursemaven to include automatically

Add cursemaven repository to your `build.gradle.kts`:

```kotlin
repositories {
    maven("https://cursemaven.com") // [!code ++]
}
```

[Go to the Curseforge page and click on the latest file](https://www.curseforge.com/hytale/mods/vuetale/files/all?page=1&pageSize=20&showAlphaFiles=hide).
In your address bar, you'll see something like `https://www.curseforge.com/hytale/mods/vuetale/files/8044274`.
The number at the end is the file ID. You will fill in the XYZ in the dependency snippet below with that file ID to pull the JAR directly from CurseForge.


Add the following to your `build.gradle.kts` dependencies:

```kotlin
dependencies {
    compileOnly("curse.maven:vuetale-1521120:XYZ") // Replace XYZ with the file id // [!code ++]
}
```

:::

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
pnpm vt config hytale-jar <absolute-path-to-Vuetale.jar> # This is not required yet, but will be in the future for JVM to d.ts extraction
pnpm vt config server-mods <absolute-path-to-run/mods> # This is required for d.ts extraction and hot reload
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
