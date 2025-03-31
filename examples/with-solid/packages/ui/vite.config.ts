// vite.config.ts
import path, { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [tailwindcss(), solidPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@Components": path.resolve(__dirname, "src/components"),
			"@Configs": path.resolve(__dirname, "src/config"),
			"@Utils": path.resolve(__dirname, "src/utils"),
		},
	},
});
