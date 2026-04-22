---
outline: deep
---

# Project Structure

Vuetale development is split across JVM mod code and a Vite/Vue UI project.
For now, this focuses on Gradle and Vite project layouts. Maven has not been tested but should be very possible with similar structure.

## Typical Layout

```text
my-mod-project/
  build.gradle.kts
  settings.gradle.kts
  lib/
    Vuetale.jar
  src/main/
    kotlin/
      ... Plugin.kt, commands, runtime logic
    resources/
      vuetale/
        myMod/
          ... compiled ui .js/.d.ts/.json
  src/ui/
    package.json
    vite.config.ts
    lib/
      vuetale-plugin.json
      pages/
      components/
      composables/
```

## Runtime Data Flow

1. Vue component updates in UI project.
2. Vite outputs bundled artifacts into `src/main/resources/vuetale/<module>/`.
3. Hytale server loads resources from mod JAR/runtime folder.
4. Vuetale bridge maps Vue renderer operations to native Hytale UI elements.
5. Kotlin/Java side can push data to the page through `ui.setData(...)`.

## Module Name Consistency

Keep module names aligned across:

- `src/ui/lib/vuetale-plugin.json`
- Kotlin module registration in plugin setup
- Page open calls (`PlayerUiManager.openPage(..., "module", "Page")`)

## Hot Reload Flow

- `pnpm watch` keeps UI artifacts updated.
- `pnpm vt dev true` enables dev properties for runtime reload behavior.
- Server runtime can detect resource changes and refresh mounted app state.

Continue with [Starter Walkthrough](/docs/guide/starter-walkthrough) for a concrete end-to-end example.
