import type { HttpContext } from '@adonisjs/core/http'

import StateRepository from "../repositories/state_repository.js"

export default class StatesController {
  private stateRepository: StateRepository

  constructor() {
    this.stateRepository = new StateRepository()
  }

  public async index({ response }: HttpContext) {
    try {
      const states = await this.stateRepository.getAllStates()

      const filteredStates = states.map(state => ({
        id: state.id,
        name: state.name
      }))

      return response.ok({data: filteredStates})
    } catch (error) {
      return response.internalServerError({ message: 'Failed to retrieve states.' })
    }
  }
}