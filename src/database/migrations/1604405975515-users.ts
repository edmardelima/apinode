import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1604405975515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'identity',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'sus_number',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'birth_date',
                    type: 'varchar',
                },
                {
                    name: 'resp_name',
                    type: 'varchar',
                },
                {
                    name: 'resp_identity',
                    type: 'integer',
                },
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
