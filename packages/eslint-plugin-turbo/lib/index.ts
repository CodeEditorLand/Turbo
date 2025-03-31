import type { ESLint } from "eslint";

import { name, version } from "../package.json";
import flatRecommended from "./configs/flat/recommended";
import recommended from "./configs/recommended";
import { RULES } from "./constants";
import noUndeclaredEnvVars from "./rules/no-undeclared-env-vars";

export type { RuleContextWithOptions } from "./rules/no-undeclared-env-vars";
export type { ProjectKey } from "./utils/calculate-inputs";

const plugin = {
	meta: { name, version },
	rules: {
		[RULES.noUndeclaredEnvVars]: noUndeclaredEnvVars,
	},
	configs: {
		recommended,
		"flat/recommended": {
			...flatRecommended,
			plugins: {
				get turbo(): ESLint.Plugin {
					return plugin;
				},
			},
		},
	},
} satisfies ESLint.Plugin;

export const { rules, configs } = plugin;

export default plugin;
