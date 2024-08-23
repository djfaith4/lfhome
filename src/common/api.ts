import axios from 'axios'

export const API_BASE = 'https://content.guardianapis.com'
export const ARTICLES_PATH = '/search'

export type ApiParams = Record<string, any>

export const getData = async (path: string, params: ApiParams = {}) => {
  let resp
  params['api-key'] = process.env.REACT_APP_API_KEY
  const searchParams = new URLSearchParams(params)
  const paramsAsString = searchParams.toString()
  console.log(`Requesting: ${API_BASE}${path}?${paramsAsString}`)

  await axios
    .get(`${API_BASE}${path}?${paramsAsString}`)
    .then((response) => {
      resp = response.data.response
      //console.log(resp)
    })
    .catch((error) => console.log('get error', error))
  return resp
}
