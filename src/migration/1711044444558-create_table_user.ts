import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1711044444558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE IF NOT EXISTS \`user\` (
            \`id\` int(11) NOT NULL AUTO_INCREMENT,
            \`name\` varchar(255) NOT NULL,
            \`email\` varchar(255) NOT NULL,
            \`phone\` varchar(255) NOT NULL,
            \`cpf\` varchar(255) NOT NULL,
            \`password\` varchar(255) NOT NULL,
            PRIMARY KEY (\`id\`)
        ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;       
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
     DROP TABLE  \`user\` 
    `);
  }
}
