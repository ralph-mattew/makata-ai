export * from './types';
export { xylo } from './xylo';
export { unawain } from './unawain';

import { xylo } from './xylo';
import { unawain } from './unawain';
import type { Project } from './types';

/** All projects with real, shipped content. Order matters for any future listing UI. */
export const projects: Project[] = [xylo, unawain];
