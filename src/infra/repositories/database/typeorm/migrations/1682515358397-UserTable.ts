import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class UserTable1682515358397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                  name: 'user',
                  columns: [
                    {
                      name: 'user_id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                    },
                    {
                      name: 'name',
                      type: 'varchar',
                    },
                    {
                      name: 'nick_name',
                      type: 'varchar',
                    },
                    {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                    },
                    {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                    },
                  ],
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
