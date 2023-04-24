import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import Image2 from 'next/legacy/image'

export default function ImagePage() {
  return (
    <>
      <Layout>
        <div>next.js 13 version Image Tag</div>
        <div className="img">
          <Image src="/codingon_logo.png" alt="코딩온" fill />
        </div>
        <br />
        <div>next.js 12 version Image Tag</div>
        <div className="img">
          <Image2
            src="/codingon_logo.png"
            alt="코딩온"
            width={600}
            height={100}
          />
        </div>
      </Layout>

      <style jsx>{`
        .img {
          position: relative;
          width: 600px;
          height: 100px;
        }
      `}</style>
    </>
  )
}
