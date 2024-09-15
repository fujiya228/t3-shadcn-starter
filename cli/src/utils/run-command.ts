import { execSync } from 'child_process';

export const runCommand = (command: string, cwd?: string) => {
  try {
    execSync(command, { cwd: cwd || process.cwd() });
  } catch (error) {
    if (error instanceof Error) {
      console.error(`\nFailed to execute: ${command}\n\n${error.message}\n`);
    }
    process.exit(1);
  }
}
