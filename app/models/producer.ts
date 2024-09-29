import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Farm from './farm.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Producer extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare cpfOrCnpj: string

  @column()
  declare name: string

  @hasMany(() => Farm)
  declare farms: HasMany<typeof Farm>
}