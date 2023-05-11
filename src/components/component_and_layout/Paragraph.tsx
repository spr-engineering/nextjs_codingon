interface Props {
  data: string
}

export default function Paragraph({ data }: Props) {
  return (
    <>
      <div className="paragraph" key={data}>
        <strong>This is component</strong>
        <br />
        {data}
      </div>
      <style jsx>{`
        .paragraph {
          margin: 20px;
          padding: 20px;
          border: 0px;
          border-radius: 20px;
          background-color: white;
          cursor: default;
        }
        .component {
          font-weight: 600;
        }
      `}</style>
    </>
  )
}
