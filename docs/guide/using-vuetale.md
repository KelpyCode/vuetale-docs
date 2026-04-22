---
outline: deep
---

# Using Vuetale

## Register Your Module

In your plugin setup function, register the module name used by your UI resources.

```kt
ModuleRegistry.registerModule("myMod", Plugin::class.java)
```

The module name should match your `vuetale-plugin.json` name.

## Open a Page for a Player

```kt
val ui = PlayerUiManager.openPage(
    playerRef,
    ref as Ref<EntityStore>,
    store as Store<EntityStore>,
    "myMod",
    "TestPage"
)
```

Arguments:

- `playerRef`: target player
- `ref` / `store`: entity context
- `"myMod"`: module alias containing compiled UI assets
- `"TestPage"`: page component entry name

## Send Data to Vue with setData

```kt
class Abc(val a: String, val b: Int)

ui.setData("test", "Hello this is a test!")
ui.setData("test2", Abc("abc", 123))
ui.setData("items", listOf("Sword", "Shield"))
```

Vue side can consume these values with `useData`.

## Read Data in Vue

```vue
<script setup lang="ts">
import { useData } from 'vt:@core/composables/useData'

const test = useData<string>('test', 'default value')
const test2 = useData<{ a: string; b: number }>('test2', { a: '', b: 0 })
</script>

<template>
  <Group :anchor="{ Full: 1 }">
    <Label>{{ test }}</Label>
    <Label>{{ test2.a }} / {{ test2.b }}</Label>
  </Group>
</template>
```

## Event Binding Example

```vue
<Common.TextButton @activating="onClick" text="CLICK ME" />
```

Vuetale maps native UI events to Vue handlers.

## Payload Guidance

Use serializable values for reliable transfer:

- primitives
- arrays
- objects
- Kotlin/Java data classes

Advanced callback-style patterns may work depending on bridge/runtime behavior, but treat function payloads as advanced and validate them in your target version.

Next: [Kotlin API](/docs/api/kotlin) and [Vue API](/docs/api/vue).
