import Layout from '@components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapAccordion from '@components/bootstrap/BootstrapAccordion'
import BootstrapButtons from '@components/bootstrap/BootstrapButtons'
import BootstrapModal from '@components/bootstrap/BootstrapModal'
import BootstrapNavbar from '@components/bootstrap/BootstrapNavbar'
import BootstrapToast from '@components/bootstrap/BootstrapToast'
import BootstrapProgressBar from '@components/bootstrap/BootstrapProgressBar'
import BootstarpSpinners from '@components/bootstrap/BootstrapSpinners'

export default function Bootstrap() {
  return (
    <>
      <Layout>
        <BootstrapNavbar />
        <div>
          <BootstrapAccordion />
          <hr />
          <BootstrapButtons />
          <br />
          <hr />
          <BootstrapToast />
          <hr />
          <BootstrapModal />
          <hr />
          <BootstrapProgressBar />
          <hr />
          <BootstarpSpinners />
        </div>
      </Layout>

      <style jsx>{`
        div {
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  )
}
