import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../src/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Les Histoires de Nonax !</title>
        <meta
          name="description"
          content="Une application pour générer des histoires"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Les dernières histoires de Nonax !
            <code className={styles.code}></code>
          </p>

          {/* //TODO Trouver un logo sympa pour Noah */}
          <div>
            <Image
              src="/DarkMoon.png"
              alt="Dark Moon"
              className={styles.MoonLogo}
              width={250}
              height={250}
              priority
            />
          </div>
        </div>

        <div className={styles.main}>
          {/* // TODO Afficher un résumé des 4 dernières histoires créées 
          // TODO avec une image générée par IA et un bout de texte */}
          <h2>Titre de l'histoire 1</h2>
          <p>Texte de l'histoie 1</p>
          <h2>Titre de l'histoire 2</h2>
          <p>Texte de l'histoie 2</p>
          <h2>Titre de l'histoire 3</h2>
          <p>Texte de l'histoie 3</p>
          <h2>Titre de l'histoire 4</h2>
          <p>Texte de l'histoie 4</p>
        </div>
        <h1>
          Vous souhaitez proposer une histoire ?
          <Link href="/stories/create-story"> C'est par ici !</Link>
        </h1>

        {/* // TODO Afficher quelque chose ? */}

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  );
}
