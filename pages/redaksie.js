import styles from "../styles/Redaksie.module.css";
import Header from "../components/Header";

export default function RedaksieLys() {
  return (
    <>
      <div className={styles.heading}>
        <Header />
        <div>
          <h1>Redaksielys 2022</h1>
        </div>
      </div>
      <main className={styles.main}>
        <h2>Hoofredaksie</h2>
        <ul>
          <li>Redaktrise: Emma Olivier</li>
          <li>Fotoredaktrise: Emma Snyman</li>
          <li>Uitlegkunstenaar: Frans Vergeest</li>
          <li>Organiseerder: meneer Gert Visser</li>
        </ul>

        <h2>Joernaliste</h2>
        <ul>
          <li>Andrea van Wyk</li>
          <li>Annika Burger</li>
          <li>Chané Smith</li>
          <li>Chantelle van Wyk</li>
          <li>Chanzel Hammond</li>
          <li>Eileen Vermeulen</li>
          <li>Emma Olivier</li>
          <li>Erica Chen</li>
          <li>Hannah de Wet</li>
          <li>Jana Burger</li>
          <li>Janike Smith</li>
          <li>Kyla van der Riel</li>
          <li>Leah Coetzee</li>
          <li>Leandri Odendaal</li>
          <li>Leanri Pretorius</li>
          <li>Lise Keyser</li>
          <li>Liza Theron</li>
          <li>Misha Coetzee</li>
          <li>Nienke de Vaal</li>
          <li>Noa du Plessis</li>
          <li>René Theron</li>
        </ul>

        <h2>Fotograwe</h2>
        <ul>
          <li>Anika Burger</li>
          <li>Bianca Stander</li>
          <li>Cara Fourie</li>
          <li>Cara Louw</li>
          <li>Danielle de Villiers</li>
          <li>Emma Olivier</li>
          <li>Emma Snyman</li>
          <li>Frida Nel</li>
          <li>Jana Visser</li>
          <li>Lize van Rooyen</li>
          <li>Nika Armfield</li>
          <li>Shianne Brand</li>
          <li>Yana Mans</li>
        </ul>
      </main>
    </>
  );
}
