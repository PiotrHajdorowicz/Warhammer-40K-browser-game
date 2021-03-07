

let gameon = document.querySelector(".gameon");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let reset = document.querySelector(".reset");
let message = document.querySelector(".message");


gameon.addEventListener("click", () => {
    message.innerHTML = "Siły Horusa nadciągają! Wybierz jedną z dostępnych jednostek i obejmij nad nią dowodzenie!";
gameon.style.display="none";
one.style.display = "inline";
two.style.display = "inline";
three.style.display = "inline";
four.style.display = "none";
five.style.display = "none";
six.style.display = "none";

    


});

one.addEventListener("click", () => {
    message.innerHTML = "Terminatorzy na twe rozkazy Kapitanie! Zdrajcy zajęli pozycje i właśnie ostrzeliwują naszą wschodnią flankę! Wydaj rozkaz, a pogruchotamy im kości naszymi młotami i rękawicami energetycznymi!";
    message.classList.add("terminators", "firstEncounter");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "inline";
    five.style.display = "inline";
    six.style.display = "inline";


    

});

two.addEventListener("click", () => {
    message.innerHTML = "Czołg Predator na twe rozkazy Kapitanie! Zdrajcy zajęli pozycje i właśnie ostrzeliwują naszą wschodnią flankę! Wydaj rozkaz, a zmieciemy ich naszymi działami!";
    message.classList.add("predatorTank", "firstEncounter");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "inline";
    five.style.display = "inline";
    six.style.display = "inline";

});

three.addEventListener("click", () => {
    message.innerHTML = "Taktyczna drużyna piechoty na twe rozkazy Kapitanie! Zdrajcy zajęli pozycje i właśnie ostrzeliwują naszą wschodnią flankę! Wydaj rozkaz, a oskrzydlimy ich i zdejmiemy precyzyjnym ostrzałem!";
    message.classList.add("tacticalSquad", "firstEncounter");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "inline";
    five.style.display = "inline";
    six.style.display = "inline";
});

reset.addEventListener("click", () => {
    message.innerHTML = "Jest 31 Tysiąclecie. To czas legend. Ludzkość sięgnęła gwiazd, a władca ludzkości zjednoczył ją by zaprowadzić pokój i dobrobyt. Jednak Galaktyka płonie. Wizja Imperatora o wspaniałej ludzkości jest ruiną. Jego ulubiony syn, Horus odwrócił się od światła ojca i oddał straszliwym bogom Chaosu. Jego armie, wspaniali Kosmiczni Marines są związani w boju brutalnej wojny domowej. Są teraz podzieleni. Nastał Czas Mroku. Czy obejmemiesz dowodzenie nad pozostałymi lojalistymi, którzy staną do nierównej walki by dać niezbędny czas do ucieczki Fregacie Einsenstein która powróci na Terrę i zawiadomi Imperatora na czas o zdradzie ?";
    gameon.style.display = "inline-block";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    six.style.display = "none";
    message.classList.remove("firstEncounter");
    message.classList.remove("secondEncounter");
    message.classList.remove("thirdEncounter");
    message.classList.remove("terminators");
    message.classList.remove("predatorTank");
    message.classList.remove("tacticalSquad");

});



function melee() {
    if (message.classList.contains("terminators") && message.classList.contains("firstEncounter")) {
        message.innerHTML = "Terminatorzy rozpoczęli szturm na wrogie pozycje! Dzięki ich odwadze, uzbrojeniu i twoim niewątpliwym umiejętnościom przywódczym zdradziecki oddział został rozniesiony w pył. Taki los spotka każdego zdrajcę! Niestety w tej chwili usłyszałeś potęgujący warkot silników zwiastujących nadciągające spore siły Horusa ze wsparciem pancernym. Jakie są Twoje następne rozkazy dla naszych żołnierzy?";
        message.classList.add("secondEncounter");
        message.classList.remove("firstEncounter");

    }


    else if (message.classList.contains("terminators") && message.classList.contains("thirdEncounter")) {
        message.innerHTML = "Pomimo że wrogi kapitan posiadał silną obstawę, udało Ci się go wraz ze swoją kompanią Terminatorów zgładzić i przejąć lądowisko, choć poniosłeś spore straty. Z przechwyconych raportów wynika iż na Wasze pozycje kierują się kolejne siły nieprzyjaciół. Małe szanse, że uda Ci się przeżyć. Jednak wygląda na to że Eisenstainowi udało się uciec. Spełniłeś swój obowiązek wobec Imperatora. Twoja śmierć nie pójdzie na marne i z pewnością zostaniesz pośmiertnie uhonorowany wraz z resztą swych braci za swe dokonania. Dziękujemy za grę!";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }
    else {
        message.innerHTML = "Wróg posiadający przewagę ogniową wraz bronią przeciwpancerną, którą można łatwo zniszyczć siły pancerne na bliskim dystansie powstrzymuje Twój oddział przed osiągnięciem ich pozycji i związania ich walką wręcz. Ponosisz porażkę! ";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }
}
five.addEventListener("click", melee);

