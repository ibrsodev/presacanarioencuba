window.onload = carga('si');

var carousel = document.querySelector('.carousel');
var slider = document.querySelector('.slider');

var next = document.getElementsByClassName('next')[0];
var prev = document.getElementsByClassName('prev')[0];
var direction = -1;

function carga(id, clasificacion) {
    var espacio = document.getElementsByClassName('espacioResponsive')[0];
    var div = document.createElement('div');
    div.className = 'divTexto';
    if (id == 'si' || clasificacion == 'no') {
        var h3Principal = document.createElement('h3');
        var pPrincipal = document.createElement('p');
        var texto1Principal = document.createTextNode('Grupo de Cría Los Cabezones:');
        var texto2Principal = document.createTextNode('Grupo de amigos, aficionados y amantes de la raza, cinco países (Uruguay, Cuba, España, Brasil y Argentina) trabajando en conjunto buscando la homogeneización fenotípica y pensando en la función original del presa canario, un perro con muy buena predisposición para la guardia, gran capacidad de agarre, muy funcional para la caza mayor sin descuidar la tipicidad y la estructura del perro. Cada cruza se estudia meticulosamente intentando hacer un balance entre un perro equilibrado, rústico, poderoso estructuralmente, respetando siempre el estándar de la raza ....');
        h3Principal.style.fontStyle = 'bold';
        var h3 = document.createElement('h3');
        var p = document.createElement('p');
        var texto1 = document.createTextNode('Breve Resumen Histórico:');
        var texto2 = document.createTextNode('Perro molosoide originario de las Islas de Tenerife y Gran Canaria, en el Archipiélago Canario. Surgido como resultado de cruces entre el “majorero”, perro de ganado prehispánico oriundo de las islas y perros molosoides llegados al archipiélago. Estos cruces originaron una agrupación étnica de perros tipo dogo, de tamaño medio grande, de color atigrado o leonado y manchados en blanco, de morfología robusta, propia de un moloso pero con agilidad y empuje, de gran temperamento, rústico, de carácter activoy fiel. Durante los siglos XVI y XVII, su población aumentó considerablemente, existiendo numerosas alusiones al mismo en los textos históricos anteriores a la conquista y sobre todo a los “Cedularios del Cabildo”, en los que se explican las funciones que realizan, esencialmente como guardián y cuidado del ganado vacuno.');
    }
    if (id == 'no') {
        document.querySelector('.menuD').classList.toggle('showMenu');
        while (espacio.hasChildNodes()) {
            var elimina = espacio.firstChild;
            espacio.removeChild(elimina);
        }
    }
    muestraContenedorInicial();
    if (id == 'no' && clasificacion != 'no') {
        actualizaContenido(clasificacion);
    }
    if (id == 'si' || clasificacion == 'no') {
        pPrincipal.appendChild(texto2Principal);
        h3Principal.appendChild(texto1Principal);
        p.appendChild(texto2);
        h3.appendChild(texto1);
        div.appendChild(h3Principal);
        div.appendChild(pPrincipal);
        div.appendChild(h3);
        div.appendChild(p);
        espacio.appendChild(div);
    }
    muestraFotosPrincipales();
    muestraFooter();
    if (document.body.style.marginBottom == '240px' || document.body.style.marginBottom == '0px') {
        document.body.style.marginBottom = '200px';
    }
}

