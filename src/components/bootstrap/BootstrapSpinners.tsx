import Spinner from 'react-bootstrap/Spinner'

// react-bootstrap docs
// https://react-bootstrap.netlify.app/docs/components/spinners
export default function BootstarpSpinners() {
  return (
    <>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner animation="grow" role="status" variant="warning" size="sm">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  )
}
