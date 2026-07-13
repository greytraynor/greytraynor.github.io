import { useState, useEffect } from 'react';
import books from '../assets/books.webp';

interface Publication {
  title: string;
  publication: string;
  url?: string;
}

export default function Publications() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  const publications: Publication[] = [
      {
      title: "It's Just Pretend, Babe",
      publication: "Roi Fainéant Press - April 2026",
    },
    {
      title: "What She Came to See",
      publication: "Tiny Molecules - February 2026",
      url: "https://www.tinymolecules.com/issues/issue-twentysix#grey-treynor",
    },
    {
      title: "Ugh, My Memorial",
      publication: "beestung - February 2026",
      url: "https://beestungmag.com/issue26/one-story-by-grey-traynor/",
    },
    {
      title: "Maddie",
      publication: "DarkWinter - October 2025",
      url: "https://www.darkwinterlit.com/post/maddie-by-grey-traynor",
    },
    {
      title: "A Foot in the Door",
      publication: "BULL - September 2025",
      url: "https://mrbullbull.com/newbull/fiction/a-foot-in-the-door/",
    },
    {
      title: "Jitterbug Johnny",
      publication: "X-R-A-Y Lit Mag - July 2025",
      url: "https://xraylitmag.com/jitterbug-johnny-by-grey-traynor/fiction/",
    },
    {
      title: "To Have and Not to Hold",
      publication: "Gold Man Review - Issue 14",
    },
    {
      title: "Chestnut Tree",
      publication: "ouch! collective - Volume 4",
    },
  ];

  return (
    <main style={{ ...styles.page, flexDirection: isMobile ? 'column' : 'row' }}>
      {isMobile && (
        <div style={styles.mobileImage}>
          <img src={books} alt="Stack of books" style={styles.mobilePhoto} />
        </div>
      )}
      <div style={{ ...styles.left, padding: isMobile ? '32px 24px' : '48px 40px' }}>
        <h3 style={styles.name}>Selected Publications</h3>
        <ul style={styles.list}>
          {publications.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.listItemTitle}
                >
                  {item.title}
                </a>
              ) : (
                <span style={styles.listItemTitle}>{item.title}</span>
              )}
              <span style={styles.listItemPublication}>{item.publication}</span>
            </li>
          ))}
        </ul>
      </div>
      {!isMobile && (
        <div style={styles.right}>
          <img src={books} alt="Stack of books" style={styles.photo} />
        </div>
      )}
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  left: {
    flex: 1,
    backgroundColor: '#5ba1a6',
    padding: '48px 40px',
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    flex: 1,
    overflow: 'hidden',
  },
  name: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '36px',
    fontWeight: 900,
    marginBottom: '32px',
    color: '#fff',
	display: 'table',
	margin: '0 auto',
	textAlign: 'left',
  },
  list: {
    listStyle: 'none',
    padding: 0,
	display: 'table',
	margin: '0 auto',
	textAlign: 'left',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px',
	padding: '12px',
  },
  listItemTitle: {
    fontFamily: "'Georgia', serif",
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'underline',
    marginBottom: '2px',
  },
  listItemPublication: {
    fontFamily: "'Georgia', serif",
    fontSize: '18px',
    color: 'rgba(255,255,255,0.8)',
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  mobileImage: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    flexShrink: 0,
  },
  mobilePhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
};
