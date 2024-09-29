import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import State from '#models/state'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class City extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column({ serializeAs: null })
  declare stateId: number

  @column()
  declare name: string

  @belongsTo(() => State, {
    foreignKey: 'stateId'
  })
  declare state: BelongsTo<typeof State>
}