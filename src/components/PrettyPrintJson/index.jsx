import React from 'react'

export default ({ result }) => {

  return (
    <>
      <pre>
        {JSON.stringify(result, null, 2)}
      </pre>
    </>
  )
}