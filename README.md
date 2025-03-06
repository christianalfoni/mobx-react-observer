# mobx-react-observer

Automatic React observer for Mobx

```sh
npm install mobx-react-observer
```

Read more about automatic observation in [observing-components](https://github.com/christianalfoni/observing-components).

**Babel plugin example**

```ts
import observerPlugin from "mobx-react-observer/babel-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [observerPlugin()],
      },
    }),
  ],
});
```

**SWC plugine example**

```ts
import observerPlugin from "mobx-react-observer/swc-plugin";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react({
      plugins: [observerPlugin()],
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
