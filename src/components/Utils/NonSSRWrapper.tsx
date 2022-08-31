import * as React from 'react'
import dynamic from 'next/dynamic'
const NonSSRWrapper = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
})