function fire() {
    if (message.classList.contains("firstEncounter") && message.classList.contains("predatorTank")
        ||(message.classList.contains("terminators")&& message.classList.contains("firstEncounter")) || (message.classList.contains("tacticalSquad") && message.classList.contains("firstEncounter"))) {
        message.innerHTML = "Twój oddział bez problemu radzi sobie z wrogimi zwiadowcami pozbywając się ich z bezpiecznej odległości. Dzięki ich odwadze i Twoim niewątpliwym umiejętnościom przywódczym zdradziecki oddział został rozniesiony w pył. Taki los spotka każdego zdrajcę! Niestety w tej chwili usłyszałeś potęgujący warkot silników zwiastujących nadciągające ogromne siły pancerne Horusa. Jakie są Twoje następne rozkazy dla naszych żołnierzy?";
        message.classList.add("secondEncounter");
        message.classList.remove("firstEncounter");

    }

    else if (message.classList.contains("thirdEncounter") && message.classList.contains("predatorTank") || message.classList.contains("tacticalSquad")) {
        message.innerHTML = "Pomimo że wrogi kapitan posiadał silną obstawę, nie stanowił on większego problemu dla czołgu predator czy dowódców posiadających taktyczne drużyny piechoty. Oddziały te z bezpiecznej odległości prowadząc ostrzał ze wzniesienia zgładziły go dzięki czemu przejąłeś posterunek z lądowskiem, i to bez większych strat. Z przechwyconych raportów wynika iż na Wasze pozycje kierują się kolejne siły nieprzyjaciół. Choć zachowałeś czołg oraz częśc piechoty nie wiadomo jak długo uda wam się utrzymywać pozycję. Jednak wygląda na to że Eisenstainowi udało się uciec. Spełniłeś swój obowiązek wobec Imperatora. Jeśli wyjdziesz z tego żywy z pewnością zostaniesz uhonorowany wraz z resztą swych braci za swe dokonania i zostanie Ci powierzone zadanie ściganie reszty zdrajców po całej galaktyce. Dziekujemy za grę!";
        message.classList.remove("thirdEncounter");
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }
    
    else if(message.classList.contains("thirdEncounter") && message.classList.contains("terminators"))  {
        message.innerHTML = "Terminatorzy może i mają poteżne uzbrojenie ale nie jest ono precyzyjne na dużych dystansach. Wróg był w stanie się okopać i sprowadzić posiłki, dzięki czemu przeprowadzi niedługo kolejne dewastujące ataki. Zawiodłeś Imperatora!"
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }

    
    else {
        message.innerHTML = "Taktyczne oddziały piechoty oraz Terminatorzy nie mają szans podczas wymiany ognia z tak liczebnym i silnie uzbrojonym przeciwnikiem, a pojedynczy czołg nie nawiele się zda. Wrogie siły najpierw was przyszpilają swym ciężkim uzbrojeniem, a potem dookonują oskrzydlenia i wykańczają. Ponosisz porażkę! ";
    }
}

six.addEventListener("click", fire);

function hide() {
    if (message.classList.contains("firstEncounter") && message.classList.contains("predatorTank")
        || (message.classList.contains("terminators") && message.classList.contains("firstEncounter"))|| (message.classList.contains("tacticalSquad") && message.classList.contains("firstEncounter")) ) {
        message.innerHTML = "Twoja opieszałość dała czas wrogowi na sprowadzenie posiłków i oflankowanie Twoich ludzi. Tym samym ponieśliście śmierć w boju za Imperatora.";
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }
    else if (message.classList.contains("secondEncounter") && message.classList.contains("predatorTank")
        || (message.classList.contains("terminators")&& message.classList.contains("secondEncounter")) || (message.classList.contains("tacticalSquad") &&message.classList.contains("secondEncounter"))) {
        message.innerHTML = "Dzięki pokonaniu wcześniejszych wrogich sił udało wam się zabezpieczeć umocniony punkt widokowy z którego udało się skutecznie koordynować ogień pozostałej sprawnej artylerii. Tym samym wróg dokonał strategicznego odwrotu ponosząc spore straty. Z kanału komunikacyjnego VOX dociera do Ciebie informacja, iż niedaleko Twojej pozycji wrogi Kapitan koordynuje ataki. Zdobądź jego posterunek niepozwalając mu uciec. Twoi żołnierze czekają na rozkaz.";
        message.classList.add("thirdEncounter");
        message.classList.remove("secondEncounter");
    }
    else {
        message.innerHTML = "Wasz oddział miał sukcesywnie spychać przeciwnika a nie bez przerwy chować się po kątach jak zwierzę zapędzone w narożnik. Artylerii skończyła się amunicja a przeciwnik umocnił swą pozycję i niedługo przeprowadzi dewastujący atak. Zawiodłeś Imperatora!"
        four.style.display = "none";
        five.style.display = "none";
        six.style.display = "none";
    }
}
four.addEventListener("click", hide);







