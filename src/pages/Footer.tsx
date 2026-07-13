function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Instagram icon in a dark circle */}
      <a
        href="https://instagram.com/greytraynor"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        style={styles.socialIcon}
      >
        <InstagramIcon size={18} />
      </a>

      {/* Copyright line */}
      <p style={styles.copyright}>
        Copyright © {year} Grey Traynor - All Rights Reserved.
      </p>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    width: "100%",
    backgroundColor: "#8FB8C9", // soft desaturated blue
    padding: "40px 24px",
    textAlign: "center",
  },
  socialIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#0f172a",
    color: "white",
    marginBottom: "16px",
    textDecoration: "none",
    transition: "opacity 0.2s ease",
  },
  copyright: {
    color: "#334155",
    fontSize: "14px",
    marginBottom: "16px",
  },
  divider: {
    width: "96px",
    height: "1px",
    backgroundColor: "rgba(100, 116, 139, 0.5)",
    margin: "0 auto 16px auto",
  },
  poweredBy: {
    color: "#475569",
    fontSize: "12px",
  },
  poweredByLabel: {
    marginBottom: "4px",
  },
  poweredByName: {
    fontWeight: 600,
    color: "#1e293b",
  },
};