export const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const wouldError = (f: unknown): boolean | undefined => f?.toString().includes('Cannot use ');