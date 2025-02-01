
  /**
   * Represents changes that occurred in a repository
   * Used to notify listeners about entity modifications
   * 
   * @template T - The entity type that extends BaseEntity
   */
  export interface RepositoryChanges<T> {
    /** Entities that were created in this change set */
    added: T[];
    /** Entities that were updated in this change set */
    modified: T[];
    /** Entities that were deleted in this change set */
    deleted: T[];
  }
  
  /**
   * Maps event names to their corresponding event data types
   * Currently only supports the 'changes' event
   * 
   * @template T - The entity type that extends BaseEntity
   * 
   * @example
   * ```typescript
   * repo.on('changes', (changes: RepositoryChanges<MyEntity>) => {
   *   // Handle changes to entities
   *   changes.added.forEach(entity => console.log('Added:', entity));
   *   changes.modified.forEach(entity => console.log('Modified:', entity));
   *   changes.deleted.forEach(entity => console.log('Deleted:', entity));
   * });
   * ```
   */
  export interface RepositoryEventMap<T> {
    /** Event emitted when entities are added, modified, or deleted */
    changes: RepositoryChanges<T>;
  }
  
  /**
   * Repository interface for storing and managing entities
   * Provides a consistent interface across different storage backends (e.g., Google Calendar, Google Sheets, Memory)
   * 
   * @template T - The entity type that extends BaseEntity
   * 
   * @example
   * ```typescript
   * // Example using Google Calendar repository
   * const calendar = google.calendar('v3');
   * const repo = new CalendarRepository(calendar, 'primary', eventMapping);
   * 
   * // Example using in-memory repository (useful for testing)
   * const repo = new MemoryRepository<MyEntity>();
   * 
   * // Example using Google Sheets repository
   * const sheets = google.sheets('v4');
   * const repo = new SheetsRepository(sheets, 'spreadsheetId', 'Sheet1');
   * 
   * // Listen for changes from any repository implementation
   * repo.on('changes', (changes) => {
   *   console.log('Added:', changes.added);
   *   console.log('Modified:', changes.modified);
   *   console.log('Deleted:', changes.deleted);
   * });
   * 
   * // Use the same interface regardless of the backend
   * const entity = await repo.create({
   *   name: 'Example Entity',
   *   // ... other properties
   * });
   * 
   * const allEntities = await repo.findAll();
   * const oneEntity = await repo.findBy('id', '123');
   * ```
   */
  export interface Repository<T> {
    /**
     * Watch for changes to entities in the repository
     * 
     * @param event - The event type to watch for (currently only 'changes' is supported)
     * @param listener - The callback function to invoke when changes occur
     */
    on<K extends keyof RepositoryEventMap<T>>(event: K, listener: (event: RepositoryEventMap<T>[K]) => void): void;
  
    /**
     * Remove a listener from the repository
     * 
     * @param event - The event type to remove the listener from
     * @param listener - The callback function to remove from the event
     */
    off<K extends keyof RepositoryEventMap<T>>(event: K, listener: (event: RepositoryEventMap<T>[K]) => void): void;
  
    /**
     * Find all entities in the repository
     * 
     * @returns Promise resolving to an array of all entities
     * @example
     * ```typescript
     * const allEntities = await repo.findAll();
     * console.log('Found', allEntities.length, 'entities');
     * ```
     */
    findAll(): Promise<T[]>;
  
    /**
     * Find an entity by a specific property value
     * Most implementations optimize ID lookups
     * 
     * @param prop - The property to search by (e.g., 'id', 'name')
     * @param value - The value to search for
     * @returns Promise resolving to the matching entity or undefined if not found
     * @example
     * ```typescript
     * const entity = await repo.findBy('id', '123');
     * if (entity) {
     *   console.log('Found entity:', entity);
     * }
     * ```
     */
    findBy<K extends keyof T>(prop: K, value: T[K]): Promise<T | undefined>;
  
    /**
     * Create a new entity in the repository
     * Emits a 'changes' event with the created entity
     * 
     * @param entity - The entity to create
     * @returns Promise resolving to the created entity with its ID assigned
     * @example
     * ```typescript
     * const newEntity = await repo.create({
     *   name: 'Example Entity',
     *   // ... other properties
     * });
     * console.log('Created entity with ID:', newEntity.id);
     * ```
     */
    create(entity: T): Promise<T>;
  
    /**
     * Update an existing entity in the repository
     * Emits a 'changes' event with the updated entity
     * 
     * @param entity - The entity to update (must have an ID)
     * @returns Promise resolving to the updated entity
     * @throws Error if the entity has no ID
     * @example
     * ```typescript
     * const entity = await repo.findBy('id', '123');
     * if (entity) {
     *   entity.name = 'Updated Name';
     *   await repo.update(entity);
     * }
     * ```
     */
    update(entity: T): Promise<T>;
  
    /**
     * Remove an entity from the repository
     * Emits a 'changes' event with the removed entity
     * 
     * @param entity - The entity to remove (must have an ID)
     * @throws Error if the entity has no ID
     * @example
     * ```typescript
     * const entity = await repo.findBy('id', '123');
     * if (entity) {
     *   await repo.remove(entity);
     *   console.log('Entity removed');
     * }
     * ```
     */
    remove(entity: T): Promise<void>;
  } 

  export const msg = "steve";