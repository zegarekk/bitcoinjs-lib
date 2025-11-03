/**
 * Returns the current bitcoinjs-lib version as defined in package.json
 * For CI checks or quick debugging in dev environments.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

export function getLibraryVersion(): string {
  try {
    const pkgPath = resolve(__dirname, '../../package.json');
    const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
    return pkg.version || 'unknown';
  } catch {
    return 'unknown';
  }
}

if (require.main === module) {
  console.log(`bitcoinjs-lib version: ${getLibraryVersion()}`);
}
