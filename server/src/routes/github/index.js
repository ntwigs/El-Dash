export const github = {
  method: 'GET',
  path: '/commits',
  handler: ((req, res) => {
    res('yes, this is commits')
  })
}