function actualizaContenido(id) {
    var espacio = document.getElementsByClassName('espacioResponsive')[0];
    var divTexto = document.createElement('div');
    divTexto.className = 'divTexto';
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    var div = document.createElement('div');
    var img = document.createElement('img');
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.float = 'left';
    img.style.marginRight = '10px';
    img.style.marginTop = '10px';


    if (id == 'clasificacion') {
        var texto1 = document.createTextNode('CLASIFICACIÓN FCI: ');
        var texto2 = document.createTextNode('Grupo 2 Pinscher y Schnauzer-Molosoides – Perros tipo de Montaña y Boyeros suizos. Sección 2.1 Molosoides - tipo dogo. Sin prueba de trabajo.');
        img.style.background = 'url(./img/unica.jpg)';

    }
    else if (id == 'RG') {
        var texto1 = document.createTextNode('APARIENCIA GENERAL: ');
        var texto2 = document.createTextNode('Perro molosoide de talla medio grande, perfil rectilíneo y máscara negra. Robusto y bien proporcionado. ');
        var texto3 = document.createTextNode('PROPORCIONES IMPORTANTES: ');
        var texto4 = document.createTextNode('El cuerpo es más largo que su altura a la cruz. Esta característica es más acentuada en las hembras. La proporción del cráneo-antecara es de 60-40 %. El ancho del cráneo es 3/5 del largo total de la cabeza. La distancia del codo al suelo debe ser el 50 % de la altura a la cruz en los machos y algo menor en las hembras. ');
        var h3_1 = document.createElement('h3');
        var p_1 = document.createElement('p');
        h3_1.appendChild(texto3);
        p_1.appendChild(texto4);
        div.appendChild(h3_1);
        div.appendChild(p_1);
        img.style.background = 'url(./img/r_generales.jpg)';
    }
    else if (id == 'Temp') {
        var texto1 = document.createTextNode('TEMPERAMENTO / COMPORTAMIENTO: ');
        var texto2 = document.createTextNode('Mirada calma, expresión atenta. Especialmente adecuado como perro de guardia y tradicionalmente utilizado para cuidar el ganado. Temperamento balanceado y muy seguro de sí mismo. Ladrido bajo y profundo. Obediente y dócil con los miembros de la familia, muy devoto a su amo pero puede ser reservado con los extraños. Actitud confidente, noble y algo distante. Cuando está alerta su postura es firme con actitud alerta. ');
        img.style.background = 'url(./img/temperamento.jpg)';
    }
    else if (id == 'RC-F') {
        var texto1 = document.createTextNode('CABEZA: ');
        var texto2 = document.createTextNode('Maciza, braquicefálica y compacta en apariencia cubierta de piel gruesa. Su forma tiende hacia un cubo levemente elongado. Las líneas cráneo- faciales son paralelas o levemente convergentes. ');
        var texto3 = document.createTextNode('CRÁNEO: Algo convexo en dirección anteroposterior y transversal. El hueso frontal tiende a ser plano. El ancho es casi idéntico a su largo. Arcos cigomáticos pronunciados con músculos de las mejillas y mandíbulas bien desarrollados pero no prominentes, cubiertos de piel suelta. Protuberancia occipital sólo levemente marcada.')
        var texto4 = document.createTextNode('STOP: El stop es pronunciado pero no abrupto. El pliegue entre los lóbulos frontales es bien definido y aproximadamente dos tercios del tamaño del cráneo.');
        var texto5 = document.createTextNode('TRUFA: Ancha, fuertemente pigmentada de negro. En la misma línea del hocico. Fosas nasales grandes para facilitar la respiración.');
        var texto6 = document.createTextNode('HOCICO: Más corto que el cráneo, por lo general aproximadamente el 40 % del total del largo de la cabeza. El ancho es 2/3 del ancho del cráneo. Su base es bien ancha afinándose levemente hacia la nariz. Caña nasal plana y recta sin surcos. ');
        var texto7 = document.createTextNode('LABIOS: El labio superior es colgante aunque no en exceso. Visto de frente el labio superior e inferior se unen formando una V invertida. Los belfos son levemente divergentes. El interior de los labios es de color oscuro. ');
        var texto8 = document.createTextNode('MANDíBULAS / DIENTES: Mordida en tijera o mordida levemente prognática, max. 2 mm. Se admite la mordida en pinza pero no es deseada debido al desgaste dentario que produce. Los caninos presentan amplia distancia transversal. Los dientes son anchos con base de implantación fuerte. Molares grandes, incisivos pequeños y caninos bien desarrollados. ');
        var p_1 = document.createElement('p');
        var p_2 = document.createElement('p');
        var p_3 = document.createElement('p');
        var p_4 = document.createElement('p');
        var p_5 = document.createElement('p');
        var p_6 = document.createElement('p');
        p_1.appendChild(texto3);
        p_2.appendChild(texto4);
        p_3.appendChild(texto5);
        p_4.appendChild(texto6);
        p_5.appendChild(texto7);
        p_6.appendChild(texto8);
        div.appendChild(p_1);
        div.appendChild(p_2);
        div.appendChild(p_3);
        div.appendChild(p_4);
        div.appendChild(p_5);
        div.appendChild(p_6);
        img.style.background = 'url(./img/cabeza.jpg)';
    }
    else if (id == 'Ojos') {
        var texto1 = document.createTextNode('OJOS: ');
        var texto2 = document.createTextNode('Ligeramente ovalados, de tamaño medio a grande. Colocados bien separados pero nunca hundidos o protuberantes. Párpados negros y bien apretados, nunca caídos. El color varía de marrón oscuro a medio dependiendo del color del manto. Nunca deben ser claros. ');
        img.style.background = 'url(./img/ojo.jpg)';
    }
    else if (id == 'orejas') {
        var texto1 = document.createTextNode('OREJAS: ');
        var texto2 = document.createTextNode('Tamaño medio, colocadas bien separadas con pelo corto y fino. Caen naturalmente a ambos lados de la cabeza. Si están plegadas tienen forma de rosa. Su inserción es levemente por sobre el nivel de los ojos. Orejas con una inserción muy alta o muy juntas se consideran inusuales. En países dónde se permite su amputación deben ser erectas. ');
        img.style.background = 'url(./img/oreja.jpg)';
    }
    else if (id == 'cuello') {
        var texto1 = document.createTextNode('CUELLO: ');
        var texto2 = document.createTextNode('Más corto que el largo de la cabeza. Piel en su parte inferior suelta formando una leve papada. Sólido y derecho, tiende a ser cilíndrico y muscular. ');
        img.style.background = 'url(./img/cuello.jpg)';
    }
    else if (id == 'cuerpo') {
        var texto1 = document.createTextNode('CUERPO: ');
        var texto2 = document.createTextNode('Largo, ancho y profundo. ');
        var texto3 = document.createTextNode('Línea Superior: Recta, sin deformaciones sostenida por músculos bien desarrollados pero poco visibles. Elevándose levemente desde la cruz hacia la grupa. La altura a la grupa es 1 – 2 cm mayor que la altura a la cruz. ');
        var texto4 = document.createTextNode('Grupa: Longitud media, ancha y redondeada. No debe ser larga porque limitaría su movimiento. Las hembras normalmente son más anchas. ');
        var texto5 = document.createTextNode('Pecho: De gran capacidad y músculos pectorales bien definidos. Visto tanto de frente como de perfil debe estar bien descendido, por lo menos hasta el nivel de los codos. El perímetro torácico por lo general es igual a la altura a la cruz más 45 %. Costillas bien arqueadas. ');
        var texto6 = document.createTextNode('Línea inferior y vientre: Ligeramente recogida y nunca descendida. Los flancos solo levemente pronunciados. ');
        var p_1 = document.createElement('p');
        var p_2 = document.createElement('p');
        var p_3 = document.createElement('p');
        var p_4 = document.createElement('p');
        p_1.appendChild(texto3);
        p_2.appendChild(texto4);
        p_3.appendChild(texto5);
        p_4.appendChild(texto6);
        div.appendChild(p_1);
        div.appendChild(p_2);
        div.appendChild(p_3);
        div.appendChild(p_4);
        img.style.background = 'url(./img/cuerpo.jpg)';
    }
    else if (id == 'cola') {
        var texto1 = document.createTextNode('COLA: ');
        var texto2 = document.createTextNode('Gruesa en la base afinándose hacia la punta, alcanzando no más allá de la altura del corvejón. Inserción media. Durante el movimiento la eleva en forma de sable pero sin encorvarse o apoyarse sobre el dorso. En reposo cuelga derecha con una leve curva hacia el final. ');
        img.style.background = 'url(./img/cola.jpg)';
    }
    else if (id == 'extre') {
        var texto1 = document.createTextNode('MIEMBROS ANTERIORES: ');
        var texto2 = document.createTextNode('Hombros con buena inclinación. Brazos bien angulados y oblicuos. Antebrazo bien balanceado, derechos, huesos fuertes y buena musculatura. Los codos no deben estar pegados al costillar ni abiertos hacia fuera. Metacarpos muy sólidos y ligeramente inclinados. Pies anteriores de gato con dedos redondeados, no muy juntos. Las almohadillas plantares son muy desarrolladas y negras. Las uñas son oscuras, blancas deben evitarse aunque puede suceder acorde al color del manto.');
        var texto3 = document.createTextNode('MIEMBROS POSTERIORES: ');
        var texto4 = document.createTextNode('Vistos de atrás fuertes y paralelos sin desviaciones. Muslos largos y muy musculosos. La angulación de la rodilla no es muy pronunciada pero no debe ser insuficiente. Metatarsos siempre bien descendidos. Pies posteriores ligeramente más largos que los delanteros y de similares características.');
        var h3_1 = document.createElement('h3');
        var p_1 = document.createElement('p');
        p_1.appendChild(texto4);
        h3_1.appendChild(texto3);
        div.appendChild(h3_1);
        div.appendChild(p_1);
        img.style.background = 'url(./img/extremidades.jpg)';
    }
    else if (id == 'mov') {
        var texto1 = document.createTextNode('MOVIMIENTO: ');
        var texto2 = document.createTextNode('Durante el movimiento, el Presa Canario es ágil y elástico cubriendo bien el terreno. Paso largo. La cola es llevada hacia abajo y la cabeza sólo elevada levemente por sobre el nivel del dorso. Cuando está alerta, la cola y la cabeza son llevadas en alto. ');
        img.style.background = 'url(./img/mov.jpg)';
    }
    else if (id == 'piel') {
        var texto1 = document.createTextNode('PIEL: ');
        var texto2 = document.createTextNode('Gruesa y elástica. Más suelta sobre y alrededor del cuello. Cuando está alerta la piel sobre la cabeza forma pliegues simétricos que se conforman desde el pliegue entre los lóbulos frontales. ');
        var texto3 = document.createTextNode('MANTO: ');
        var texto4 = document.createTextNode('Pelo corto, áspero, liso sin subpelo (puede aparecer sobre el cuello y en la parte posterior del muslo). Más bien áspero al tacto. Muy corto y fino sobre las orejas, algo más largo sobre la cruz y en la parte posterior de los muslos. Con respecto al color todas las tonalidades de leonado hasta arena, desde un marrón oscuro hasta gris claro o rubio. Todas las tonalidades de atigrado hasta arena. Se aceptan marcas blancas sobre el pecho, en la base del cuello o garganta, pies anteriores y dedos de los pies osteriores pero esto debe ser mínimo. La máscara siempre es negra y no debe esparcirse por sobre el nivel de los ojos. ');
        var p_1 = document.createElement('p');
        var h3_1 = document.createElement('h3');
        p_1.appendChild(texto4);
        h3_1.appendChild(texto3);
        div.appendChild(h3_1);
        div.appendChild(p_1);
        img.style.background = 'url(./img/manto.jpg)';
    }
    else if (id == 'medidas') {
        var texto1 = document.createTextNode('TAMAÑO Y PESO:');
        var texto2 = document.createTextNode('Alzada a la cruz: Machos 60 a 66 cm, hembras 56 a 62 cm. En el caso de ejemplares muy típicos se admitirá 2 cm de tolerancia por sobre o debajo de los límites.');
        var texto3 = document.createTextNode('Peso: Machos 50 a 65 kg, hembras 40 a 55 kg.');
        var p_1 = document.createElement('p');
        p_1.appendChild(texto3);
        div.appendChild(p_1);
        img.style.background = 'url(./img/typ.jpg)';
    }
    else if (id == 'curvaC') {
        var texto1 = document.createTextNode('Curva de Desarrollo: ');
        var texto2 = document.createTextNode('PESO: Esta tabla es en base al seguimiento promedio de varios perros. Que un cachorro desarrolle distinto no indica que esté mal, la ganancia de peso corporal está predeterminada por muchos factores como talla, alimentación, constitución física, crianza etc.. (no funciona si el cachorro se cría obeso).');
        var texto3 = document.createTextNode('TALLA: El exceso de alimentación no determina la altura del perro, el crecimiento brusco trae problemas futuros, la administración extra de calcio sin estudios previos provoca graves problemas óseos (la cabeza del macho tarda más en hacerse).');
        var p_1 = document.createElement('p');
        p_1.appendChild(texto3);
        img.style.background = 'url(./img/tablaPeso.png)';
        var img2 = document.createElement('img');
        img.style.height = '250px';
        img2.style.width = '200px';
        img2.style.height = '200px';
        img2.style.float = 'right';
        img2.style.marginLeft = '10px';
        img2.style.marginTop = '10px';
        img2.style.background = 'url(./img/tablaTalla.png)';
        img2.style.backgroundPosition = 'center';
        img2.style.backgroundSize = 'cover';
        img2.style.backgroundRepeat = 'no-repeat';
        div.appendChild(img2);
        div.appendChild(p_1);

    }
    else if (id == 'faltas') {
        var texto1 = document.createTextNode('FALTAS: ');
        var texto2 = document.createTextNode('Cualquier desviación de los criterios antes mencionados se considera como falta y la gravedad de ésta se considera al grado de la desviación al estándar y de sus consecuencias sobre la salud y el bienestar del perro. Muy importante que los machos deben tener dos testículos de apariencia normal completamente descendidos en el escroto; sólo los perros funcionalmente y clínicamente saludables, con la conformación típica de la raza, deberán usarse para la crianza. ');
        var texto3 = document.createTextNode('FALTAS SEVERAS:');
        var texto4 = document.createTextNode('FALTAS DESCALIFICANTES:');
        var h3_1 = document.createElement('h3');
        var h3_2 = document.createElement('h3');
        h3_1.appendChild(texto3);
        h3_2.appendChild(texto4);
        var ul_1 = document.createElement('ul');
        var ul_2 = document.createElement('ul');
        var li_11 = document.createElement('li');
        var li_12 = document.createElement('li');
        var li_13 = document.createElement('li');
        var li_14 = document.createElement('li');
        var li_15 = document.createElement('li');
        var li_16 = document.createElement('li');
        var li_17 = document.createElement('li');
        var li_18 = document.createElement('li');
        var li_19 = document.createElement('li');
        var li_110 = document.createElement('li');
        var li_111 = document.createElement('li');
        var li_112 = document.createElement('li');
        var li_113 = document.createElement('li');
        var li_21 = document.createElement('li');
        var li_22 = document.createElement('li');
        var li_23 = document.createElement('li');
        var li_24 = document.createElement('li');
        var li_25 = document.createElement('li');
        var li_26 = document.createElement('li');
        var li_27 = document.createElement('li');
        var li_28 = document.createElement('li');
        var text_li_11 = document.createTextNode('Cualquier falta se considera severa cuando afecta le expresión y limita la tipicidad del perro. ');
        var text_li_12 = document.createTextNode('Proporciones incorrectas de la cabeza. ');
        var text_li_13 = document.createTextNode('Líneas cráneo-faciales extremadamente convergentes (stop demasiado pronunciado). ');
        var text_li_14 = document.createTextNode('Lomo y cruz a la misma altura. ');
        var text_li_15 = document.createTextNode('Posición incorrecta de las extremidades. ');
        var text_li_16 = document.createTextNode('Perfil cuadrado. ');
        var text_li_17 = document.createTextNode('Cabeza triangular, estrecha (no en forma de cubo) ');
        var text_li_18 = document.createTextNode('Cola fina, enroscada. Inserción alta. ');
        var text_li_19 = document.createTextNode('Dorso hundido o encarpado. ');
        var text_li_110 = document.createTextNode('Ojos claros (amarillos), muy juntos uno con el otro u oblicuos, hundidos o protuberantes. ');
        var text_li_111 = document.createTextNode('Mordida excesivamente prognática.');
        var text_li_112 = document.createTextNode('Máscara insuficiente. ');
        var text_li_113 = document.createTextNode('Ausencia de dientes (Excepto P1). ');
        var text_li_21 = document.createTextNode('Agresividad o extrema timidez. ');
        var text_li_22 = document.createTextNode('Cualquier perro mostrando claras señales de anormalidades físicas o de comportamiento.');
        var text_li_23 = document.createTextNode('Nariz totalmente despigmentada. ');
        var text_li_24 = document.createTextNode('Marcas blancas no aceptadas. ');
        var text_li_25 = document.createTextNode('Mordida enognática. ');
        var text_li_26 = document.createTextNode('Grupa más baja que la cruz. Línea superior inclinada. ');
        var text_li_27 = document.createTextNode('Ojos azules o con diferencia tonal. ');
        var text_li_28 = document.createTextNode('Cola amputada. ');

        li_11.appendChild(text_li_11);
        li_12.appendChild(text_li_12);
        li_13.appendChild(text_li_13);
        li_14.appendChild(text_li_14);
        li_15.appendChild(text_li_15);
        li_16.appendChild(text_li_16);
        li_17.appendChild(text_li_17);
        li_18.appendChild(text_li_18);
        li_19.appendChild(text_li_19);
        li_110.appendChild(text_li_110);
        li_111.appendChild(text_li_111);
        li_112.appendChild(text_li_112);
        li_113.appendChild(text_li_113);
        li_21.appendChild(text_li_21);
        li_22.appendChild(text_li_22);
        li_23.appendChild(text_li_23);
        li_24.appendChild(text_li_24);
        li_25.appendChild(text_li_25);
        li_26.appendChild(text_li_26);
        li_27.appendChild(text_li_27);
        li_28.appendChild(text_li_28);

        ul_1.appendChild(li_11);
        ul_1.appendChild(li_12);
        ul_1.appendChild(li_13);
        ul_1.appendChild(li_14);
        ul_1.appendChild(li_15);
        ul_1.appendChild(li_16);
        ul_1.appendChild(li_17);
        ul_1.appendChild(li_18);
        ul_1.appendChild(li_19);
        ul_1.appendChild(li_110);
        ul_1.appendChild(li_111);
        ul_1.appendChild(li_112);
        ul_1.appendChild(li_113);
        ul_2.appendChild(li_21);
        ul_2.appendChild(li_22);
        ul_2.appendChild(li_23);
        ul_2.appendChild(li_24);
        ul_2.appendChild(li_25);
        ul_2.appendChild(li_26);
        ul_2.appendChild(li_27);
        ul_2.appendChild(li_28);

        div.appendChild(h3_1);
        div.appendChild(ul_1);
        div.appendChild(h3_2);
        div.appendChild(ul_2);
    }

    img.style.backgroundPosition = 'center';
    img.style.backgroundSize = 'cover';
    img.style.backgroundRepeat = 'no-repeat';
    h3.appendChild(texto1);
    p.appendChild(texto2);
    divTexto.appendChild(h3);
    if (id != 'faltas') {
        divTexto.appendChild(img);
    }
    divTexto.appendChild(p);
    if (div.hasChildNodes()) {
        divTexto.appendChild(div);
    }
    espacio.appendChild(divTexto);
}

