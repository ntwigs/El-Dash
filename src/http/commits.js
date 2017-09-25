import { application } from '../config'

export const getCommits = async () => {
  const userData = await fetch(
    `https://api.github.com/users/${ application.githubUsername }/events`,
    {
      headers: {
        Authorization: `token ${ application.githubApi }`,
        'User-Agent': application.githubUsername,
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
