import tailwindcss from "@tailwindcss/vite";
import { globSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [tailwindcss()],
	build: {
		rolldownOptions: {
			input: [
				resolve(import.meta.dirname, "index.html"),
				...globSync("pages/**/*.html", { cwd: import.meta.dirname }).map((page) =>
					resolve(import.meta.dirname, page),
				),
			],
		},
	},
	server: {
		host: "127.0.0.1",
		// port: 5173 // or your preferred port,
		watch: {
			ignored: ["**/node_modules/**", "**/.git/**"],
		},
	},
});
