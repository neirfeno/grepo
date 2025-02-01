
/**
 * Primitive types that can be mapped between entities and resources
 */
export type PrimitiveType = 'string' | 'number' | 'boolean' | 'date';

/**
 * Defines how a property should be mapped between an entity and a resource
 */
export interface PropertyMapping {
  /** The name of the property in the resource */
  to: string;
  /** The type of conversion to apply */
  type: PrimitiveType;
  /** Whether the property is optional */
  optional?: boolean;
}

/**
 * Maps entity properties to their corresponding resource properties
 * Used to define how entities are converted to and from resource formats
 * 
 * @template TEntity - The entity type that extends BaseEntity
 * 
 * @example
 * ```typescript
 * interface TaskEntity extends BaseEntity {
 *   id?: string;
 *   title: string;
 *   dueDate: Date;
 *   isCompleted: boolean;
 * }
 * 
 * const taskMapping: EntityMapping<TaskEntity> = {
 *   id: { to: 'id', type: 'string', optional: true },
 *   title: { to: 'summary', type: 'string' },
 *   dueDate: { to: 'due', type: 'date' },
 *   isCompleted: { to: 'status', type: 'boolean' },
 * };
 * ```
 */
export type EntityMapping<TEntity extends object> = {
  [K in keyof TEntity]: PropertyMapping;
}; 