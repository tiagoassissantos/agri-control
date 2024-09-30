import { test } from '@japa/runner'

test.group('States API', () => {
  test('should return all states with 200 status', async ({ client }) => {
    const response = await client.get('/states')
    
    response.assertStatus(200)
    response.assertBodyContains({
      data: [
        {
          name: 'São Paulo'
        },
        {
          name: 'Rio de Janeiro'
        }
      ]
    })
  })
})