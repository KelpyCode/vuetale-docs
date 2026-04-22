---
outline: deep
---

# Vue API (Core)

This page covers the primary Vue-side patterns for Vuetale pages/components.

## useData Composable

Read backend-provided data reactively.

```vue
<script setup lang="ts">
import { useData } from 'vt:@core/composables/useData'

const playerName = useData<string>('playerName', 'Unknown')
const health = useData<number>('health', 0)
</script>
```

Behavior:

- Reads by key.
- Uses fallback value when key is missing.
- Updates when backend changes the same key with `ui.setData`.

## Event Binding

Bind native UI events in templates:

```vue
<Common.TextButton @activating="onActivate" text="Confirm" />
<TextField @value-changed="onValueChanged" />
```

## Component Imports

Common import patterns:

```ts
import { Common } from 'vt:@core/components/Common'
import { Core } from 'vt:@core/components/core'
```

Use `Common` for high-level wrappers and `Core` for native-oriented building blocks.

## Page Organization

Recommended structure in `src/ui/lib`:

- `pages/` for entry pages opened from JVM side
- `components/` for reusable UI blocks
- `composables/` for shared reactive helpers

## Minimal Page Example

```vue
<script setup lang="ts">
import { useData } from 'vt:@core/composables/useData'

const title = useData<string>('title', 'Default Title')
</script>

<template>
  <Group :anchor="{ Full: 1 }">
    <Label>{{ title }}</Label>
  </Group>
</template>
```

## Related Pages

- Backend producer side: [Kotlin API](/docs/api/kotlin)
- First implementation flow: [Using Vuetale](/docs/guide/using-vuetale)
- CLI setup and type extraction: [Companion CLI](/docs/cli/companion-cli)
