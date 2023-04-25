import Image from 'next/image'

export default function ImageComponent() {
  return (
    <>
      <h3>next.js 13 version Image Tag</h3>
      <div>
        default
        <br />
        <Image src="/logo.png" alt="코딩온" width={687} height={105} />
      </div>
      <div>
        intrinsic
        <br />
        <Image
          src="/logo.png"
          alt="코딩온"
          width={687}
          height={105}
          layout="intrinsic"
        />
      </div>
      <div>
        fixed
        <br />
        <Image
          src="/logo.png"
          alt="코딩온"
          width={687}
          height={105}
          layout="fixed"
        />
      </div>
      <div>
        responsive
        <br />
        <Image
          src="/logo.png"
          alt="코딩온"
          width={687}
          height={105}
          layout="responsive"
        />
      </div>
      <div style={{ width: '687px', height: '105px', position: 'relative' }}>
        fill
        <br />
        <Image src="/logo.png" alt="코딩온" layout="fill" />
      </div>
    </>
  )
}
