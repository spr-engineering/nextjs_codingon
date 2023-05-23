import Layout from '@/components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapAccordion from '@/components/bootstrap/BootstrapAccordion'
import BootstrapButtons from '@/components/bootstrap/BootstrapButtons'
import BootstrapModal from '@/components/bootstrap/BootstrapModal'
import BootstrapNavbar from '@/components/bootstrap/BootstrapNavbar'
import BootstrapToast from '@/components/bootstrap/BootstrapToast'
import BootstrapProgressBar from '@/components/bootstrap/BootstrapProgressBar'
import BootstrapSpinners from '@/components/bootstrap/BootstrapSpinners'

export default function Bootstrap() {
  return (
    <>
      <Layout>
        <div>
          <h4 className="bootstrap-header">Navbar</h4>
          <BootstrapNavbar />
        </div>
        <div>
          <h4 className="bootstrap-header">Accordion</h4>
          <BootstrapAccordion />
        </div>
        <div>
          <h4 className="bootstrap-header">Buttons</h4>
          <BootstrapButtons />
        </div>
        <div>
          <h4 className="bootstrap-header">Toast</h4>
          <BootstrapToast />
        </div>
        <div>
          <h4 className="bootstrap-header">Modal</h4>
          <BootstrapModal />
        </div>
        <div>
          <h4 className="bootstrap-header">ProgressBar</h4>
          <BootstrapProgressBar />
        </div>
        <div>
          <h4 className="bootstrap-header">Spinners</h4>
          <BootstrapSpinners />
        </div>
      </Layout>

      <style jsx>{`
        div {
          padding: 30px 20px 40px 20px;
          text-align: center;
        }
        div:not(:last-of-type) {
          border-style: none none solid;
          border-width: 1px;
          border-color: gray;
        }
        h4 {
          font-weight: 600;
          padding: 10px;
        }
      `}</style>
    </>
  )
}
