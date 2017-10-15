export const forecast = {
  method: 'GET',
  path: '/weather',
  handler: ((req, res) => {
    res('yes, this is weather')
  })
}