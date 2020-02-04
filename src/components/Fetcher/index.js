import React, { useState, useEffect } from 'react'
import axios from 'axios'

const withFetcher = url => Component => props => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async (url) => {
      setLoading(true)

      try {
        const results = await axios.get(url)
        setData(results.data)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }

    fetchUsers(url)
  }, [])

  return (
    <Component {...props} data={data} loading={loading} error={error} />
  )
}

export default withFetcher
