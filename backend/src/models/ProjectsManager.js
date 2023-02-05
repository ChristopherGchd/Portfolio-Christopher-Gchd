const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll(id) {
    const query = `SELECT project.id, project.title, project.description, project.picture_url, project.github_url, project.site_url, technology.name FROM ${this.table} as project JOIN project_has_technology pht ON project.id = pht.project_id JOIN technology as technology ON pht.technology_id = technology.id`;
    return this.connection.query(query, [id]);
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [
        project.title,
        project.description,
        project.picture_url,
        project.github_url,
        project.site_url,
      ]
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
