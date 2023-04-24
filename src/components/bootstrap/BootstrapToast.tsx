import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast'

export default function BootstrapToast() {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow(!show)

  return (
    <>
      <Button onClick={toggleShow} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button>
      <div>
        <Toast show={show} onClose={toggleShow}>
          <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
            Woohoo, you&apos;re reading this text in a Toast!
          </Toast.Body>
        </Toast>
      </div>
    </>
  )
}
