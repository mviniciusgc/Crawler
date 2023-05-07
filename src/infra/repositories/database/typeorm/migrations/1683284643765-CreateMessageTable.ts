import { MigrationInterface, QueryRunner,Table, TableForeignKey } from "typeorm"

export class CreateMessageTable1683284643765 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                  name: 'message',
                  columns: [
                    {
                      name: 'message_id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'description',
                        type: 'text',
                    },
                    {
                        name: 'promotion_id',
                        type: 'uuid',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
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

        // await queryRunner.createForeignKey(
        //   'message_promotion',
        //   new TableForeignKey({
        //     name: 'Message_Promotion',
        //     columnNames: ['promotion_id'],
        //     referencedColumnNames: ['message_id'],
        //     referencedTableName: 'orders',
        //     onDelete: 'SET NULL',
        //     onUpdate: 'CASCADE',
        //   }),
        // );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('message');
    }

}
