import { useState } from 'react'
import ImageComponent from '@components/image_tag/Image'
import LegacyImageComponent from '@components/image_tag/LegacyImage'
import Layout from '@components/layout/Layout'

export default function ImagePage() {
  const [isNext13, setIsNext13] = useState(true)
  return (
    <>
      <Layout>
        <button
          onClick={() => {
            setIsNext13(true)
          }}
        >
          Next.js Version 13
        </button>
        <button
          onClick={() => {
            setIsNext13(false)
          }}
        >
          Next.js Version 12
        </button>
        {isNext13 ? <ImageComponent /> : <LegacyImageComponent />}
      </Layout>
    </>
  )
}
