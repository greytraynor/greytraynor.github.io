import { HashLink as Link } from 'react-router-hash-link';
import greyPhoto from '../assets/homepage_grey.webp';

export default function Home() {
  return (
    <main style={styles.page}>
      <h3 style={styles.name}>Grey Traynor</h3>
      <p style={styles.tagline}>
        is a transfemme writer<br />
        living &amp; working in<br />
        Portland
      </p>
      <Link smooth to="/#about" style={styles.button}>
	    ABOUT GREY
	  </Link>
      <img
        src={greyPhoto}
        alt="Grey Traynor standing outdoors near a tree, smiling"
        style={styles.photo}
      />
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '48px 24px 64px',
    maxWidth: '100%',
    margin: '0 auto',
    textAlign: 'center',
  },
  name: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '72px',
    fontWeight: 900,
    marginBottom: '16px',
    color: '#111',
    textAlign: 'center',
  },
  tagline: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '64px',
    color: '#5ba1a6',
    fontWeight: 900,
    lineHeight: 1.5,
    marginBottom: '24px',
  },
  button: {
    display: 'inline-block',
    padding: '10px 24px',
    borderRadius: '999px',
    backgroundColor: '#6caec8',
    color: '#000',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: "'Open Sans', arial, sans-serif",
    fontWeight: 700,
    letterSpacing: '0.994px',
    marginBottom: '36px',
  },
  photo: {
    width: '100%',
    maxWidth: '380px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
};
