import Crop from '#models/crop'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Crop.createMany([
      { name: 'Soja' },
      { name: 'Milho' },
      { name: 'Algodão' },
      { name: 'Café' },
      { name: 'Cana de Açúcar' },
    ])
  }
}