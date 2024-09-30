import vine from '@vinejs/vine'

export const createProducerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().maxLength(100),
    cpf_cnpj: vine.string().trim().regex(/^[0-9]+$/).minLength(11).maxLength(14),
    farms: vine.array(
      vine.object({
        name: vine.string().trim().maxLength(100),
        totalArea: vine.number(),
        agriculturalArea: vine.number(),
        vegetationArea: vine.number(),
        city_id: vine.number(),
        crops: vine.array(vine.number()),
      })
    ),
  })
)

export const updateProducerValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    cpf_cnpj: vine.string().trim().regex(/^[0-9]+$/).minLength(11).maxLength(14)
  })
)
