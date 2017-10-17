import { github } from '../config'

export const getCommits = async () => {
  const userData = await fetch(
    `https://api.github.com/users/${ github.githubUsername }/events`,
    {
      headers: {
        Authorization: `token ${ github.githubApi }`,
        'User-Agent': github.githubUsername,
      },
    },
  )
  const userDataJson = await userData.json()
  const today = new Date().getDate()
  return userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
    .reduce((acc, val) => acc + val, 0)
}
