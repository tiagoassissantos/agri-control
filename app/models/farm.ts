import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Producer from './producer.js'
import City from './city.js'
import Crop from './crop.js'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare name: string

  @column()
  declare totalArea: number

  @column()
  declare agriculturalArea: number

  @column()
  declare vegetationArea: number

  @belongsTo(() => Producer)
  declare producer: BelongsTo<typeof Producer>

  @belongsTo(() => City)
  declare city: BelongsTo<typeof City>

  @manyToMany(() => Crop, {
    pivotTable: 'crop_farm',
  })
  declare crops: ManyToMany<typeof Crop>
}