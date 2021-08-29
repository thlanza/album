import { Route } from "react-router-dom";
import { Gallery } from "./components/Gallery";
import { Home } from "./pages/Home";

let buzios = ['buzios-1','buzios-2','buzios-3','buzios-4','buzios-5','buzios-6',
'buzios-7','buzios-8','buzios-9','buzios-10','buzios-11','buzios-12','buzios-13',
'buzios-14','buzios-15','buzios-16'];
let duck = [
'duckAndDuckNiver2018-1','duckAndDuckNiver2018-2','duckAndDuckNiver2018-3','duckAndDuckNiver2018-4',
'duckAndDuckNiver2018-5','duckAndDuckNiver2018-6','duckAndDuckNiver2018-7','duckAndDuckNiver2018-8'];
let nachuva = [
'showNaChuva-1','showNaChuva-2','showNaChuva-3','showNaChuva-4','showNaChuva-5',
'showNaChuva-6','showNaChuva-7','showNaChuva-8','showNaChuva-9','showNaChuva-10',
'showNaChuva-11','showNaChuva-12','showNaChuva-13','showNaChuva-14','showNaChuva-15'
];
let zecabaleiro = [
'zeca-baleiro-1','zeca-baleiro-2','zeca-baleiro-3'
];
let paisagens = [
'paisagens-1','paisagens-2','paisagens-3','paisagens-4','paisagens-5','paisagens-6',
'paisagens-7','paisagens-8','paisagens-9','paisagens-10','paisagens-11','paisagens-12',
'paisagens-13','paisagens-14','paisagens-15','paisagens-16','paisagens-17','paisagens-18',
];
let outback = [
'Outback-1','Outback-2','Outback-3','Outback-4','Outback-5',
'Outback-8','Outback-9','Outback-10','Outback-11'
];
let paris6 = [
'Paris6-2018-1','Paris6-2018-2','Paris6-2018-3','Paris6-2018-4',
];
let parapente = [
'parapente-2018-1'
];
let ouropreto = [
'OuroPreto-1','OuroPreto-2','OuroPreto-3','OuroPreto-4','OuroPreto-5','OuroPreto-6',
];
let ourobranco = [
'OuroBranco-1','OuroBranco-2','OuroBranco-3','OuroBranco-4','OuroBranco-5','OuroBranco-6',
'OuroBranco-7','OuroBranco-8','OuroBranco-9'
];
let montagens = [
'montagens-1','montagens-2','montagens-3','montagens-4','montagens-5','montagens-6',
'montagens-7','montagens-8','montagens-9','montagens-10','montagens-11'
];
let gatos = [
'gatos1','gatos2','gatos3','gatos4','gatos5','gatos6','gatos7','gatos8','gatos9',
'gatos10','gatos11','gatos12','gatos13','gatos14','gatos15','gatos16','gatos17','gatos18',
'gatos19','gatos20','gatos21','gatos22','gatos23','gatos24','gatos25'
];
let guanabara = [
'guanabara-2018-1','guanabara-2018-2','guanabara-2018-3',
];
let foz = [];
let pe_de_goiaba = [
'pe de goiaba 1', 'pe de goiaba 2', 'pe de goiaba 3', 'pe de goiaba 4'
]
for(let i = 1; i < 80; i++){
    foz.push('fozDoIguacu-'+i)
};
let formatura = [
'formatura-1','formatura-2','formatura-3',
];
let deadFish = [
    'deadFish-1','deadFish-2'
];
let aClassificar = [];
for(let i = 1; i<19; i++) {
    aClassificar.push('aClassificar-'+i);
};
let jaToInno = [
 'jaToInno1', 'jaToInno2', 'jaToInno3', 'jaToInno4'
];
let jaToInno2 = [
    'jaToInno1', 'jaToInno2', 'jaToInno3', 'jaToInno4', 'jaToInno5'
];

export const ApplicationRoutes = () => (
    <>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/buzios"><Gallery images={buzios} name="Búzios 2018" /></Route>
        <Route exact path="/duck"><Gallery images={duck} name="Aniversário do Thiago no Duck and Duck 2018"/></Route>
        <Route exact path="/nachuva"><Gallery images={nachuva} name="Show do Sepultura que não teve na chuva"/></Route>
        <Route exact path="/zecabaleiro"><Gallery images={zecabaleiro} name="Show do Zeca Baleiro"/></Route>
        <Route exact path="/paisagens"><Gallery images={paisagens} name="Paisagens"/></Route>
        <Route exact path="/outback"><Gallery images={outback} name="Outback"/></Route>
        <Route exact path="/paris6"><Gallery images={paris6} name="Paris 6"/></Route>
        <Route exact path="/parapente"><Gallery images={parapente} name="Parapente"/></Route>
        <Route exact path="/ouropreto"><Gallery images={ouropreto} name="Ouro Preto"/></Route>
        <Route exact path="/ourobranco"><Gallery images={ourobranco} name="Ouro Branco"/></Route>
        <Route exact path="/montagens"><Gallery images={montagens} name="Montagens"/></Route>
        <Route exact path="/gatos"><Gallery images={gatos} name="Gatos"/></Route>
        <Route exact path="/guanabara"><Gallery images={guanabara} name="Guanabara"/></Route>
        <Route exact path="/foz"><Gallery images={foz} name="Foz do Iguaçu"/></Route>
        <Route exact path="/formatura"><Gallery images={formatura} name="Formatura da Carol em Hospedagem no Cefet"/></Route>
        <Route exact path="/deadfish"><Gallery images={deadFish} name="Show do Dead Fish"/></Route>
        <Route exact path="/pe_de_goiaba"><Gallery images={pe_de_goiaba} name="Pé de Goiaba, 31/07/2021"/></Route>
        <Route exact path="/a_classificar"><Gallery images={aClassificar} name="Fotos a Classificar"/></Route>
        <Route exact path="/jatoinno1"><Gallery images={jaToInno} name="JaToInno primeira vez, 20/08"/></Route>
        <Route exact path="/jatoinno2"><Gallery images={jaToInno2} name="JaToInno segunda vez, 27/08"/></Route>
    </>
)