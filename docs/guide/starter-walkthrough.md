---
outline: deep
---

# Starter Walkthrough

This walkthrough maps the starter project flow from command to rendered UI.

## 1. Plugin Setup

In plugin setup, register your module and commands.

```kt
ModuleRegistry.registerModule("myMod", Plugin::class.java)
commandRegistry.registerCommand(OpenMyUiCommand())
```

## 2. Command Opens a Vue Page

Typical command handler:

```kt
val ui = PlayerUiManager.openPage(
  playerRef,
  ref as Ref<EntityStore>,
  store as Store<EntityStore>,
  "myMod",
  "TestPage"
)

ui.setData("test", "Hello this is a test!")
```

When `/openmyui` (or equivalent) runs, Vuetale mounts `TestPage` for that player.

## 3. Vue Page Consumes Data

In `src/ui/lib/pages/TestPage.vue`, use `useData` for reactive bridge values.

```vue
<script setup lang="ts">
import { useData } from 'vt:@core/composables/useData'

const test = useData<string>('test', 'default value')
</script>

<template>
  <Group :anchor="{ Full: 1 }">
    <Label>{{ test }}</Label>
  </Group>
</template>
```

## 4. Build Pipeline

From `src/ui`:

```bash
pnpm watch
```

Artifacts are emitted to:

- `src/main/resources/vuetale/myMod/`

Then JVM side loads these assets through normal server/mod runtime.

## 5. Iteration Loop

1. Edit Vue page or component.
2. Watch/build updates resources.
3. Rerun/reload server UI flow.
4. Test command path and events.

Continue with [Using Vuetale](/docs/guide/using-vuetale) and [Troubleshooting](/docs/troubleshooting).
