import nFetch from 'node-fetch'
import fsSync from 'fs'
import path from 'path'
import { promisify } from 'util'

export const fetch = url => async headers => {
  const data = await nFetch(url, headers)
  return data.json()
}

export const writeData = data => name => {
  const fs = promisify(fsSync.writeFile)
  fs(path.join(__dirname, `../../../../data/${ name }.json`), `${ data }`)
}