document.querySelector(".menu").addEventListener('click', () => {
    document.querySelector('.menuD').classList.toggle('showMenu');
    var ocultame = document.getElementsByClassName('ocultame');
    for (var i = 0; i < ocultame.length; i++) {
        ocultame[i].style.display = 'none';
    }
    var deschequea1 = document.getElementById('uno');
    var deschequea2 = document.getElementById('tres');
    deschequea1.checked = 0;
    deschequea2.checked = 0;
});

document.addEventListener('click', function (e) {
    var menu = $('.menu');
    var menu2 = $('.menuD');
    if (!$('#selectMenu').hasClass('showMenu')) {
        if (!menu.is(e.target) && menu.has(e.target).length === 0 && !menu2.is(e.target) && menu2.has(e.target).length === 0) {
            document.querySelector('.menuD').classList.toggle('showMenu');
        }
    }
});

function Muestra(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display == 'block') {
        elemento.style.display = 'none';
    }
    else {
        elemento.style.display = 'block';
    }
};

function muestraFotosPrincipales() {
    var imagenesPrincipales = document.createElement('div');
    var carousel = document.createElement('div');
    var slider = document.createElement('div');
    imagenesPrincipales.className = 'imagenesPrincipales';
    carousel.className = 'carousel';
    slider.className = 'slider';
    slider.addEventListener('transitionend', function () {
        if (direction === -1) {
            slider.appendChild(slider.firstElementChild);
        } else if (direction === 1) {
            slider.prepend(slider.lastElementChild);
        }

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0)';
        setTimeout(() => {
            slider.style.transition = 'all 0.5s';
        })
    }, false);
    var section1 = document.createElement('section');
    var section2 = document.createElement('section');
    var section3 = document.createElement('section');
    var section4 = document.createElement('section');
    var section5 = document.createElement('section');
    var section6 = document.createElement('section');
    var cover1 = document.createElement('div');
    var cover2 = document.createElement('div');
    var cover3 = document.createElement('div');
    var cover4 = document.createElement('div');
    var cover5 = document.createElement('div');
    var cover6 = document.createElement('div');
    cover1.className = 'cover1';
    cover2.className = 'cover2';
    cover3.className = 'cover3';
    cover4.className = 'cover4';
    cover5.className = 'cover5';
    cover6.className = 'cover6';
    var content1 = document.createElement('div');
    var content2 = document.createElement('div');
    var content3 = document.createElement('div');
    var content4 = document.createElement('div');
    var content5 = document.createElement('div');
    var content6 = document.createElement('div');
    content1.className = 'content1';
    content2.className = 'content1';
    content3.className = 'content1';
    content4.className = 'content1';
    content5.className = 'content1';
    content6.className = 'content1';
    var a1 = document.createElement('a');
    var a2 = document.createElement('a');
    var a3 = document.createElement('a');
    var a4 = document.createElement('a');
    var a5 = document.createElement('a');
    var a6 = document.createElement('a');
    a1.addEventListener('click', function () { llevameAPerro('atila'); });
    a2.addEventListener('click', function () { llevameAPerro('atena'); });
    a3.addEventListener('click', function () { llevameAPerro('corbato'); });
    a4.addEventListener('click', function () { llevameAPerro('gallega'); });
    a5.addEventListener('click', function () { llevameAPerro('candela'); });
    a6.addEventListener('click', function () { llevameAPerro('fany'); });
    var texto1 = document.createTextNode('Ver Más')
    var texto2 = document.createTextNode('Ver Más');
    var texto3 = document.createTextNode('Ver Más');
    var texto4 = document.createTextNode('Ver Más');
    var texto5 = document.createTextNode('Ver Más');
    var texto6 = document.createTextNode('Ver Más')
    var icon1 = document.createElement('i');
    var icon2 = document.createElement('i');
    var icon3 = document.createElement('i');
    var icon4 = document.createElement('i');
    var icon5 = document.createElement('i');
    var icon6 = document.createElement('i');
    icon1.className = 'fas fa-arrow-right';
    icon2.className = 'fas fa-arrow-right';
    icon3.className = 'fas fa-arrow-right';
    icon4.className = 'fas fa-arrow-right';
    icon5.className = 'fas fa-arrow-right';
    icon6.className = 'fas fa-arrow-right';
    a1.appendChild(texto1);
    a2.appendChild(texto2);
    a3.appendChild(texto3);
    a4.appendChild(texto4);
    a5.appendChild(texto5);
    a6.appendChild(texto6);
    a1.appendChild(icon1);
    a2.appendChild(icon2);
    a3.appendChild(icon3);
    a4.appendChild(icon4);
    a5.appendChild(icon5);
    a6.appendChild(icon6);
    content1.appendChild(a1);
    content2.appendChild(a2);
    content3.appendChild(a3);
    content4.appendChild(a4);
    content5.appendChild(a5);
    content6.appendChild(a6);
    cover1.appendChild(content1);
    cover2.appendChild(content2);
    cover3.appendChild(content3);
    cover4.appendChild(content4);
    cover5.appendChild(content5);
    cover6.appendChild(content6);
    section1.appendChild(cover1);
    section2.appendChild(cover2);
    section3.appendChild(cover3);
    section4.appendChild(cover4);
    section5.appendChild(cover5);
    section6.appendChild(cover6);
    slider.append(section1);
    slider.append(section2);
    slider.append(section3);
    slider.append(section4);
    slider.append(section5);
    slider.append(section6);
    carousel.append(slider);

    var controls = document.createElement('div');
    controls.className = 'controls';
    var nextB = document.createElement('button')
    var prevB = document.createElement('button')
    nextB.className = 'next';
    prevB.className = 'prev';
    var nextI = document.createElement('i');
    var prevI = document.createElement('i');
    nextI.className = 'fa fa-angle-right';
    prevI.className = 'fa fa-angle-left';
    nextB.addEventListener('click', function () {
        if (direction === 1) {
            direction = -1;
            slider.prepend(slider.lastElementChild);
        }
        carousel.style.justifyContent = 'flex-start';
        slider.style.transform = 'translate(-16.66%)';
    });
    prevB.addEventListener('click', function () {
        if (direction === -1) {
            direction = 1;
            slider.appendChild(slider.firstElementChild);
        }
        carousel.style.justifyContent = 'flex-end';
        slider.style.transform = 'translate(16.66%)';
    });

    nextB.appendChild(nextI);
    prevB.appendChild(prevI);
    controls.appendChild(nextB);
    controls.appendChild(prevB);

    imagenesPrincipales.appendChild(carousel);
    imagenesPrincipales.appendChild(controls);
    var espacio = document.getElementsByClassName('espacioResponsive')[0];
    espacio.appendChild(imagenesPrincipales);
}

