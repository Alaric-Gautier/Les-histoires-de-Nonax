import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className={styles.nav}>
      {/* // TODO créer un logo pour le site */}

      <Image
        src="/LogoSite.svg"
        alt="Logo du site"
        className={styles.logoNavbar}
        width={200}
        height={200}
        priority
      />
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/stories/create-story">Créer une histoire</Link>
        </li>
        <li>
          <Link href="/stories/all-stories">
            Toutes les histoires de Nonax !
          </Link>
        </li>
      </ul>
    </nav>

    // TODO créer une banner avec un background et un logo
  );
}
