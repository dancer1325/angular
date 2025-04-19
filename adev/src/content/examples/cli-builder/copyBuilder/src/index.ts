// CLI builder-skeleton
import {BuilderContext, BuilderOutput, createBuilder} from '@angular-devkit/architect';
import {JsonObject} from '@angular-devkit/core';

import {promises as fs} from 'fs';

// CLI builder-skeleton  -- input validation --
interface Options extends JsonObject {
  source: string;
  destination: string;
}

// CLI builder-skeleton
export default createBuilder(copyFileBuilder);

// CLI builder-skeleton
async function copyFileBuilder(options: Options, context: BuilderContext): Promise<BuilderOutput> {
  // add CLI builder's logic
  context.reportStatus(`Copying ${options.source} to ${options.destination}.`);

  // handling-output
  try {
    await fs.copyFile(options.source, options.destination);
  } catch (err) {
    context.logger.error('Failed to copy file.');
    return {
      success: false,
      error: (err as Error).message,
    };
  }

  context.reportStatus('Done.');
  return {success: true};
}