function muestraContenedorInicial() {
    var header = document.createElement('header');
    header.className = 'contenedor';
    var espacio = document.getElementsByClassName('espacioResponsive')[0];
    espacio.appendChild(header);
}

function acercaDe() {
    document.querySelector('.menuD').classList.toggle('showMenu');
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }

    document.body.style.marginBottom = '240px';

    var div = document.createElement('div');
    div.className = 'acercaDe';
    if (window.screen.width > 800) {
        div.style.width = '70%';
    }
    var texto = document.createTextNode('Mi nombre es Rolando Espinosa, como todo amante del tema perrero desde muy niño, recuerdo perfecto varios mestizos (satos) que crié, luego por alrededor de 10 años tuve Dóberman y más tarde P.Alemanes. Conozco físicamente la raza en el 2008 donde quedo verdaderamente impactado con la rusticidad y cabeza de un cachorro atigrado descendiente de una pareja importada que nunca alcancé a ver.')
    var texto2 = document.createTextNode('Luego de largas noches leyendo artículos, libros, viendo documentales etc.. decido traer una pareja de España (el macho nunca lo usé pues entre otras cosas presentó problemas de displasia). Luego llegó la 3ra perra con la cual tampoco estuve muy conforme, así que decidí viajar a las G .Canaria y allí en la cuna del perro visité varios criadores y traigo conmigo 2 machos, uno de ellos el perro con más temperamento que conocí hasta el día de hoy, luego llegaron 3 más y conjuntamente creció la pasión por el presa');
    var texto3 = document.createTextNode('Más tarde nacen "LOS CABEZONES" un grupo de amigos de cinco países que compartimos una idea y gusto en común por un estilo o idea de lo que debería de ser un presa canario.')
    var titulo = document.createTextNode('Comienzos:');
    var h3 = document.createElement('h3');
    h3.appendChild(titulo);
    var p = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p.appendChild(texto);
    p2.appendChild(texto2);
    p3.appendChild(texto3);
    var img1 = document.createElement('img');
    var img2 = document.createElement('img');
    var img3 = document.createElement('img');
    img1.style.width = '150px';
    img1.style.height = '200px';
    img1.style.float = 'left';
    img1.style.marginRight = '10px';
    img1.style.marginTop = '20px';
    img1.style.background = 'url(./img/1foto.jpg)';

    img2.style.width = '150px';
    img2.style.height = '200px';
    img2.style.float = 'right';
    img2.style.marginTop = '10px';
    img2.style.background = 'url(./img/2foto.png)';
    img2.style.marginLeft = '10px';

    img3.style.width = '150px';
    img3.style.height = '200px';
    img3.style.float = 'left';
    img3.style.marginTop = '10px';
    img3.style.marginRight = '10px';
    img3.style.background = 'url(./img/3foto.jpg)';

    img1.style.backgroundPosition = 'center';
    img1.style.backgroundSize = 'cover';
    img1.style.backgroundRepeat = 'no-repeat';
    img2.style.backgroundPosition = 'center';
    img2.style.backgroundSize = 'cover';
    img2.style.backgroundRepeat = 'no-repeat';
    img3.style.backgroundPosition = 'center';
    img3.style.backgroundSize = 'cover';
    img3.style.backgroundRepeat = 'no-repeat';
    div.appendChild(h3);
    div.appendChild(img1);
    div.appendChild(p);
    div.appendChild(img2);
    div.appendChild(p2);
    div.appendChild(img3);
    div.appendChild(p3);
    todo.appendChild(div);

    muestraFooter();

    //muestraFotosPrincipales();

}

