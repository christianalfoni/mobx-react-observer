export default function plugin(options: { exclude?: string[] } = {}) {
  return [
    "swc-plugin-observing-components",
    { import_path: "mobx-react-observer", ...options },
  ];
}
