const AbstractManager = require("./AbstractManager");

class ProjectsManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAllBis() {
    const query = `SELECT project.id, project.title, project.description, project.picture_url, project.github_url, project.site_url, technology.name 
    FROM ${this.table} as project 
    INNER JOIN project_has_technology as pht 
    ON project.id = pht.project_id 
    INNER JOIN technology as technology 
    ON pht.technology_id = technology.id`;

    return this.connection.query(query);
  }

  find(id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (title, description, picture_url, github_url, site_url) values (?,?,?,?,?)`,
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

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ProjectsManager;
