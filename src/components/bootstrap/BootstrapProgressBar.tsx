import ProgressBar from 'react-bootstrap/ProgressBar'

// react-bootstrap docs
//https://react-bootstrap.netlify.app/docs/components/progress
export default function BootstrapProgressBar() {
  return (
    <>
      <ProgressBar animated now={45} />
      <ProgressBar striped variant="success" now={80} />
    </>
  )
}
