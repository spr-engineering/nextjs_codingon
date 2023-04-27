import Link from 'next/link'

export default function LinkLi() {
  return (
    <>
      <h2>Link Tag Options</h2>
      <ul>
        <li>
          <Link href={'/link'}>href=&apos;/link&apos;</Link>
          <div>: The path or URL to navigate to</div>
        </li>
        <li>
          <Link href={'/link/as'}>as</Link>
          <div>
            : Optional decorator for the path that will be shown in the browser
            URL bar
          </div>
        </li>
        <li>
          <Link href="/link/replace/on" target="_blank">
            replace
          </Link>
          <div>
            : Replace the current history state instead of adding a new url into
            the stack. <br />
            Defaults to false
          </div>
        </li>
        <li>
          <Link href="/link/scroll">scroll</Link>
          <div>
            : Scroll to the top of the page after a navigation. <br />
            Defaults to true
          </div>
        </li>
        <li>
          <Link href="/link/shallow/on" shallow={true}>
            shallow
          </Link>
          <div>
            : Update the path of the current page without rerunning
            getStaticProps, getServerSideProps or getInitialProps. <br />
            Defaults to false
          </div>
        </li>
      </ul>
    </>
  )
}
