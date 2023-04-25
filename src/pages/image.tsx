import ImageComponent from '@/components/image_tag/Image'
import LegacyImageComponent from '@/components/image_tag/LegacyImage'
import Layout from '@/components/layout/Layout'
import { useState } from 'react'

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
          nextjs 13 image
        </button>
        <button
          onClick={() => {
            setIsNext13(false)
          }}
        >
          nextjs 12 image
        </button>
        {isNext13 ? <ImageComponent /> : <LegacyImageComponent />}
      </Layout>
    </>
  )
}
