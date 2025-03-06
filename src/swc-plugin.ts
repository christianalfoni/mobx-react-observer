export default function plugin() {
  return [
    "swc-plugin-observing-components",
    { import_path: "mobx-react-observer" },
  ];
}
