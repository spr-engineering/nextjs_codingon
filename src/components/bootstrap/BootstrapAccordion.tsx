import Accordion from 'react-bootstrap/Accordion'
import { codingONIntro } from '@/data/intro'

// react-bootstrap docs
// https://react-bootstrap.netlify.app/docs/components/accordion
export default function BootstrapAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      {codingONIntro.map((data) => {
        return (
          <Accordion.Item eventKey={data.id.toString()} key={data.id}>
            <Accordion.Header>About CodingON #{data.id}</Accordion.Header>
            <Accordion.Body>{data.content}</Accordion.Body>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
