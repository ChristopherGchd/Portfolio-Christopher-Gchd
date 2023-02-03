CREATE DATABASE IF NOT EXISTS portfoliochristopher;

USE portfoliochristopher;

DROP TABLE IF EXISTS `user`;

DROP TABLE IF EXISTS technology;

DROP TABLE IF EXISTS `project`;

CREATE TABLE
    `user` (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
    );

INSERT INTO
    `user` (
        first_name,
        last_name,
        `password`,
        email
    )
VALUES (
        "Christopher",
        "Guichard",
        "666Diablo13",
        "christopherguichard44@gmail.com"
    );

CREATE TABLE
    technology (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        name VARCHAR(500) NOT NULL
    ) ENGINE = InnoDB;

INSERT INTO technology (name)
VALUES ("JavaScript"), ("React"), ("CSS3"), ("HTML5"), ("MySQL");

CREATE TABLE
    `project` (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(150) NOT NULL,
        `description` VARCHAR(200) NOT NULL,
        picture_url VARCHAR(1000) NOT NULL,
        github_url VARCHAR(1000) NULL,
        site_url VARCHAR(1000) NULL
    );

    INSERT INTO
    `project` (id, title, description, picture_url, site_url)
VALUES (1, "Inaka", "The most beautiful places in japan", "src/assets/inaka.jpg", "https://wildcodeschool.github.io/2022-09-JS-RMT-JSCREW-TEAM-B/");
INSERT INTO
    `project` (id, title, description, picture_url, github_url)
VALUES (2, "Pokebiz", "Pokemon card sale", "src/assets/pokebiz.jpg", "https://github.com/ChristopherGchd/Pokebiz");
INSERT INTO
    `project` (id, title, description, picture_url, site_url)
VALUES (3, "Makesense", "Makesense", "src/assets/logo-makesense-dark.png", "https://makesense.remote-fr-3.wilders.dev/");

CREATE TABLE
    `project_has_technology` (
        project_id INT NOT NULL,
        technology_id INT NOT NULL
    );

INSERT INTO
    `project_has_technology` (project_id, technology_id)
VALUES (1, 1), (2, 1), (3, 1);
