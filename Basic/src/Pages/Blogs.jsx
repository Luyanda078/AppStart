import React, { useState } from 'react'

export default function Blogs() {
  const [hello, setHello] = useState(true);
  return (
    <div style={{backgroundColor:hello?"blue":"pink"}}>
      <h1>Blogs Page</h1>
    </div>
  )
}
