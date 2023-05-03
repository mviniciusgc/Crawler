import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePromotionTable1682780793348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                  name: 'promotion',
                  columns: [
                    {
                      name: 'promotion_id',
                      type: 'uuid',
                      isPrimary: true,
                      generationStrategy: 'uuid',
                      default: 'uuid_generate_v4()',
                    },
                    {
                      name: 'title',
                      type: 'varchar',
                    },
                    {
                      name: 'description',
                      type: 'text',
                    },
                    {
                      name: 'price',
                      type: 'varchar',
                    },
                    {
                      name: 'url_img',
                      type: 'varchar',
                    },
                    {
                      name: 'url',
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
        await queryRunner.dropTable('promotion');
    }

}
