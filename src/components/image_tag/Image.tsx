import Image from 'next/image'
import styles from '@/styles/ImageTag.module.css'

export default function ImageComponent() {
  return (
    <>
      <h3>next.js 13 version Image Tag</h3>
      <div>
        <span className={styles.imageOption}>default</span>, image width:687px,
        height:105px
        <br />
        <div className={styles.imageBorder}>
          <Image src="/logo.png" alt="코딩온" width={687} height={105} />
        </div>
      </div>
      <span className={styles.imageOption}>fill</span>, div width:900px,
      height:105px
      <div className={styles.imageStyles}>
        <br />
        <Image src="/logo.png" alt="코딩온" fill />
      </div>
      <span className={styles.imageOption}>fill, object-fit:contain</span>, div
      width:900px, height:105px
      <div className={styles.imageStyles}>
        <Image
          src="/logo.png"
          alt="코딩온"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className={styles.imageOption}>
        fill, object-fit:contain, responsive
      </span>
      , div width:100vw, height:100px
      <div className={styles.responsive}>
        <br />
        <Image
          src="/logo.png"
          alt="코딩온"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <span className={styles.imageOption}>
        fill, object-fit:contain, responsive, keep aspect ratio
      </span>
      <div className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/logo.png"
            alt="코딩온"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <span className={styles.imageOption}>fill, object-fit:cover</span>, div
      width:900px, height:105px
      <div className={styles.imageStyles}>
        <Image
          src="/logo.png"
          alt="코딩온"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <span className={styles.imageOption}>
        fill, object-fit:cover, responsive
      </span>
      , div width:100vw, height:100px
      <div className={styles.responsive}>
        <br />
        <Image
          src="/logo.png"
          alt="코딩온"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  )
}
