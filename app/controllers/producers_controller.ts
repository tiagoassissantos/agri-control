import type { HttpContext } from '@adonisjs/core/http'
import ProducerRepository from "../repositories/producer_repository.js"
import { createProducerValidator, updateProducerValidator } from '../validators/producer.js'


export default class ProducersController {
  private producerRepository: ProducerRepository

  constructor() {
    this.producerRepository = new ProducerRepository()
  }

  public async index({ response }: HttpContext) {
    const producers = await this.producerRepository.getAll()
    return response.ok(producers)
  }

  public async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createProducerValidator)
    const producer = await this.producerRepository.create(payload)
    return response.created({ data: producer })
  }

  public async show({ params, response }: HttpContext) {
    const producer = await this.producerRepository.getById(params.id)
    if (!producer) {
      return response.notFound({ message: 'Producer not found' })
    }
    return response.ok(producer)
  }

  public async update({ params, request, response }: HttpContext) {
    const payload = request.validateUsing(updateProducerValidator)
    const producer = await this.producerRepository.update(params.id, payload)
    if (!producer) {
      return response.notFound({ message: 'Producer not found' })
    }
    return response.ok(producer)
  }

  public async destroy({ params, response }: HttpContext) {
    const success = await this.producerRepository.delete(params.id)
    if (!success) {
      return response.notFound({ message: 'Producer not found' })
    }
    return response.noContent()
  }
}