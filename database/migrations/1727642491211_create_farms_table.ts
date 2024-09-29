import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'farms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name', 100).notNullable()
      table.decimal('total_area', 10, 2).notNullable()
      table.decimal('agricultural_area', 10, 2).notNullable()
      table.decimal('vegetation_area', 10, 2).notNullable()

      table.integer('producer_id').unsigned().notNullable().references('id').inTable('producers').onDelete('CASCADE')
      table.integer('city_id').unsigned().notNullable().references('id').inTable('cities').onDelete('CASCADE')

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}