function muestraFooter() {
    var footer = document.createElement('footer');
    footer.className = 'pie';
    var ul = document.createElement('ul');
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var li3 = document.createElement('li');
    var li4 = document.createElement('li');
    var a1 = document.createElement('a');
    var a2 = document.createElement('a');
    var a3 = document.createElement('a');
    a1.href = 'https://www.facebook.com/rolando.espinosa.961';
    a2.href = 'https://api.whatsapp.com/send?phone=5352420615';
    a3.href = 'mailto:rec1972@yahoo.com';
    var i1 = document.createElement('i');
    var i2 = document.createElement('i');
    var i3 = document.createElement('i');
    i1.className = 'fab fa-facebook';
    i2.className = 'fab fa-whatsapp';
    i3.className = 'fas fa-envelope';
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var texto1 = document.createTextNode('Roly Joyero');
    var texto2 = document.createTextNode('Rolando Espinosa');
    var texto3 = document.createTextNode('rec1972@yahoo.es');
    var texto4 = document.createTextNode('Todos los derechos reservados 2021');
    var texto5 = document.createTextNode('FCC BA 7513/Los Cabezones');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');

    p1.appendChild(texto1);
    p2.appendChild(texto2);
    p3.appendChild(texto3);
    h4.appendChild(texto4);
    h5.appendChild(texto5);
    a1.appendChild(i1);
    a1.appendChild(p1);
    a2.appendChild(i2);
    a2.appendChild(p2);
    a3.appendChild(i3);
    a3.appendChild(p3);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(h4);
    li4.appendChild(h5);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    footer.appendChild(ul);

    var documento = document.getElementsByClassName('espacioResponsive')[0];

    documento.appendChild(footer);


}

function contactenos() {
    document.querySelector('.menuD').classList.toggle('showMenu');
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }

    var contactos = document.createElement('div');
    contactos.className = 'contactos';
    var c1 = document.createElement('div');
    var c2 = document.createElement('div');
    var c3 = document.createElement('div');
    var c4 = document.createElement('div');
    c1.className = 'primerContacto';
    c2.className = 'segundoContacto';
    c3.className = 'tercerContacto';
    c4.className = 'cuartoContacto';
    var a1 = document.createElement('a');
    var a2 = document.createElement('a');
    var a3 = document.createElement('a');
    var a4 = document.createElement('a');
    var a5 = document.createElement('a');
    var a6 = document.createElement('a');
    a1.href = 'https://www.facebook.com/rolando.espinosa.961';
    a2.href = 'https://api.whatsapp.com/send?phone=5352420615';
    a3.href = 'mailto:rec1972@yahoo.es';
    a4.href = 'https://www.facebook.com/gonzalo.perez.31149';
    a5.href = 'https://www.facebook.com/groups/156162758309530/?ref=share';
    a6.href = 'https://www.facebook.com/groups/555483001715878/?ref=share';
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    var p5 = document.createElement('p');
    var p6 = document.createElement('p');
    var h3_1 = document.createElement('h3');
    var h3_4 = document.createElement('h3');
    var h3_5 = document.createElement('h3');
    var h3_6 = document.createElement('h3');
    var i1 = document.createElement('i');
    var i2 = document.createElement('i');
    var i3 = document.createElement('i');
    var i4 = document.createElement('i');
    var i5 = document.createElement('i');
    var i6 = document.createElement('i');
    i1.className = 'fab fa-facebook';
    i2.className = 'fab fa-whatsapp';
    i3.className = 'fas fa-envelope';
    i4.className = 'fab fa-facebook';
    i5.className = 'fab fa-facebook';
    i6.className = 'fab fa-facebook';
    var textoI = document.createTextNode('Mis datos:')
    var textoP1 = document.createTextNode('Roly Joyero');
    var textoP2 = document.createTextNode('Rolando Espinosa');
    var textoP3 = document.createTextNode('rec1972@yahoo.es');
    var textoP4 = document.createTextNode('Gonzalo Perez');
    var textoP5 = document.createTextNode('Presa Canario');
    var textoP6 = document.createTextNode('Dogo Argentino & Presa Canario & Bandogs');

    var textoH3_4 = document.createTextNode('Contacto en Sudaméria:');
    var textoH3_5 = document.createTextNode('Nuestros Grupos:');

    h3_1.appendChild(textoI);
    p1.appendChild(textoP1);
    p2.appendChild(textoP2);
    p3.appendChild(textoP3);
    a1.appendChild(i1);
    a2.appendChild(i2);
    a3.appendChild(i3);
    a1.appendChild(p1);
    a2.appendChild(p2);
    a3.appendChild(p3);
    c1.appendChild(h3_1);
    c1.appendChild(a1);
    c1.appendChild(a2);
    c1.appendChild(a3);

    h3_4.appendChild(textoH3_4);
    p4.appendChild(i4)
    p4.appendChild(textoP4);
    a4.appendChild(h3_4);
    a4.appendChild(p4);
    c2.appendChild(a4);

    h3_5.appendChild(textoH3_5);
    p5.appendChild(i5)
    p5.appendChild(textoP5);
    p6.appendChild(i6);
    p6.appendChild(textoP6);
    a5.appendChild(p5);
    a6.appendChild(p6);
    c3.appendChild(h3_5);
    c3.appendChild(a5);
    c3.appendChild(a6);

    contactos.appendChild(c1);
    contactos.appendChild(c2);
    contactos.appendChild(c3);
    contactos.appendChild(c4);
    todo.appendChild(contactos);

    document.body.style.marginBottom = 0;
}

