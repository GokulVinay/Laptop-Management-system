import * as React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

import styles from './CustomLink.module.css'

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`${styles.navlink} ${match ? styles.navlink__active : null} ${props.className}`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink