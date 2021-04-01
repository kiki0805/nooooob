import * as React from "react"
import { Link } from "gatsby"
import github from '../images/github-icon.svg'


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a
            href="https://github.com/kiki0805/nooooob"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{verticalAlign: `middle`}}>
              <img src={github} alt="Github" style={{maxHeight: `1.75em`}} />
            </span>
          </a> Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}
        by
        {` `}
        <a 
          href="https://github.com/kiki0805"
          target="_blank"
          rel="noopener noreferrer"
        >
          kiki0805
        </a>
        <div>Icon made by <a href="info@pixelbuddha.net" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </footer>
    </div>
  )
}

export default Layout
