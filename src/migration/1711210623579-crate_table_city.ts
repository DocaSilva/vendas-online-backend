import { MigrationInterface, QueryRunner } from 'typeorm';

export class CrateTableCity1711210623579 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('---------------------------CrateTableCity1711210623579');

    await queryRunner.query(`
            CREATE TABLE \`city\` (
                \`id\` INT NOT NULL,
                \`state_id\` INT NOT NULL,
                \`name\` VARCHAR(255) NOT NULL,
                \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`),
                CONSTRAINT \`fk_state_id\` FOREIGN KEY (\`state_id\`) REFERENCES \`state\`(\`id\`)
            );
            
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE \`city\`
    `);
  }
}
