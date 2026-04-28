/**
 * Generate unique process name with timestamp
 * @returns Process name with current date and time
 */
export function generateProcessName(): string {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  return `Process_${timestamp}`;
}
