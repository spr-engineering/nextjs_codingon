import Image from 'next/legacy/image'
import styles from '@/styles/ImageTag.module.css'

export default function LegacyImageComponent() {
  return (
    <>
      <h2>Next.js Version 12 Image Tag</h2>
      <div className={styles.imageTag}>
        <span className={styles.imageOption}>default (intrinsic)</span>, image
        width:687px, height:105px
        <br />
        <div className={styles.imageBorder}>
          <Image
            src="/logo.png"
            alt="코딩온"
            width={687}
            height={105}
            className={styles.imageBorder}
          />
        </div>
      </div>
      <div className={styles.imageTag}>
        <span className={styles.imageOption}>responsive</span>
        , image width:687px, height:105px
        <br />
        <div className={styles.imageBorder}>
          <Image
            src="/logo.png"
            alt="코딩온"
            width={687}
            height={105}
            layout="responsive"
          />
        </div>
      </div>
      <div className={styles.imageTag}>
        <span className={styles.imageOption}>fixed</span>
        , image width:687px, height:105px
        <br />
        <div className={styles.imageBorder}>
          <Image
            src="/logo.png"
            alt="코딩온"
            width={687}
            height={105}
            layout="fixed"
          />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
        }}
      >
        <span className={styles.imageOption}>fill</span>, div width:687px,
        height:105px
        <div
          style={{
            width: '687px',
            height: '105px',
            position: 'relative',
            border: '1px solid black',
          }}
        >
          <Image src="/logo.png" alt="코딩온" layout="fill" />
        </div>
      </div>
    </>
  )
}
