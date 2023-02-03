const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll(id) {
    const query = `SELECT proj.*, tech.* FROM ${this.table} proj JOIN project_has_technology pht ON proj.id = pht.project_id JOIN technologies tech ON pht.technology_id = tech.id`;
    return this.connection.query(query, [id]);
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [project.title]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [project.title, project.id]
    );
  }
}

module.exports = ProjectsManager;
