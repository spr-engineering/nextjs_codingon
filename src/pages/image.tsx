import Image from 'next/image'
import Image2 from 'next/legacy/image'

export default function ImagePage() {
  return (
    <>
      <div>새로운 이미지 태그</div>
      <div className="img">
        <Image src="/codingon_logo.png" alt="코딩온" fill />
      </div>
      <br />
      <div>기존 이미지 태그</div>
      <div className="img">
        <Image2
          src="/codingon_logo.png"
          alt="코딩온"
          width={600}
          height={100}
        />
      </div>
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
