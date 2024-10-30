import React, { Suspense } from 'react'

const Lazy = () => {

    const LazyComponent = React.lazy(() => import("./LazyComponent"))

    return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent/>
        </Suspense>
    </div>
  )
}

export default Lazy
