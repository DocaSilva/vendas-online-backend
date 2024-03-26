import { MigrationInterface, QueryRunner } from 'typeorm';

export class CrateTableUser1711210603570 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('---------------------------CrateTableUser1711210603570');

    await queryRunner.query(`
        CREATE TABLE \`user\` (
            \`id\` INT(11) NOT NULL AUTO_INCREMENT,
            \`name\` VARCHAR(255) NOT NULL, 
            \`email\` VARCHAR(255) NOT NULL UNIQUE, 
            \`phone\` VARCHAR(255) NOT NULL,
            \`cpf\` VARCHAR(255) NOT NULL,
            \`password\` VARCHAR(255) NOT NULL,
            \`type_user\` INT(11) NOT NULL,
            \`createdAt\` DATETIME(6) NOT NULL DEFAULT current_timestamp(6),
            \`updatedAt\` DATETIME(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
            PRIMARY KEY (\`id\`) USING BTREE
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE \`user\`
    `);
  }
}