function muestraPerro(perro) {
    var numeroP = -1;
    if (perro == 'atila') {
        numeroP = 0;
    } else if (perro == 'atena') {
        numeroP = 1;
    } else if (perro == 'corbato') {
        numeroP = 2;
    } else if (perro == 'gallega') {
        numeroP = 3;
    } else if (perro == 'candela') {
        numeroP = 4;
    } else if (perro == 'fany') {
        numeroP = 5;
    }
    espacioParaLasFotos(numeroP);
}

function muestraPerro2(perro) {
    var numeroP = -1;
    if (perro == 'atila') {
        numeroP = 0;
    } else if (perro == 'atena') {
        numeroP = 1;
    } else if (perro == 'candela') {
        numeroP = 3;
    } else if (perro == 'corbato') {
        numeroP = 4;
    } else if (perro == 'gallega') {
        numeroP = 2;
    } else if (perro == 'fany') {
        numeroP = 5;
    }
    espacioParaLasFotos(numeroP);
}

function muestraCachorro(perro) {
    var numeroP = -1;
    if (perro == 'cachorro1') {
        numeroP = 0;
    } else if (perro == 'cachorro2') {
        numeroP = 1;
    } else if (perro == 'cachorro3') {
        numeroP = 2;
    } else if (perro == 'cachorro4') {
        numeroP = 3;
    } else if (perro == 'cachorro5') {
        numeroP = 4;
    } else if (perro == 'cachorro6') {
        numeroP = 5;
    }
    espacioParaLasFotos(numeroP);
}

function muestraCruce(perro) {
    var numeroP = -1;
    if (perro == 'cruce1') {
        numeroP = 0;
    } else if (perro == 'cruce2') {
        numeroP = 1;
    } else if (perro == 'cruce3') {
        numeroP = 2;
    } else if (perro == 'cruce4') {
        numeroP = 3;
    } else if (perro == 'cruce5') {
        numeroP = 4;
    } else if (perro == 'cruce6') {
        numeroP = 5;
    }
    espacioParaLasFotos(numeroP);
}

function espacioParaLasFotos(numeroP) {
    var espacioFotos = document.getElementsByClassName('espacioFotosMisPerros')[numeroP];
    if (espacioFotos != undefined) {
        if (window.screen.width <= 800) {
            if (espacioFotos != undefined) {
                if (espacioFotos.style.height == '480px') {
                    espacioFotos.style.height = '0';
                }
                else {
                    espacioFotos.style.height = '480px';
                }
            }
        }
        else {
            if (espacioFotos.style.height == '1400px') {
                espacioFotos.style.height = '0';
            }
            else {
                espacioFotos.style.height = '1400px';
            }
        }
    }
}

function muestraFotosMisPerros() {
    document.querySelector('.menuD').classList.toggle('showMenu');
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }
    if (document.body.style.marginBottom == '240px' || document.body.style.marginBottom == '0px') {
        document.body.style.marginBottom = '200px';
    }

    var principal = document.createElement('div');
    principal.className = 'misPerrosDiv';
    var h2 = document.createElement('h2');
    var textoh2 = document.createTextNode('Algunos de Nuestros Perros:');
    h2.appendChild(textoh2);
    var perro1Div = document.createElement('div');
    var perro2Div = document.createElement('div');
    var perro3Div = document.createElement('div');
    var perro4Div = document.createElement('div');
    var perro5Div = document.createElement('div');
    var perro6Div = document.createElement('div');
    perro1Div.className = 'misPerros';
    perro2Div.className = 'misPerros';
    perro3Div.className = 'misPerros';
    perro4Div.className = 'misPerros';
    perro5Div.className = 'misPerros';
    perro6Div.className = 'misPerros';

    var a1 = document.createElement('a');
    var h41 = document.createElement('h4');
    var textoh41 = document.createTextNode('Atila de Aldabó');
    h41.appendChild(textoh41);
    var iconos1Div = document.createElement('div');
    var i11 = document.createElement('i');
    var i12 = document.createElement('i');
    i11.className = 'fas fa-angle-up';
    i12.className = 'fas fa-angle-down';
    var espacioFotosDiv1 = document.createElement('div');
    var foto11 = document.createElement('div');
    var foto12 = document.createElement('div');
    var foto13 = document.createElement('div');
    var foto14 = document.createElement('div');
    foto11.id = 'i11';
    foto12.id = 'i12';
    foto13.id = 'i13';
    foto14.id = 'i14';
    espacioFotosDiv1.className = 'espacioFotosMisPerros';
    espacioFotosDiv1.appendChild(foto11);
    espacioFotosDiv1.appendChild(foto12);
    espacioFotosDiv1.appendChild(foto13);
    espacioFotosDiv1.appendChild(foto14);
    iconos1Div.className = 'flechas';
    iconos1Div.appendChild(i11);
    iconos1Div.appendChild(i12);
    a1.className = 'atila';
    a1.appendChild(h41);
    a1.appendChild(iconos1Div);
    perro1Div.appendChild(a1);
    perro1Div.appendChild(espacioFotosDiv1);

    var a2 = document.createElement('a');
    var h42 = document.createElement('h4');
    var textoh42 = document.createTextNode('Atenas de Aldabó');
    h42.appendChild(textoh42);
    var iconos2Div = document.createElement('div');
    var i21 = document.createElement('i');
    var i22 = document.createElement('i');
    i21.className = 'fas fa-angle-up';
    i22.className = 'fas fa-angle-down';
    var espacioFotosDiv2 = document.createElement('div');
    var foto21 = document.createElement('div');
    var foto22 = document.createElement('div');
    var foto23 = document.createElement('div');
    var foto24 = document.createElement('div');
    foto21.id = 'i21';
    foto22.id = 'i22';
    foto23.id = 'i23';
    foto24.id = 'i24';
    espacioFotosDiv2.className = 'espacioFotosMisPerros';
    espacioFotosDiv2.appendChild(foto21);
    espacioFotosDiv2.appendChild(foto22);
    espacioFotosDiv2.appendChild(foto23);
    espacioFotosDiv2.appendChild(foto24);
    iconos2Div.className = 'flechas';
    iconos2Div.appendChild(i21);
    iconos2Div.appendChild(i22);
    a2.className = 'atena';
    a2.onclick = muestraPerro('atena');
    a2.appendChild(h42);
    a2.appendChild(iconos2Div);
    perro2Div.appendChild(a2);
    perro2Div.appendChild(espacioFotosDiv2);

    var a3 = document.createElement('a');
    var h43 = document.createElement('h4');
    var textoh43 = document.createTextNode('Corbato de Montes de Tilo');
    h43.appendChild(textoh43);
    var iconos3Div = document.createElement('div');
    var i31 = document.createElement('i');
    var i32 = document.createElement('i');
    i31.className = 'fas fa-angle-up';
    i32.className = 'fas fa-angle-down';
    var espacioFotosDiv3 = document.createElement('div');
    var foto31 = document.createElement('div');
    var foto32 = document.createElement('div');
    var foto33 = document.createElement('div');
    var foto34 = document.createElement('div');
    foto31.id = 'i31';
    foto32.id = 'i32';
    foto33.id = 'i33';
    foto34.id = 'i34';
    espacioFotosDiv3.className = 'espacioFotosMisPerros';
    espacioFotosDiv3.appendChild(foto31);
    espacioFotosDiv3.appendChild(foto32);
    espacioFotosDiv3.appendChild(foto33);
    espacioFotosDiv3.appendChild(foto34);
    iconos3Div.className = 'flechas';
    iconos3Div.appendChild(i31);
    iconos3Div.appendChild(i32);
    a3.className = 'corbato';
    a3.onclick = muestraPerro('corbato');
    a3.appendChild(h43);
    a3.appendChild(iconos3Div);
    perro3Div.appendChild(a3);
    perro3Div.appendChild(espacioFotosDiv3);

    var a4 = document.createElement('a');
    var h44 = document.createElement('h4');
    var textoh44 = document.createTextNode('Gallega de Guadalcan');
    h44.appendChild(textoh44);
    var iconos4Div = document.createElement('div');
    var i41 = document.createElement('i');
    var i42 = document.createElement('i');
    i41.className = 'fas fa-angle-up';
    i42.className = 'fas fa-angle-down';
    var espacioFotosDiv4 = document.createElement('div');
    var foto41 = document.createElement('div');
    var foto42 = document.createElement('div');
    var foto43 = document.createElement('div');
    var foto44 = document.createElement('div');
    foto41.id = 'i41';
    foto42.id = 'i42';
    foto43.id = 'i43';
    foto44.id = 'i44';
    espacioFotosDiv4.className = 'espacioFotosMisPerros';
    espacioFotosDiv4.appendChild(foto41);
    espacioFotosDiv4.appendChild(foto42);
    espacioFotosDiv4.appendChild(foto43);
    espacioFotosDiv4.appendChild(foto44);
    iconos4Div.className = 'flechas';
    iconos4Div.appendChild(i41);
    iconos4Div.appendChild(i42);
    a4.className = 'gallega';
    a4.onclick = muestraPerro('gallega');
    a4.appendChild(h44);
    a4.appendChild(iconos4Div);
    perro4Div.appendChild(a4);
    perro4Div.appendChild(espacioFotosDiv4);

    var a5 = document.createElement('a');
    var h45 = document.createElement('h4');
    var textoh45 = document.createTextNode('Candela de Aldabó');
    h45.appendChild(textoh45);
    var iconos5Div = document.createElement('div');
    var i51 = document.createElement('i');
    var i52 = document.createElement('i');
    i51.className = 'fas fa-angle-up';
    i52.className = 'fas fa-angle-down';
    var espacioFotosDiv5 = document.createElement('div');
    var foto51 = document.createElement('div');
    var foto52 = document.createElement('div');
    var foto53 = document.createElement('div');
    var foto54 = document.createElement('div');
    foto51.id = 'i51';
    foto52.id = 'i52';
    foto53.id = 'i53';
    foto54.id = 'i54';
    espacioFotosDiv5.className = 'espacioFotosMisPerros';
    espacioFotosDiv5.appendChild(foto51);
    espacioFotosDiv5.appendChild(foto52);
    espacioFotosDiv5.appendChild(foto53);
    espacioFotosDiv5.appendChild(foto54);
    iconos5Div.className = 'flechas';
    iconos5Div.appendChild(i51);
    iconos5Div.appendChild(i52);
    a5.className = 'candela';
    a5.onclick = muestraPerro('candela');
    a5.appendChild(h45);
    a5.appendChild(iconos5Div);
    perro5Div.appendChild(a5);
    perro5Div.appendChild(espacioFotosDiv5);

    var a6 = document.createElement('a');
    var h46 = document.createElement('h4');
    var textoh46 = document.createTextNode('Fanny de Aldabó');
    h46.appendChild(textoh46);
    var iconos6Div = document.createElement('div');
    var i61 = document.createElement('i');
    var i62 = document.createElement('i');
    i61.className = 'fas fa-angle-up';
    i62.className = 'fas fa-angle-down';
    var espacioFotosDiv6 = document.createElement('div');
    var foto61 = document.createElement('div');
    var foto62 = document.createElement('div');
    foto61.id = 'i61';
    foto62.id = 'i62';
    espacioFotosDiv6.className = 'espacioFotosMisPerros reduceEsta';
    espacioFotosDiv6.appendChild(foto61);
    espacioFotosDiv6.appendChild(foto62);
    iconos6Div.className = 'flechas';
    iconos6Div.appendChild(i61);
    iconos6Div.appendChild(i62);
    a6.className = 'fany';
    a6.onclick = muestraPerro('fany');
    a6.appendChild(h46);
    a6.appendChild(iconos6Div);
    perro6Div.appendChild(a6);
    perro6Div.appendChild(espacioFotosDiv6);

    a1.addEventListener('click', function () { muestraPerro('atila'); });
    a2.addEventListener('click', function () { muestraPerro('atena'); });
    a3.addEventListener('click', function () { muestraPerro('corbato'); });
    a4.addEventListener('click', function () { muestraPerro('gallega'); });
    a5.addEventListener('click', function () { muestraPerro('candela'); });
    a6.addEventListener('click', function () { muestraPerro('fany'); });

    principal.appendChild(h2);
    principal.appendChild(perro1Div);
    principal.appendChild(perro2Div);
    principal.appendChild(perro3Div);
    principal.appendChild(perro4Div);
    principal.appendChild(perro5Div);
    principal.appendChild(perro6Div);
    todo.appendChild(principal);

    muestraFooter();

}

