---
outline: deep
---

# Kotlin API (Core)

This page covers the primary Kotlin/JVM-side surfaces used by mod developers.

## Module Registration

```kt
ModuleRegistry.registerModule("myMod", Plugin::class.java)
```

Purpose:

- Registers a module namespace used when loading compiled UI pages/components.

## Open a Page

```kt
val ui = PlayerUiManager.openPage(
    playerRef,
    ref as Ref<EntityStore>,
    store as Store<EntityStore>,
    "myMod",
    "TestPage"
)
```

Use when:

- Showing a full page UI for a player.

## Push Data to UI

```kt
ui.setData("title", "Inventory")
ui.setData("count", 42)
ui.setData("items", listOf("Sword", "Potion"))
```

Patterns:

- Set initial payload immediately after `openPage`.
- Update values whenever backend state changes.

## Command Handler Pattern

Typical flow in player commands:

1. Resolve player/entity references.
2. Open page through `PlayerUiManager`.
3. Push initial state through `setData`.
4. Let Vue-side bindings react.

## Naming Rules

Keep these consistent:

- module name in `vuetale-plugin.json`
- module name in `registerModule(...)`
- module argument in `openPage(...)`
- page entry name in `openPage(...)`

## Related Pages

- Vue-side consumption: [Vue API](/docs/api/vue)
- End-to-end flow: [Starter Walkthrough](/docs/guide/starter-walkthrough)
- Setup context: [Getting Started](/docs/getting-started)
