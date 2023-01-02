import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "../../src/components/Header";
import styles from "../../styles/Home.module.css";

export default function CreateStory() {

  const [story, setStory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      age: event.target.age.value,
      themes: event.target.themes.value,
    };

    const generateStoryByAgeAndThemes = (age, themes = "") => {
      let prompt = `Ecris moi une histoire pour une personne âgée de ${data.age} ans`;
      if (!data.age) {
        prompt = "Ecris moi une histoire pour une personne âgée de 4 ans";
      }
      if (data.themes) {
        prompt += ` et qui aime les ${data.themes}`;
      }
      return prompt + " !";
    };
    
    const endpoint = "https://api.openai.com/v1/completions";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
        
      },
      body: JSON.stringify({
        prompt: generateStoryByAgeAndThemes(data.age, data.themes),
        max_tokens: 4050,
        temperature: 0.9,
        model: "text-davinci-003",
      }),
    };

    // afficher un élément indiquant que l'histoire est en cours d'écriture après le submit
    const loading = document.querySelector(".loading");
    loading.innerHTML = "Chargement de l'histoire...";
    loading.style.color = "white";

    try {
      const response = await fetch(endpoint, options);
      const dataResponse = await response.json();
      const story = dataResponse.choices[0].text;

      //TODO enregsitrer l'histoire reçue dans un fichier JSON.
      
      setStory(story);
    } 
    catch (error) {
      console.log(error);
    }

    // enlever l'élément une fois les données récupérées
    const removeloading = document.querySelector(".loading");
    removeloading.innerHTML = "";

    // redirection vers la page d'accueil
    // window.location.href = "/";
  };

  return (
    <>
      <Head>
        <title>Créer une histoire</title>
      </Head>

      <Header />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Créer une histoire</p>

          {/* // TODO Trouver un logo sympa pour la création d'histoire à la place de la lune*/}

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

        <div>
          <h1 className="loading"></h1>
        </div>

        {/* // TODO afficher un formumaire pour créer une histoire avec un l'âge de l'enfant, un titre et un texte */}

        <div>
          <form onSubmit={handleSubmit}>
            
            <label htmlFor="age">Quel âge as-tu ?</label>
            <input type="number" name="age" id="age" placeholder="Âge de la personne"/>

            <label htmlFor="themes">Thèmes de l'histoire !</label>
            <input type="text" name="themes" id="themes" placeholder="Pat patrouille, tractopelle"/>

            <button type="submit">Créer mon histoire !</button>
          </form>
        </div>

        <div>
          <h2>Tu n'as pas d'idée ?</h2>
          <p>Tu peux générer une histoire aléatoire en cliquant sur le bouton Créer mon histoire !</p>
        </div>

        <div>
          <p>{story}</p>
        </div>
        {/* <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div> */}
        <div className={styles.title}>
          <h2 className={styles.title}>
            <Link href="/">Retour à la page d'accueil</Link>
          </h2>
        </div>
      </main>
    </>
  );
}
