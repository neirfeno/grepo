export type EntityMapping<TEntity> = {
  // Base interface for entity mapping
  // This can be extended with specific mapping requirements
  [K in keyof TEntity]?: unknown;
}; 