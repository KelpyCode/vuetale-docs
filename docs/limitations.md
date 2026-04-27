# Limitations
Vuetale is a powerful tool for building Hytale UIs with Vue, but there are some limitations and caveats to be aware of.
This list may grow over time but also may get reduced as features and workarounds are implemented.


## Updating `background` property crashes the client
### Problem
Apparently Hytale's UI system does not like it when the `background` property of a component is updated after it's been rendered.
This may or may not cause a crash and a workaround is planned down the line.

### Example

```html
<script lang="ts" setup>
    const someValue = ref(false)

    // someValue changes based on some logic, and is used to toggle the background image of a Group component
</script>
<template>
    ...
    <Group :background="someValue ? 'Img/a.png' : 'Img/b.png'" />
    ...
</template>
```

### Fix:
To fix this, we can declare a key on the component that changes whenever the background changes, forcing Vue to unmount and remount the component instead of updating it in place.

```html
<template>
    <Group :background="someValue ? 'Img/a.png' : 'Img/b.png'" 
    :key="someValue ? 'a' : 'b'" /> <!-- [!code ++] -->
</template>
```