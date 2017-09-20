export const getCommits = async () => {
  const userData = await fetch(`https://api.github.com/users/${ process.env.REACT_APP_USERNAME }/events`, {
    headers: {
      Authorization: `token ${ process.env.REACT_APP_GITHUB_API_KEY }`,
      'User-Agent': process.env.REACT_APP_USERNAME,
    },
  })
  const userDataJson = await userData.json()
  const today = new Date().getDate()
  return userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
    .reduce((acc, val) => acc + val, 0)
}
