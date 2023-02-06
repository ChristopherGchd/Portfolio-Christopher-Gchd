const AbstractManager = require("./AbstractManager");

class TechnologyManager extends AbstractManager {
  constructor() {
    super({ table: "project_has_technology" });
  }

  insert(techId, projectId) {
    return this.connection.query(
      `insert into ${this.table} (project_id, technology_id) values (?,?)`,
      [projectId, techId]
    );
  }
}

module.exports = TechnologyManager;
