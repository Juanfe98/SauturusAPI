export default interface GenericRepository<Entity extends object> {
  get?: () => Promise<Entity>;
  getAll?: () => Promise<Array<Entity>>;
  add?: (entity: Entity) => Promise<Entity>;
  update?: (entity: Entity) => Promise<Entity>;
  delete?: (entity: Entity) => Promise<Entity>;
}
