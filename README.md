# mobx-react-observer

Automatic React observer for Mobx

Will wrap all components in your project (not libraries from node_modules) with the `observer`, making observation completely transparent with Mobx. Other benefits:

- You can now export functions as normal and they show up with the correct name in React Devtools
- When exporting with export `const Comp = observer()` VSCode will read that as two definitions of the component, affecting "jump to definition". Now there is only one definition for every component
- Instead of having multiple ways to observe, just create smaller components to optimize rendering

Read more about automatic observation in [observing-components](https://github.com/christianalfoni/observing-components).

## Install

```sh
npm install mobx-react-observer
```

## SSR

If you do **server side rendering** (SSR), the plugins will still work, but as always you should use `enableStaticRendering` , for example:

**App.tsx**

```ts
import { enableStaticRendering } from "mobx-react-observer";

enableStaticRendering(typeof window === "undefined");
```

## Configure

**Babel plugin example**

```ts
import observerPlugin from "mobx-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          observerPlugin(
            // optional
            { exclude: ["src/ui-components/**"] }
          ),
        ],
      },
    }),
  ],
});
```

**SWC plugin example**

```ts
import observerPlugin from "mobx-react-observer/swc-plugin";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      plugins: [
        observerPlugin(
          // optional
          { exclude: ["src/ui-components/**"] }
        ),
      ],
    }),
  ],
});
```

You can now just consume Mobx from any component.

```tsx
import { observable } from "mobx";

const counter = observable({
  count: 0,
  increase() {
    counter.count++;
  },
});

function Counter() {
  return (
    <button
      onClick={() => {
        counter.increase();
      }}
    >
      Count {counter.count}
    </button>
  );
}
```
