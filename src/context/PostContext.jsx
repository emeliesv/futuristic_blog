import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts")) || [
      {
        id: 1,
        title: "My first blogpost",
        bodyText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis lectus ligula, a porta lacus bibendum pulvinar. Curabitur consectetur odio vel ornare condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed rhoncus euismod placerat. In in facilisis enim. Proin massa magna, ornare a dolor a, interdum sollicitudin tortor. Mauris sollicitudin vehicula mattis. Donec vitae finibus quam. Nulla ultricies ultrices enim, et placerat diam venenatis id. Quisque at eleifend eros, vitae mollis neque. Morbi condimentum ipsum cursus lorem tempor, sed condimentum tortor condimentum. Morbi eu risus vitae leo aliquet mollis in et enim.     Pellentesque vitae erat consequat, maximus magna in, aliquam sapien. Nam ac porta lectus. Duis ex eros, tristique id augue sed, suscipit vestibulum leo. Cras fringilla sollicitudin nunc accumsan tristique. In vulputate at mi nec imperdiet. Maecenas ultricies justo sit amet tortor euismod, eget tempor elit congue. Etiam sodales dictum posuere. Praesent vulputate aliquet tellus ac consequat. Phasellus dui tellus, tincidunt id porttitor nec, hendrerit eu lorem.",
        author: "Anonymous",
        category: "Everyday",
      },
      {
        id: 2,
        title: "Get Ready With Me: En Dag i Mitt Liv ✨🛍️",
        bodyText:
          "Hej allihopa! 👋 Jag heter Sofia och jag är 13 år gammal. Idag tänkte jag göra ett 'Get Ready With Me'-inlägg så ni får följa med mig under en vanlig dag i mitt liv. Häng med! Morgonrutin 🌅 Min dag börjar alltid med att jag snoozar min väckarklocka minst tre gånger. 😂 När jag äntligen går upp ur sängen, går jag direkt till badrummet för att tvätta ansiktet och borsta tänderna. Att känna sig fräsch på morgonen är superviktigt! 🧼🪥 Smink och Hår 💄💇‍♀️Efter att ha tvättat ansiktet är det dags för smink. Jag använder en lätt foundation, lite concealer för att täcka finnar, och såklart mascara för att få mina ögon att poppa. 💁‍♀️✨ När sminket är klart är det dags för håret. Jag brukar oftast platta det eller göra lösa lockar, beroende på mitt humör. Idag blev det platt hår! 💆‍♀️ Kläder och Accessoarer 👗💍Nu är det dags att välja kläder. Idag valde jag mina favoritjeans och en mysig hoodie eftersom det är lite kallt ute. Jag älskar att matcha mina kläder med snygga accessoarer, så jag tog på mig några armband och min favoritkedja. ✨Frukost och Skola 🥣🏫Efter att jag klätt mig är det dags för frukost. Jag älskar att äta smoothie bowls, så idag gjorde jag en med banan, jordgubbar och lite granola på toppen. Supergott och mättande! 🍓🍌 När frukosten är klar, packar jag min ryggsäck och beger mig till skolan. Jag går tillsammans med mina vänner och vi har alltid så kul på vägen dit. 🏫 Efter Skolan 🎒🍕 Efter en lång dag i skolan är det äntligen dags att gå hem. Idag ska jag träffa mina kompisar på pizzerian för att äta och hänga. Vi brukar prata om allt möjligt och ha jättekul tillsammans. 🍕👯‍♀️ Kvällsrutin 🌙🛁 När jag kommer hem igen är det dags för läxor. Inte lika kul, men det måste göras! Efter läxorna tar jag en dusch och byter om till pyjamas. Jag älskar att avsluta dagen med att läsa en bok eller kolla på en serie innan jag somnar. 📚💤 Det var min dag! Tack för att ni följde med mig. Hoppas ni gillade att se hur jag förbereder mig för en vanlig dag. Kommentera gärna om ni vill se fler inlägg som detta. Puss och kram! 😘🦋 /Sofia",
        author: "TjaTjaSofia",
        category: "Everyday",
      },
      {
        id: 3,
        title: "En Dag på Gallerian med Mig ✨🛍️",
        bodyText:
          "Hej alla! 🙋‍♀️ I dag var jag på gallerian med mina kompisar, och det var så kul! Först gick vi till våra favoritbutiker. Jag köpte en ny tröja och några smycken. Efter shoppingen tog vi en paus och åt glass. 🍦 Vi pratade och skrattade så mycket. När jag kom hem visade jag allt jag köpt för min familj och gjorde en liten unboxing-video för mina fans på TikTok. Det är alltid så spännande att packa upp allt och prova mina nya saker igen. 🎁✨ Det var verkligen en toppendag! Kan knappt vänta på nästa gång vi går dit. 😃",
        author: "TjaTjaSofia",
        category: "Everyday",
      },
      {
        id: 4,
        title: "Middagskatastrofen 😖🍽️",
        bodyText:
          "Hej hej! Sofia här igen. Idag måste jag bara berätta om något hemskt som hände till middag. Min pappa bestämde sig för att laga mat... och det var en total katastrof. 😖Han försökte göra någon slags konstig gryta med massa grönsaker som smakade konstigt och såg ännu värre ut. Jag försökte verkligen äta, men det gick inte. Till slut gav jag upp och åt en macka istället. 🥪Hoppas vi får något godare imorgon! Vad är det värsta ni har ätit till middag? Kommentera gärna! 😅🍴",
        author: "TjaTjaSofia",
        category: "Everyday",
      },
      {
        id: 5,
        title: "Bilar genom tiderna 🚗",
        bodyText:
          "Hej, Lars här! I dag tänkte jag dela med mig av min fascination för bilarnas utveckling genom tiderna. Från de tidiga modellerna med ångmaskiner till dagens elbilar är det fantastiskt att se hur tekniken har utvecklats. Jag minns min första bil, en gammal Volvo från 70-talet – en riktig trotjänare! Vad var er första bil? Kommentera gärna nedan! 🚙💨",
        author: "Lars",
        category: "Cars",
      },
      {
        id: 6,
        title: "Min drömbil 🏎️",
        bodyText:
          "Hej igen, Lars här! Låt oss prata om drömbilar. Om jag fick välja en bil att äga, skulle det vara en Ferrari F8 Tributo. Den är inte bara otroligt snygg, men också en av de snabbaste bilarna på marknaden. Jag älskar kombinationen av kraft och elegans som en Ferrari erbjuder. Vilken bil är er drömbil? Dela med er i kommentarerna! 🏁✨",
        author: "Lars",
        category: "Cars",
      },
      {
        id: 7,
        title: "Hållbarhet på vägen 🌱",
        bodyText:
          "Hej, Lars här igen! Idag vill jag ta upp ett viktigt ämne – hållbarhet. Elbilar blir alltmer populära och det är lätt att förstå varför. De minskar utsläppen och är ofta billigare i drift. Tesla, Nissan Leaf och BMW i3 är några av de ledande modellerna. Har ni funderat på att byta till elbil? Vad tycker ni om utvecklingen mot mer hållbara fordon? 🌍🔋Tack för att ni läser mina inlägg! 🚗",
        author: "Lars",
        category: "Cars",
      },
      {
        id: 8,
        title: "Tips för en Blomstrande Trädgård 🌸",
        bodyText:
          "Hej, Delilah här! Våren är äntligen här och det är dags att få trädgården att blomstra. Ett av mina bästa tips är att plantera perenner – de återkommer år efter år och kräver lite underhåll. Lavendel, rosor och pioner är några av mina favoriter. Glöm inte att ge växterna rätt näring och vatten, särskilt under de varma sommarmånaderna. Vad är era favoritväxter? Dela gärna med er! 🌷🌿",
        author: "Delilah",
        category: "Garden",
      },
      {
        id: 9,
        title: "Skapa en Avkopplande Trädgårdshörna 🪴",
        bodyText:
          "Hej allihopa, Delilah här igen! Idag vill jag prata om hur man skapar en avkopplande hörna i trädgården. Börja med bekväma möbler – en hängmatta eller en mysig fåtölj fungerar utmärkt. Lägg till några krukväxter och ljusslingor för att skapa en inbjudande atmosfär. Ett litet vatteninslag, som en fontän eller en liten damm, kan också göra underverk för att skapa en lugn miljö. Hur ser er drömträdgård ut? 🪴✨",
        author: "Delilah",
        category: "Garden",
      },
      {
        id: 10,
        title: "Att Laga Mat för Vänner: En Hjärtlig Upplevelse",
        bodyText:
          "Hej, Reza här! Att laga mat åt vänner är en av mina största glädjeämnen i livet. Det är något speciellt med att samlas runt matbordet och njuta av god mat och gott sällskap. När jag bjuder in vänner på middag, tycker jag om att experimentera med olika rätter och smaker. Det handlar inte bara om att fylla magen, utan om att skapa minnen och dela glädje. En av mina favoriträtter att laga för vänner är tacos – men med en liten tvist! Tacos är perfekta för en avslappnad middag eftersom alla kan bygga sina egna enligt smak. Jag gillar att sätta min egen prägel på klassiska tacos genom att tillföra oväntade ingredienser och smaker. En av mina specialiteter är fisk-tacos med en fräsch mangosalsa. Det är enkelt att göra men känns ändå lyxigt och unikt. Den vita fisken är kryddad med en härlig blandning av olivolja, spiskummin och paprikapulver innan den steks till perfektion. Tacosarna serveras sedan med en uppfriskande mangosalsa, gjord med frisk mango, paprika, rödlök och limejuice. Toppa med avokado, sallad och gräddfil för en smakrik och lättlagad måltid som är perfekt att dela med vänner! 🌮✨",
        author: "Reza",
        category: "Cooking",
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};
