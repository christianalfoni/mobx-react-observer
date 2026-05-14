import { observingComponents } from "vite-plugin-observing-components";

export default function plugin(options: { exclude?: string[] } = {}) {
  return observingComponents({
    importPath: "mobx-react-observer",
    ...options,
  });
}
