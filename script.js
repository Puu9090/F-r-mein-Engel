// script.js – persönliche Zitate-Seite mit Tages-Überraschung
document.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.querySelector(".quote-wrap");
  const quoteEl = document.getElementById("quote");
  const quoteDate = document.getElementById("quote-date");
  const intro = document.getElementById("intro");
  const introBtn = document.getElementById("intro-ok");
  const ackBtn = document.getElementById("ack-btn");

  // ✨ Deine Zitate
  const quotes = [
`Ich denke an dich.`,
`069 — unser Zuhause, egal wo wir sind.`,
`Berlin, der erste Kuss, und alles begann.`,
`Zwischen Döner und Liebe — wir zwei.`,
`Frankfurt bleibt immer wir.`,
`Denk an die Monika und wasch sie gefälligst.`,
`Brandenburger Tor, ehrliche Worte, offene Herzen.`,
`Hamburg — eine Woche, ein Leben, ein Wir.`,
`Unsere Liebe riecht nach Regen und Döner.`,
`Rastatt — kleine Stadt, große Gefühle.`,
`Ich liebe dein Lachen, auch wenn du weinst.`,
`Wir kochen Chaos und nennen es Liebe.`,
`Ich höre deine Stimme, auch wenn du schweigst.`,
`Airbnbs voller Nächte und unausgesprochener Worte.`,
`Unsere Ehrlichkeit ist lauter als jeder Streit.`,
`Du bist mein Lieblingsort, egal auf der Karte.`,
`Frankfurt, du, ich — das reicht.`,
`Zwischen Weinen und Lachen wohnt unsere Wahrheit.`,
`Ich trinke dich mit jedem Schluck.`,
`Unsere Gespräche sind mein Lieblingslied.`,
`069 — unsere Frequenz, unser Rhythmus.`,
`Wir haben 365 Mal geliebt, als wäre es das erste Mal.`,
`Berlin war nur der Anfang, du bist der Rest.`,
`Unsere Liebe riecht nach Currysoße und Wahrheit.`,
`Ich liebe dich in allen Städten.`,
`Wenn ich Döner sehe, denke ich an uns.`,
`Deine Hand war mein Zuhause.`,
`Zwischen Zwiebeln und Küssen — wir.`,
`Manchmal reicht ein Blick — und ich bin wieder da.`,
`Ich hab dich nie nur geliebt, ich hab dich gefühlt.`,
`Dein Lachen macht meine Tage heller.`,
`Unsere Nächte sind unsere besten Geschichten.`,
`069 — drei Zahlen, unendlich Bedeutung.`,
`Du tanzt in meinen Gedanken wie in einer Melodie.`,
`Wir sind die, die über Kleinigkeiten lachen.`,
`Frankfurt war und bleibt unser Wiedersehen.`,
`Ich erinnere mich an unseren ersten Spaziergang durch Berlin.`,
`Kein Duft erinnert mich wie du, nur Nischenparfum kommt nah.`,
`Döner und du — perfekte Kombi.`,
`Ich liebe, wie wir zusammen still sein können.`,
`In Hamburg lernten wir neue Sterne kennen.`,
`Du hast mir beigebracht, ehrlich zu bleiben.`,
`Unsere Ausflüge werden zu Legenden.`,
`Ich sammle deine Worte wie kleine Schätze.`,
`Unsere Liebe hat mehr Kapitel als eine Stadt hat Straßen.`,
`Ich liebe, wie du meine schlechten Witze magst.`,
`Wir haben geheult und sind so näher zusammengerückt.`,
`Deine Umarmungen sind mein sicherer Hafen.`,
`Ich hoffe, du schmeckst das Glück in unserem Essen.`,
`Bei dir fühle ich mich immer zuhause.`,
`Unsere Cityroller-Fahrten sind meine Lieblingsfluchten.`,
`Du bringst mich zum Lachen, bis der Bauch wehtut.`,
`Ich liebe, wie wir gemeinsam tanzen, auch ohne Musik.`,
`Wir feiern das Leben, auch wenn wir traurig sind.`,
`069 — der Sound unserer Erinnerung.`,
`Du und ich gegen die Welt, immer wieder.`,
`Ich denke an Berlin, an den Geruch von Regen und Kuss.`,
`Deine Tränen haben mich nie abgeschreckt.`,
`Ich liebe, wie du mein Chaos ordnest.`,
`Unsere Nächte wurden zu Tagen voller Wahrheit.`,
`Du bist die Ruhe nach meinem Sturm.`,
`Wir haben mehr getrunken als Notizen geschrieben.`,
`Gemeinsam kochen, gemeinsam lachen — unser Ritual.`,
`Deine Hand in meiner — besser als jede Karte.`,
`Ich mag, wie du heimlich Chips teilst.`,
`Süßigkeiten = unsere kleinen Rituale.`,
`Ich erinnere mich an unser erstes gemeinsames Frühstück.`,
`Frankfurt ist unser wiederkehrendes Gedicht.`,
`Ich liebe dein Gesicht im Neonlicht der Stadt.`,
`Wir sind Experten im kleine-Momente-sammeln.`,
`Dein Duft bleibt an meinen Pulsschlägen hängen.`,
`Ich denke an die Monika und lache leise.`,
`Du hast mir beigebracht, Mut zu haben.`,
`Unsere Ehrlichkeit ist das, was uns hält.`,
`Hamburg hat uns neue Lieder geschenkt.`,
`Ich liebe das Geräusch deiner Stimme am Telefon.`,
`069 — wir kennen jede Straßenecke in unserem Herzen.`,
`Deine Küsse schmecken nach Mitternacht und Döner.`,
`Ich erinnere mich an das erste: „Hallo.“`,
`Unsere Kommunikation ist ein eigenes, schönes Buch.`,
`Beim Kochen tanzen unsere Hände zusammen.`,
`Ich liebe, wie du die Welt in Farbe siehst.`,
`Deine Nachrichten sind kleine Rettungsringe.`,
`Wir weinten, bis das Licht anders stand.`,
`Ich habe gelernt, deine Stille zu lesen.`,
`Airbnb-Betten riechen nach neuen Erinnerungen.`,
`Du bist das beste, was mir unterwegs passiert ist.`,
`069 — unser Code, unsere Schaltzentrale.`,
`Ich liebe, wie du mich zum Essen überredest.`,
`Wir haben die seltsamsten Orte in Heimathäuser verwandelt.`,
`Deine Stimme macht jede Stadt sanfter.`,
`Wir lachen über Insider, die niemand sonst versteht.`,
`Unsere Wut verfliegt, unsere Liebe bleibt.`,
`Ich denke an die Stunde am Brandenburger Tor.`,
`Du bist mein Lieblings-„Oh nein“, das später „Oh ja“ wird.`,
`Wir haben uns in der Sprache der Nächte verständigt.`,
`Ich liebe die kleinen Rebellionen mit dir.`,
`Unsere Gespräche sind wie Karten ohne Ziel.`,
`Döner-Abend = offizieller Feiertag.`,
`Ich träume vom nächsten Cityroller-Rennen mit dir.`,
`Du machst jede einfache Straße besonders.`,
`Wir haben uns gegenseitig verziehen — immer wieder.`,
`Die Welt wirkt leichter, wenn du lachst.`,
`Gern erinnere ich mich an unser erstes gemeinsames Lied.`,
`Ich liebe, dass wir zusammen traurig sein dürfen.`,
`Frankfurt ist unser Wiedersehensort wie ein Versprechen.`,
`Bei dir lerne ich, wieder an Wunder zu glauben.`,
`Ich mag, wie du Süßes heimlich versteckst.`,
`Unser erster Kuss war unvergleichlich echt.`,
`Du bist mein sicherer Ort in jeder Menschenmenge.`,
`Ich liebe die Stille nach unserer tiefsten Unterhaltung.`,
`Unsere Hände haben mehr gesagt als Worte.`,
`Du warst und bist meine Mutprobe und meine Rettung.`,
`Ich liebe, wie du den Döner immer perfekt teilst.`,
`Wir haben Nächte in Airbnbs in kleine Galerien verwandelt.`,
`Dein Lächeln ist mein Startsignal für alle guten Tage.`,
`Ich erinnere mich an die Fahrt nach Hamburg wie an ein Gedicht.`,
`Unsere Liebe ist ein gemachtes Lager aus Mut und Zärtlichkeit.`,
`069 — drei Zahlen, ein Magnet.`,
`Deine Nachrichten waren immer kleine Rettungsringe...`,
`Ich erinnere mich an den Geruch der Berliner Straßen nach unserem Kuss.`,
`Wir sind gute Pläne im Chaos des Alltags.`,
`069 — drei Zahlen, unendlich Bedeutung.`,
`Ich bin heute schwach…so schwach wie ich es selten war.
Schwach, dass ich nicht mal aus dem Bett rausgekommen bin, weil ich mir gefühlt stündlich die Frage stelle, was das hier alles für einen Sinn macht…
Schwach weil ich mich Frage, warum uns das passiert ist und was wir falsch gemacht haben, dass wir so leiden müssen…ich leide…Ich spreche von mir…
Ich leide weil ich an einem Punkt stehe wo es keinen Ausweg mehr gibt…deine Anwesenheit war mir nicht genug, zumindest konnte ich es dir nicht zeigen…deine Abwesenheit zerreißt mich…
Ich bete jeden Tag dass der Schmerz schnell vorübergeht und dass du nicht so sehr leiden musst…
Es tut mir leid, dass ich in dein Leben getreten bin und dich so kaputt gemacht habe…denn wenn es dir nur ansatzweise so geht wie mir, dann bist du kaputt…`,
`Wir haben uns gegenseitig verziehen — immer wieder.`,
`Zwischen Döner und Liebe — wir zwei...`,
`Dein Blick erklärt mir Dinge, bevor du sie sagst.`,
`An dich zu denken, reicht, um ruhig zu werden.`,
`Wir feiern kleine Siege mit großen Portionen Essen.`,
`Ich liebe die Art, wie du neben mir aussahst.`,
`Unsere Liebe hat Geschmack — meistens Döner.`,
`Ich denke an dich, auch wenn das Handy stumm ist.`,
`Gemeinsame Kleinigkeiten sind unsere Monumente.`,
`Du bist mein spontan geplanter Urlaub.`,
`Ich mag unsere ernsthaften Gespräche um Mitternacht.`,
`Unsere Koffer sind immer halb gepackt für das nächste Abenteuer.`,
`069 — unsere Postleitzahl im Herzen.`,
`Du bist mein Lieblingsgeräusch am frühen Morgen.`,
`Ich habe dich lieber, wenn du lachst, als wenn du perfekt bist.`,
`Unsere gemeinsamen Tränen sind zärtlich gewordene Worte.`,
`Ich liebe, wie du ehrlich bist, auch wenn es schwer fällt.`,
`Frankfurt hat unsere beste Straße.`,
`Du und ich gegen die Langeweile — jedes Mal gewonnen.`,
`Ich denk an unser erstes gemeinsames Bild.`,
`Dein Kuss ist mein Lieblingsmorgenritual.`,
`Wir machen Nächte zu Tagen und Tage zu Geschichten.`,
`Ich liebe, wenn du auf Cityroller vor mir fährst.`,
`Döner, Chips, Süßes — hier sind unsere Geheimnisse.`,
`Ich liebe dich in jeder Sprache, auch ohne Worte.`,
`Du bist die Person, mit der ich alles teilen will.`,
`Unsere Stunden sind wie kleine Universen.`,
`Ich erinnere mich an das Salz auf deiner Haut.`,
`Wir sind perfekt darin, uns gegenseitig aufzurichten.`,
`Ich liebe, wie wir zusammen weinen und wieder lachen.`,
`069 — eine kleine Zahl mit riesigem Gewicht.`,
`Du machst eine Stadt zu einem Zuhause.`,
`Ich liebe deine Stimme, wenn du ganz bei mir bist.`,
`Wir haben Ausflüge, die wir heimlich wiederholen wollen.`,
`Dein Haar riecht nach Urlaub und Parfüm.`,
`Ich denke an all die Male, die wir uns spontan trafen.`,
`Ich mag, wie du nachts die Sterne zählst.`,
`Unser erstes „ich mag dich“ war ein Kapitel.`,
`Du bringst mich dazu, Dinge anders zu sehen.`,
`Ich erinnere mich an das erste gemeinsame Tanzen wie an ein Fest.`,
`Wir haben jeden Döner so gefeiert, als wäre er ein Preis.`,
`Dein Mut ist ansteckend.`,
`Unsere Liebe ist lauter als jede Stadt.`,
`Ich liebe, wie du mir neue Lieder zeigst.`,
`Du bist die Person, die meine Ruhe kennt.`,
`Ich liebe, wie wir zusammen Pläne verschwenden.`,
`Wir haben uns in den stillen Minuten am besten verstanden.`,
`069 — unsere kleine, magische Zahlenreihe.`,
`Du machst meine Tage so leicht wie einen Spaziergang.`,
`Ich liebe deine klebrigen Hände nach Süßigkeiten.`,
`Unsere Ehrlichkeit ist unser Kompass.`,
`Ich denke an unser erstes gemeinsames Foto in Berlin.`,
`Du bist mein Lieblings-„Schon gut“ und mein „Bleib bei mir“.`,
`Wir feiern uns selbst bei jedem Bissen Essen.`,
`Ich mag, wie du mich trotz allem siehst.`,
`Unsere Liebe ist wie ein gutes Parfüm — individuell.`,
`Ich liebe, wie wir in Hamburg die Karten neu zeichneten.`,
`Du bist mein sicherer Horizont.`,
`Ich erinnere mich, wie wir uns in Frankfurt verlaufen und wiedergefunden haben.`,
`Unsere Streitigkeiten sind nur Zwischenstopps.`,
`Ich will jeden Döner mit dir teilen.`,
`Du bist mein Lieblingsgespräch nach Mitternacht.`,
`Ich liebe, wie du beim Kochen singst.`,
`Wir haben Nächte, die wir für immer aufbewahren.`,
`069 — egal, welche Stadt, es bleibt unser Klang.`,
`Du bist mein Lieblingsort auf jeder Karte.`,
`Ich liebe, wie du bei Süßigkeiten die beste Taktik hast.`,
`Unsere Liebe ist ehrlich, auch im Schmerz.`,
`Ich denke an dich und lächle unwillkürlich.`,
`Du hast mir gezeigt, dass Nähe kein Tempo braucht.`,
`Wir haben zusammen mehr gelacht als geplant.`,
`Ich liebe, wie du die Welt in kleinen Details liest.`,
`Unsere Cityroller-Abenteuer sind kleine Epen.`,
`069 — der Soundtrack unserer Wochen.`,
`Ich mag, wie du mir alltägliche Sachen versüßt.`,
`Ich erinnere mich an den Geruch der Berliner Straßen nach unserem Kuss.`,
`Du bist mein bester Grund für Spontaneität.`,
`Ich liebe, dass wir zusammen weinen dürfen.`,
`Unsere Küsse haben eigene Zeitzonen.`,
`Ich liebe, wie du mein Lieblings-Dönerladen kennst.`,
`Wir sind die Kombination aus Mut und Zärtlichkeit.`,
`Du machst selbst den schlechtesten Tag schön.`,
`Unsere Gespräche füllen ganze Nächte.`,
`Ich denke an die Stunden am Brandenburger Tor.`,
`Dein Lachen hat ein Zuhause bei mir.`,
`069 — unsere kleine geheime Telefonnummer.`,
`Ich liebe die Art, wie du Süßes mit mir teilst.`,
`Wir haben mehr Erinnerungen als manche Menschen Worte.`,
`Du bist meine Lieblingsstadt in Menschengestalt.`,
`Ich liebe, wie du im Regen mit mir tanzt.`,
`Unsere Liebe ist langsam, echt und beständig.`,
`Ich erinnere mich an jedes kleine Missgeschick als Schatz.`,
`Du bist mein Favorit unter allen Plänen.`,
`Wir haben uns in der Küche näher kennengelernt.`,
`Ich liebe, wie du oft das letzte Wort hast — und ich es mag.`,
`069 — drei kleine Zahlen, die alles erklären.`,
`Du machst sogar Airbnbs zu unseren Wohnzimmern.`,
`Ich denke an dich, wenn ich einen Döner bestelle.`,
`Unsere Nähe hat kein Ablaufdatum.`,
`Ich liebe, wie du ernst sein und gleichzeitig albern bleiben kannst.`,
`Wir haben Nächte erlebt, die wir nicht ersetzen wollen.`,
`Du bist mein Lieblingsfest an jedem Montag.`,
`Ich mag, wie du beim Tanzen die Welt vergisst.`,
`Unsere Liebe ist ein Bündel aus Mut und Lachen.`,
`Ich erinnere mich an Frankfurt wie an ein Wiederfinden.`,
`Du bist mein Ruhepol zwischen all dem Lärm.`,
`Ich liebe, wie du mein Herz wortlos beruhigst.`,
`Wir haben uns beim Essen neu erfunden.`,
`069 — unser kurzer Code, lange Bedeutung.`,
`Du bist das schönste Kapitel meiner Tage.`,
`Ich liebe, wie du beim Weinen die Welt erklärst.`,
`Unsere kleinen Rituale sind unsere größten Versprechen.`,
`Ich denke an dich und fühle sofort Wärme.`,
`Du hast mir Mut gegeben, wieder zu träumen.`,
`Wir tanzen durch die Straßen, als gäbe es kein Morgen.`,
`Ich liebe, wie du mein Essen kritisierst — und trotzdem teilst.`,
`Unsere Nächte sind voll von unfertigen Versprechen.`,
`Du bist mein Lieblings-„Komm her“ am frühen Morgen.`,
`Ich liebe, dass wir uns gegenseitig Heimat nennen können.`,
`069 — drei Zahlen, die unser Echo tragen.`,
`Du nimmst meine Hand und alles macht Sinn.`,
`Ich erinnere mich an unser erstes gemeinsames Lachen laut und lang.`,
`Unsere Liebe ist ein kleines, großes Abenteuer.`,
`Ich liebe, wie du mich in schlechten Zeiten hältst.`,
`Wir haben mehr Gemeinsamkeiten als Zufälle.`,
`Du bist meine tägliche kleine Rebellion.`,
`Ich denke an Hamburg und deine Hand in meiner.`,
`Unsere Erinnerungen sind wie kleine Lichtpunkte.`,
`Ich liebe, wie du beim Kochen die Zeit vergisst.`,
`Du bist die Person, die ich laut „für immer“ sagen kann.`,
`069 — unsere Traum-Postleitzahl.`,
`Ich liebe, wie du Süßes als Belohnung siehst.`,
`Wir machen aus Regentagen kleine Feste.`,
`Du hast mein Herz mit einfachen Gesten gewonnen.`,
`Unsere Gespräche sind immer ehrlich und warm.`,
`Ich denke an das erste Mal, als du meinen Namen flüstertest.`,
`Du bist mein sicherer, offener Hafen.`,
`Ich liebe, wie du mich durch schlechte Tage bringst.`,
`Unsere Küsse haben mehr Gewicht als jede Stadt.`,
`Ich erinnere mich an die Langsamkeit unserer besten Tage.`,
`Du bist mein Lieblingsmensch und mein größter Halt.`
  ];

  // 📅 Tageszitat berechnen
  const startDate = new Date("2024-09-15");
  const today = new Date();
  const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const index = diff % quotes.length;
  const todayQuote = quotes[index] || "Ich denke an dich.";

  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  const formattedDate = today.toLocaleDateString("de-DE", options);
  quoteDate.textContent = formattedDate;
  quoteEl.textContent = todayQuote;

  // ❤️ Überaschung nur am 7. Oktober 2025
  const specialDate = "2025-10-07";
  const todayISO = today.toISOString().split("T")[0];

  if (todayISO === specialDate) {
    // Mini-Overlay für Überraschung
    const surpriseOverlay = document.createElement("div");
    surpriseOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      background-color: rgba(0,0,0,0.92);
      color: #c5a3ff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 999;
      font-family: 'Dancing Script', cursive;
      font-size: 1.8rem;
      transition: opacity 1s ease;
    `;
    surpriseOverlay.innerHTML = `
      <p>Babe?... willst du lachen? 😏</p>
      <div style="margin-top: 2rem;">
        <button id="yesBtn" style="margin:0 1rem; background:#3b0069; color:#fff; border:none; border-radius:8px; padding:0.8rem 1.8rem; font-size:1.2rem; cursor:pointer;">Ja 😄</button>
        <button id="noBtn" style="margin:0 1rem; background:#3b0069; color:#fff; border:none; border-radius:8px; padding:0.8rem 1.8rem; font-size:1.2rem; cursor:pointer;">Nein 🙈</button>
      </div>
    `;
    document.body.appendChild(surpriseOverlay);

    const yesBtn = surpriseOverlay.querySelector("#yesBtn");
    const noBtn = surpriseOverlay.querySelector("#noBtn");

    const showImage = (img) => {
      surpriseOverlay.innerHTML = `
        <img src="${img}" style="max-width:80%; max-height:80%; border-radius:12px; box-shadow:0 0 20px rgba(0,0,0,0.8);" />
      `;
      setTimeout(() => {
        surpriseOverlay.style.opacity = "0";
        setTimeout(() => {
          surpriseOverlay.remove();
          intro.classList.remove("hidden");
        }, 1000);
      }, 4000);
    };

    yesBtn.addEventListener("click", () => showImage("bild22.jpg"));
    noBtn.addEventListener("click", () => showImage("bild23.jpg"));
  } else {
    // Normales Verhalten an allen anderen Tagen
    intro.classList.remove("hidden");
  }

  // 💜 Intro-Button
  introBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    quoteBox.classList.remove("hidden");
  });

  // 💬 „Okay“-Button
  ackBtn.addEventListener("click", () => {
    window.close();
  });
});
