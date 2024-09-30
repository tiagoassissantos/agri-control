import Producer from "#models/producer"

export default class ProducerRepository {
  public async getAll() {
    return Producer.all()
  }

  public async getById(id: number) {
    return Producer.find(id)
  }

  public async create(data: any) {
    return Producer.create(data)
  }

  public async update(id: number, data: any) {
    const producer = await Producer.find(id)
    if (producer) {
      producer.merge(data)
      await producer.save()
      return producer
    }
    return null
  }

  public async delete(id: number) {
    const producer = await Producer.find(id)
    if (producer) {
      await producer.delete()
      return true
    }
    return false
  }
}