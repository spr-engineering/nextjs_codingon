import Accordion from 'react-bootstrap/Accordion'
import { codingONIntro } from '@/data/intro'

export default function BootstrapAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      {codingONIntro.map((data, idx) => {
        return (
          <Accordion.Item eventKey={idx.toString()} key={idx}>
            <Accordion.Header>About CodingON #{idx + 1}</Accordion.Header>
            <Accordion.Body>{data}</Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
