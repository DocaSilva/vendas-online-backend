import { MigrationInterface, QueryRunner } from 'typeorm';

export class CrateTableAddress1711210644951 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('---------------------------CrateTableAddress1711210644951');

    await queryRunner.query(`
            CREATE TABLE \`address\` (
                \`id\` INT NOT NULL AUTO_INCREMENT,
                \`user_id\` INT NOT NULL,
                \`complement\` VARCHAR(255),
                \`number\` INT NOT NULL,
                \`cep\` VARCHAR(255) NOT NULL,
                \`city_id\` INT NOT NULL,
                \`created_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (\`id\`),
                CONSTRAINT \`fk_user_id\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`),
                CONSTRAINT \`fk_city_id\` FOREIGN KEY (\`city_id\`) REFERENCES \`city\`(\`id\`)
            );
            
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE \`address\`
    `);
  }
}
