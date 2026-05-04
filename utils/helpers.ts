/**
 * Generate a unique name with a timestamp suffix
 * @returns Unique name in format `Item_YYYY-MM-DDTHH-mm-ss`
 */
export function generateName(): string {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  return `Item_${timestamp}`;
}
