import { MigrationInterface, QueryRunner } from 'typeorm';

export class CrateTableState1711210614172 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('---------------------------CrateTableState1711210614172');

    await queryRunner.query(`
        CREATE TABLE \`state\` (
            \`id\` INT NOT NULL,
            \`name\` VARCHAR(255) NOT NULL,
            \`uf\` varchar(2) NOT NULL,
            \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (\`id\`)
        );
        
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE \`state\`
    `);
  }
}
