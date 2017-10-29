import fetch from 'node-fetch'

export const jFetch = async (url, headers) => {
  const data = await fetch(url, headers).catch(err =>
    console.log('Could not fetch'),
  )
  return data.json()
}