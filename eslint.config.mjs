import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // ✅ Disable error for unescaped quotes (e.g., ")
    },
    ignores: [
      "**/*.stories.tsx", 
      "**/*.stories.ts", 
      "**/*.stories.js", 
      "**/*.stories.jsx",
      "src/stories/**"
    ], // ✅ Ignore Storybook files
  },
];

export default eslintConfig;
