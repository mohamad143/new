import React from "react";
import '../styles/about.css'; // Make sure to adjust the path to your CSS file

const About = () => {
  return (
    <div className="container">
      <div className="home-content text-center mb-5">
        <div className="card-body">
          <h1>עלינו</h1>
          <p>אנחנו צוות של ארבעה סטודנטים לתואר ראשון במדעי המחשב באוניברסיטת תל אביב, שלומדים קורס בבניית אפליקציות. האתר שלנו נוצר מתוך הכרה בבעיה שרבים מאיתנו נתקלים בה בימי הולדת של ילדים – האורחים לא תמיד יודעים מה לקנות, ולעיתים המתנות אינן מתאימות או חסרות משמעות. המטרה שלנו היא להקל על האורחים ולוודא שכל ילד יקבל מתנה שהוא באמת יאהב וישמח בה.
            האתר שלנו נועד להציע פתרון פשוט ויעיל, בכך שהוא מסייע לאורחים להבין טוב יותר את תחומי העניין וההעדפות של ילד יום ההולדת. בעזרת טכנולוגיות מתקדמות ושילוב של בינה מלאכותית, אנחנו שואפים ליצור חוויה ייחודית ומותאמת אישית לכל משתמש, תוך מתן תשומת לב לנושא הרגיש של בחירת מתנות חשובות ומשמעותיות.
            כצוות, אנו מביאים איתנו ניסיון מתחומי הפיתוח, עיצוב, וניהול פרויקטים </p>

          <div className="team-cards-container">
            <div className="team-card">
              <img
                src={"b17fe582-970a-4881-9556-d0dfa01ca40c.jpg"}
                alt="Basel Arw photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Basel Arw</h4>
                <p>CS and Business Administration Student at Tel Aviv University</p>
                <p>baselarw@mail.tau.ac.il</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"OhadElkayam.png"}
                alt="Ohad Elkayam photo"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Ohad Elkayam</h4>
                <p>CS Student at Tel Aviv University</p>
                <p>ohadelkayam@mail.tau.ac.il</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"f17ab492-a739-4974-8169-fa94685a4381.jpg"}
                alt="Jane"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Ghidaa Haj</h4>
                <p>CS and Business Administration Student at Tel Aviv University</p>
                <p>gaidaahaj@mail.tau.ac.il</p>
              </div>
            </div>

            <div className="team-card">
              <img
                src={"BayanHijazi.png"}
                alt="Jane"
                style={{ width: "100%", borderRadius: "50%" }}
              />
              <div className="container">
                <h4>Bayan hijazi</h4>
                <p>CS and Mathematics Student at Tel Aviv University</p>
                <p>bayanhijazi@mail.tau.ac.il</p>
              </div>
            </div>
          </div>
      <p>אנחנו ממש שמחים שאתם פה ומשתמשים באתר שלנו ! </p>
      <p> נשמח יותר אם תיצרו קשר איתנו! </p>
        </div>
      </div>
    </div>
  );
};

export default About;
