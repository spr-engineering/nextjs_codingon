import { codingONIntro } from '@/data/intro'
import Paragraph from './Paragraph'

export default function IntroduceCodingON() {
  return (
    <>
      <div className="introduce-codingon-container">
        {codingONIntro.map((data) => (
          <>
            <Paragraph data={data.content} key={data.id} />
          </>
        ))}
      </div>

      <style jsx>{`
        .introduce-codingon-container {
          padding: 1px 0;
          background-color: antiquewhite;
        }
      `}</style>
    </>
  )
}
