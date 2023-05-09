import { codingONIntro } from '@/data/intro'

export default function IntroduceCodingON() {
  return (
    <>
      <div className="introduce-codingon-container">
        {codingONIntro.map((data) => {
          return (
            <div className="paragraph" key={data}>
              {data}
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .introduce-codingon-container {
          padding: 20px;
          background-color: antiquewhite;
        }
        .paragraph {
          margin: 20px;
          padding: 20px;
          border: 0px;
          border-radius: 20px;
          background-color: white;
          cursor: default;
        }
      `}</style>
    </>
  )
}