function llevameAPerro(perro) {
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }
    muestraFotosMisPerros();
    muestraPerro2(perro);
}


var CACHORROSX = document.getElementById('cachorros');
CACHORROSX.addEventListener('click', ()=>{
    document.querySelector('.menuD').classList.toggle('showMenu');
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }
    if (document.body.style.marginBottom == '240px' || document.body.style.marginBottom == '0px') {
        document.body.style.marginBottom = '200px';
    }
    cachorrosDisponibles();
    algunosCachorros();
    muestraFooter();
},false);


function cachorrosDisponibles() {
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    var principal = document.createElement('div');
    principal.className = 'misPerrosDiv';
    var h2 = document.createElement('h2');
    var textoh2 = document.createTextNode('Cachorros Disponibles:');
    h2.appendChild(textoh2);
    var perro1Div = document.createElement('div');
    var perro2Div = document.createElement('div');
    perro1Div.className = 'misPerros';
    perro2Div.className = 'misPerros';

    var a1 = document.createElement('a');
    var h41 = document.createElement('h4');
    var textoh41 = document.createTextNode('Atenas x Tifón');
    h41.appendChild(textoh41);
    var iconos1Div = document.createElement('div');
    var i11 = document.createElement('i');
    var i12 = document.createElement('i');
    i11.className = 'fas fa-angle-up';
    i12.className = 'fas fa-angle-down';
    var espacioFotosDiv1 = document.createElement('div');
    var foto11 = document.createElement('div');
    var foto12 = document.createElement('div');
    var foto13 = document.createElement('div');
    var foto14 = document.createElement('div');
    foto11.id = 'i11Cachorro';
    foto12.id = 'i12Cachorro';
    foto13.id = 'i13Cachorro';
    foto14.id = 'i14Cachorro';
    espacioFotosDiv1.className = 'espacioFotosMisPerros';
    espacioFotosDiv1.appendChild(foto11);
    espacioFotosDiv1.appendChild(foto12);
    espacioFotosDiv1.appendChild(foto13);
    espacioFotosDiv1.appendChild(foto14);
    iconos1Div.className = 'flechas';
    iconos1Div.appendChild(i11);
    iconos1Div.appendChild(i12);
    a1.className = 'cachorro1';
    a1.appendChild(h41);
    a1.appendChild(iconos1Div);
    perro1Div.appendChild(a1);
    perro1Div.appendChild(espacioFotosDiv1);

    var a2 = document.createElement('a');
    var h42 = document.createElement('h4');
    var textoh42 = document.createTextNode('Sara x Óscar');
    h42.appendChild(textoh42);
    var iconos2Div = document.createElement('div');
    var i21 = document.createElement('i');
    var i22 = document.createElement('i');
    i21.className = 'fas fa-angle-up';
    i22.className = 'fas fa-angle-down';
    var espacioFotosDiv2 = document.createElement('div');
    var foto21 = document.createElement('div');
    var foto22 = document.createElement('div');
    var foto23 = document.createElement('div');
    var foto24 = document.createElement('div');
    foto21.id = 'i21Cachorro';
    foto22.id = 'i22Cachorro';
    foto23.id = 'i23Cachorro';
    foto24.id = 'i24Cachorro';
    espacioFotosDiv2.className = 'espacioFotosMisPerros';
    espacioFotosDiv2.appendChild(foto21);
    espacioFotosDiv2.appendChild(foto22);
    espacioFotosDiv2.appendChild(foto23);
    espacioFotosDiv2.appendChild(foto24);
    iconos2Div.className = 'flechas';
    iconos2Div.appendChild(i21);
    iconos2Div.appendChild(i22);
    a2.className = 'cachorro2';
    a2.appendChild(h42);
    a2.appendChild(iconos2Div);
    perro2Div.appendChild(a2);
    perro2Div.appendChild(espacioFotosDiv2);

    a1.addEventListener('click', function () { muestraCachorro('cachorro1'); });
    a2.addEventListener('click', function () { muestraCachorro('cachorro2'); });

    principal.appendChild(h2);
    principal.appendChild(perro1Div);
    principal.appendChild(perro2Div);
    todo.appendChild(principal);
}

