import greyPhoto from '../assets/about_grey_bio.webp';

const paragraphs = [
  `Grey Traynor (they/she/he) is a transfemme writer who has been published in XRAY, BULL, The Bulb Region, Roi Fainéant, and beestung. They attended the 2025 Tin House Summer Workshop and they read at the 2025 Portland Book Festival and are currently querying manuscripts. They were also awarded a 2026 Olseth Family Foundation writing residency. Find them on Instagram @greytraynor & at www.greytraynor.gay — Also, check out their gay romance podcast, Baby, Don't Shoot (featuring a Luigi Mangione type), wherever you listen to pods!`,
];

export default function About() {
  return (
    <main style={styles.page}>
	  <section id="about"> 
      <h3 style={styles.name}>About Grey</h3>
      <div style={styles.content}>
        <img
          src={greyPhoto}
          alt="Grey Traynor"
          style={styles.photo}
        />
        {paragraphs.map((text, i) => (
          <p key={i} style={styles.paragraph}>{text}</p>
        ))}
      </div>
	  </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    padding: '48px 40px 64px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  name: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '40px',
    fontWeight: 900,
    marginBottom: '32px',
    color: '#5ba1a6',
  },
  content: {
    overflow: 'hidden',
  },
  photo: {
    float: 'right',
    width: '260px',
    borderRadius: '4px',
    objectFit: 'cover',
    marginLeft: '28px',
    marginBottom: '12px',
  },
  paragraph: {
    fontFamily: "'Georgia', serif",
    fontSize: '16px',
    lineHeight: 1.8,
    color: '#333',
    marginBottom: '20px',
  },
};
