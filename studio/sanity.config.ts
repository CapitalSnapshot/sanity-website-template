import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { codeInput } from "@sanity/code-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import Logo from "./components/Logo";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "your_project_id";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";

export default defineConfig({
	icon: Logo,
	name: "default",
	title: "Capitalsnapshot",
	projectId,
	dataset,
	plugins: [
		structureTool(),
		visionTool(),
		codeInput(),
		unsplashImageAsset(),
		internationalizedArray({
			languages: [
				{ id: "en", title: "English" },
			],
			defaultLanguages: ["en"],
			fieldTypes: ["string", "text"],
		}),
	],
	schema: {
		types: schemaTypes,
	},
	beta: {
		create: {
			// Required for Create integration
			fallbackStudioOrigin: "capitalsnapshot.sanity.studio",
		},
	},
});