function algunosCachorros() {
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    var principal = document.createElement('div');
    principal.className = 'misPerrosDiv';
    var h2 = document.createElement('h2');
    var textoh2 = document.createTextNode('Algunos de Nuestros Cachorros:');
    h2.appendChild(textoh2);
    var fotosCachorrosX = document.createElement('div');
    fotosCachorrosX.className = 'fotosCachorrosX';

    var foto1 = document.createElement('div');
    foto1.id = 'i1CachorroX';
    var foto2 = document.createElement('div');
    foto2.id = 'i2CachorroX';
    var foto3 = document.createElement('div');
    foto3.id = 'i3CachorroX';
    var foto4 = document.createElement('div');
    foto4.id = 'i4CachorroX';
    var foto5 = document.createElement('div');
    foto5.id = 'i5CachorroX';
    var foto6 = document.createElement('div');
    foto6.id = 'i6CachorroX';
    var foto7 = document.createElement('div');
    foto7.id = 'i7CachorroX';
    var foto8 = document.createElement('div');
    foto8.id = 'i8CachorroX';
    var foto9 = document.createElement('div');
    foto9.id = 'i9CachorroX';
    var foto10 = document.createElement('div');
    foto10.id = 'i10CachorroX';
    var foto11 = document.createElement('div');
    foto11.id = 'i11CachorroX';
    var foto12 = document.createElement('div');
    foto12.id = 'i12CachorroX';
    var foto13 = document.createElement('div');
    foto13.id = 'i13CachorroX';
    var foto14 = document.createElement('div');
    foto14.id = 'i14CachorroX';
    var foto15 = document.createElement('div');
    foto15.id = 'i15CachorroX';
    var foto16 = document.createElement('div');
    foto16.id = 'i16CachorroX';
    var foto17 = document.createElement('div');
    foto17.id = 'i17CachorroX';
    var foto18 = document.createElement('div');
    foto18.id = 'i18CachorroX';
    

    principal.appendChild(h2);
    principal.appendChild(fotosCachorrosX);
    fotosCachorrosX.appendChild(foto1);
    fotosCachorrosX.appendChild(foto2);
    fotosCachorrosX.appendChild(foto3);
    fotosCachorrosX.appendChild(foto4);
    fotosCachorrosX.appendChild(foto5);
    fotosCachorrosX.appendChild(foto6);
    fotosCachorrosX.appendChild(foto7);
    fotosCachorrosX.appendChild(foto8);
    fotosCachorrosX.appendChild(foto9);
    fotosCachorrosX.appendChild(foto10);
    fotosCachorrosX.appendChild(foto11);
    fotosCachorrosX.appendChild(foto12);
    fotosCachorrosX.appendChild(foto13);
    fotosCachorrosX.appendChild(foto14);
    fotosCachorrosX.appendChild(foto15);
    fotosCachorrosX.appendChild(foto16);
    fotosCachorrosX.appendChild(foto17);
    fotosCachorrosX.appendChild(foto18);


    todo.appendChild(principal);
}

function proximosCruces() {
    document.querySelector('.menuD').classList.toggle('showMenu');
    var todo = document.getElementsByClassName('espacioResponsive')[0];
    while (todo.hasChildNodes()) {
        var elimina = todo.firstChild;
        todo.removeChild(elimina);
    }
    if (document.body.style.marginBottom == '240px' || document.body.style.marginBottom == '0px') {
        document.body.style.marginBottom = '200px';
    }

    var principal = document.createElement('div');
    principal.className = 'misPerrosDiv';
    var h2 = document.createElement('h2');
    var textoh2 = document.createTextNode('Próximos Cruces:');
    h2.appendChild(textoh2);
    var perro1Div = document.createElement('div');
    var perro2Div = document.createElement('div');
    perro1Div.className = 'misPerros';
    perro2Div.className = 'misPerros';

    var a1 = document.createElement('a');
    var h41 = document.createElement('h4');
    var textoh41 = document.createTextNode('Atenas x Tifón');
    h41.appendChild(textoh41);
    var iconos1Div = document.createElement('div');
    var i11 = document.createElement('i');
    var i12 = document.createElement('i');
    i11.className = 'fas fa-angle-up';
    i12.className = 'fas fa-angle-down';
    var espacioFotosDiv1 = document.createElement('div');
    var foto11 = document.createElement('div');
    var foto12 = document.createElement('div');
    var foto13 = document.createElement('div');
    var foto14 = document.createElement('div');
    foto11.id = 'i11Cruce';
    foto12.id = 'i12Cruce';
    foto13.id = 'i13Cruce';
    foto14.id = 'i14Cruce';
    espacioFotosDiv1.className = 'espacioFotosMisPerros';
    espacioFotosDiv1.appendChild(foto11);
    espacioFotosDiv1.appendChild(foto12);
    espacioFotosDiv1.appendChild(foto13);
    espacioFotosDiv1.appendChild(foto14);
    iconos1Div.className = 'flechas';
    iconos1Div.appendChild(i11);
    iconos1Div.appendChild(i12);
    a1.className = 'cruce1';
    a1.appendChild(h41);
    a1.appendChild(iconos1Div);
    perro1Div.appendChild(a1);
    perro1Div.appendChild(espacioFotosDiv1);

    var a2 = document.createElement('a');
    var h42 = document.createElement('h4');
    var textoh42 = document.createTextNode('Sara x Óscar');
    h42.appendChild(textoh42);
    var iconos2Div = document.createElement('div');
    var i21 = document.createElement('i');
    var i22 = document.createElement('i');
    i21.className = 'fas fa-angle-up';
    i22.className = 'fas fa-angle-down';
    var espacioFotosDiv2 = document.createElement('div');
    var foto21 = document.createElement('div');
    var foto22 = document.createElement('div');
    var foto23 = document.createElement('div');
    var foto24 = document.createElement('div');
    foto21.id = 'i21Cruce';
    foto22.id = 'i22Cruce';
    foto23.id = 'i23Cruce';
    foto24.id = 'i24Cruce';
    espacioFotosDiv2.className = 'espacioFotosMisPerros';
    espacioFotosDiv2.appendChild(foto21);
    espacioFotosDiv2.appendChild(foto22);
    espacioFotosDiv2.appendChild(foto23);
    espacioFotosDiv2.appendChild(foto24);
    iconos2Div.className = 'flechas';
    iconos2Div.appendChild(i21);
    iconos2Div.appendChild(i22);
    a2.className = 'cruce2';
    a2.appendChild(h42);
    a2.appendChild(iconos2Div);
    perro2Div.appendChild(a2);
    perro2Div.appendChild(espacioFotosDiv2);

    a1.addEventListener('click', function () { muestraCruce('cruce1'); });
    a2.addEventListener('click', function () { muestraCruce('cruce2'); });

    principal.appendChild(h2);
    principal.appendChild(perro1Div);
    principal.appendChild(perro2Div);
    todo.appendChild(principal);

    muestraFooter();
}