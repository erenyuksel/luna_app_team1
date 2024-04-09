// import {useEffect} from 'react'
// import useApiRequest from './useApiRequest'

// const useAutoFetch = (method, url, requestData, trigger) => {
//     const token = loclaStorage.getItem('auth-token')
//     const {sendRequest, data, error, loading} = useApiRequest()

//     useEffect(() => {
//         if (token) sendRequest(method, url, requestData)
//     }, [url, trigger])

//     return {data, error, loading}
// }

// export default useAutoFetch