import React from 'react'
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
        404 NotFound
        <Link to="/">Home from Link</Link> 
    </div>
  )
}

export default NotFoundPage;
