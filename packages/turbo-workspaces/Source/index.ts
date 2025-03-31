import { getAvailablePackageManagers, type PackageManager } from "@turbo/utils";

import { convertProject } from "./convert";
import { ConvertError, type ConvertErrorType } from "./errors";
import { getWorkspaceDetails } from "./getWorkspaceDetails";
import { getPackageManagerMeta, install } from "./install";
import { Logger } from "./logger";
import { MANAGERS } from "./managers";
import type { InstallArgs, Options, Project, Workspace } from "./types";

async function convert({
	root,
	to,
	options,
}: {
	root: string;
	to: PackageManager;
	options?: Options;
}) {
	const logger = new Logger({ ...options, interactive: false });
	const [project, availablePackageManagers] = await Promise.all([
		getWorkspaceDetails({ root }),
		getAvailablePackageManagers(),
	]);
	await convertProject({
		project,
		convertTo: {
			name: to,
			version: availablePackageManagers[to],
		},
		logger,
		options,
	});
}

export type { Options, InstallArgs, Workspace, Project, ConvertErrorType };
export {
	convert,
	getWorkspaceDetails,
	install,
	MANAGERS,
	getPackageManagerMeta,
	ConvertError,
};
