import type { PackageManager } from "@turbo/utils";

import type { ManagerHandler } from "../types";
import { bun } from "./bun";
import { npm } from "./npm";
import { pnpm } from "./pnpm";
import { yarn } from "./yarn";

export const MANAGERS: Record<PackageManager, ManagerHandler> = {
	pnpm,
	yarn,
	npm,
	bun,
};
