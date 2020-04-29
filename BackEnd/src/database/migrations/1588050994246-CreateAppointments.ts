import {MigrationInterface, QueryRunner,Table} from "typeorm";

export default class CreateAppointments1588050994246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(
        new Table ({
          name: 'appointments',
          columns:[
            {
              name:'id',
              type: 'varchar',
              isPrimary:true,
              generationStrategy:'uuid',
              default:'uuid_generate_v4()'

            },
            {
              name:'provider',
              type:'varchar',
              isNullable: false,
            },
            {
              name: 'date',
              type: 'timestamp with time zone',
              isNullable: false,
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('appointments');
    }

}
