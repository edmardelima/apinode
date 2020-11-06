import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class endereco1604406171098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'endereco',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'logradouro',
                    type: 'varchar',
                },
                {
                    name: 'numero',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'bairro',
                    type: 'varchar',
                },
                {
                    name: 'cidade',
                    type: 'varchar',
                },
                {
                    name: 'estado',
                    type: 'varchar',
                },
                {
                    name: 'cep',
                    type: 'integer',
                    unsigned: true,
                },
                {
                    name: 'users_id',
                    type: 'integer',
                    unsigned: true,
                },
            ],
            foreignKeys: [
                {
                    name: 'endereco_usuario',
                    columnNames: ['users_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereco');
    }

}
