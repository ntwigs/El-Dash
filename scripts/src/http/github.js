import { github } from '../config'
import { fetch, writeData } from './util/tools'


const filterCommits = userData => {
  const today = new Date().getDate()

  return userData
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
    .reduce((acc, val) => acc + val, 0)
}

const writeGithub = commits => {
  const writeDataTo = writeData(`{ "commits": ${ commits } }`)
  writeDataTo('github')
}

export const startCommitProcess = async () => {
  const headers = {
    headers: {
      Authorization: `token ${ github.githubApi }`,
      'User-Agent': github.githubUsername,
    },
  }
  const getGithub = fetch(`https://api.github.com/users/${ github.githubUsername }/events`)
  const userData = await getGithub(headers)
  const comments = filterCommits(userData)
  await writeGithub(comments)
}
