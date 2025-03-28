import { Link } from '@remix-run/react';
import styles from './monogram.module.css';

export const Monogram = ({ highlight }) => {
  return (
    <Link to="/" className={styles.logo} aria-label="Home">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="monogram">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2L2 7L12 12L22 7L12 2Z"
            />
          </clipPath>
        </defs>
        <path
          fillOpacity="0.6"
          d="M12 2L2 7L12 12L22 7L12 2Z"
          fill="currentColor"
        />
        <path
          d="M12 2L2 7L12 12L22 7L12 2Z"
          fill="currentColor"
          clipPath="url(#monogram)"
        />
      </svg>
    </Link>
  );
};
