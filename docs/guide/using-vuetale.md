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

:::info
`Plugin::class.java` is used by Vuetale to link the module to your plugin's classloader for resource loading. This allows Vuetale to find your compiled UI assets when opening pages. 
It's safe and recommended to keep this value the same.
:::

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
- `"TestPage"`: page component entry name (from `/pages/TestPage.vue`)

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

## Using Common Components
Vuetale provides Hytale's `Common.ui` as Vue components that you can import from the `@core` library, once you've extracted the definitions with `vt extract`.

```ts
import { Common } from 'vt:@core/components/Common'
```

Then you can use these components in your pages with full intellisense support and type safety.
Just write `<Common.` and then use your editor's autocomplete to explore the available components and their props/events.

```vue
<Common.TextButton @activating="clickTest" text="CLICK ME"></Common.TextButton>
```

## Using Core Components
Vuetale exposes some core components that are useful wrappers and helpers for building your own UI. These are also imported from the `@core` library.

```ts
import { Core } from 'vt:@core/components/core';
```

### Elements

#### `Core.TextField`
A wrapper around `Common.TextField` that allows you to pass a `modelValue` and `onUpdate:modelValue` for easier two-way binding.
Essentially you can use `v-model` with `Core.TextField`, which is not possible with `Common.TextField` due to its native event structure.
```vue
<script lang="ts" setup>
    const textFieldInput = ref("Default text");
</script>
<template>
    <Core.TextField v-model="textFieldInput"></Core.TextField>
</template>
```


