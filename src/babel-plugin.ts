import observingComponentsPlugin from "babel-plugin-observing-components";

export default function plugin(options: { exclude?: string[] } = {}) {
  return observingComponentsPlugin({
    importPath: "mobx-react-observer",
    ...options,
  });
}
