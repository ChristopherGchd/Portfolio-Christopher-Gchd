const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll(id) {
    const query = `SELECT project.title, project.description, project.picture_url, project.github_url, project.site_url, technology.name FROM ${this.table} as project JOIN project_has_technology pht ON project.id = pht.project_id JOIN technology as technology ON pht.technology_id = technology.id`;
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
