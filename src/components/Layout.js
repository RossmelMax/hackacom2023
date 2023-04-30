import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MapScreen from "../screens/MapScreen";
import MenuRight from "./MenuRight";

function Layout() {
  const [selectedCategory, setSelectedCategory] = useState("medioambiente");
  const [medioambienteMarkers, setMedioambienteMarkers] = useState([]);
  const [abandonoanimalMarkers, setAbandonoanimalMarkers] = useState([]);
  const [revitalizacionurbanaMarkers, setRevitalizacionurbanaMarkers] =
    useState([]);
  const [controversiasocialMarkers, setControversiasocialMarkers] = useState(
    []
  );

  useEffect(() => {
    switch (selectedCategory) {
      case "medioambiente":
        setMedioambienteMarkers([
          {
            id: 1,
            position: [-17.387233, -66.150651],
            category: "medioambiente",
            title: "Basura en la calle",
            description:
              "La calle está llena de basura, la mayoría de la gente no hace uso de los contenedores y simplemente la arrojan al suelo.",
            image: "https://cdn.forbes.com.mx/2019/06/basura-slp.jpg",
          },
          {
            id: 2,
            position: [-17.374199, -66.161868],
            category: "medioambiente",
            title: "Árboles caídos",
            description:
              "Durante una tormenta fuerte, varios árboles cayeron en la calle, causando daños en los cables de electricidad y obstaculizando el tránsito vehicular.",
            image:
              "https://www.malagahoy.es/2023/01/16/malaga/Arbol-caido-calle-Bolivia-Pedregalejo_1757534888_174619632_1200x675.jpg",
          },
          {
            id: 3,
            position: [-17.3697, -66.1653],
            category: "medioambiente",
            title: "Aguas sucias",
            description:
              "Las aguas de la lluvia arrastran la basura y los residuos hacia las alcantarillas, lo que causa una acumulación de desechos y mal olor en la zona.",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2017/4/10/2_a_4_rodriguezz.jpg",
          },
          {
            id: 4,
            position: [-17.36589, -66.1703],
            category: "medioambiente",
            title: "Tala de árboles",
            description:
              "Se ha llevado a cabo una tala masiva de árboles en la zona para la construcción de un edificio comercial.",
            image:
              "https://jardinessinfronteras.files.wordpress.com/2017/08/tala-de-arboles-en-la-ciudad.jpg",
          },
          {
            id: 5,
            position: [-17.372842, -66.16608],
            category: "medioambiente",
            title: "Vertedero ilegal",
            description: "Hay un vertedero ilegal cerca del río",
            image:
              "https://www.elcomercio.com/files/article_main/uploads/2019/12/09/5dee9b9e7f0d6.jpeg",
          },
          {
            id: 6,
            position: [-17.368406, -66.170366],
            category: "medioambiente",
            title: "Contaminación del aire",
            description: "El aire está contaminado debido a la quema de basura",
            image:
              "https://i.pinimg.com/originals/21/f7/c9/21f7c94e98b9d39e117aa2b10c7bfb8d.jpg",
          },
          {
            id: 7,
            position: [-17.365797, -66.158473],
            category: "medioambiente",
            title: "Ruido excesivo",
            description: "El ruido de las motocicletas es demasiado alto",
            image: "https://images.unsplash.com/photo-1545484890-fd58134ebea9",
          },
          {
            id: 8,
            position: [-17.378188, -66.157719],
            category: "medioambiente",
            title: "Vertido de aguas residuales",
            description:
              "El vertido de aguas residuales en el río está causando daño ambiental",
            image:
              "https://www.elheraldo.hn/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=2pnW5Gbbq5w5fjKTPZ8rE8$daE2N3K4ZzOUsqbU5sYu90vIw76iKPKVKDg8hKjusWC_0aPsTNDaxglo9jK4xFdD4JNPOVE0aZGDb2VJdK1OqCfADAp6WMlU7_8cOxjK&CONTENTTYPE=image/jpeg&CONTENTLENGTH=211692",
          },
          {
            id: 9,
            position: [-17.373084, -66.158057],
            category: "medioambiente",
            title: "Basura en el parque",
            description: "Hay basura en el parque y los niños no pueden jugar",
            image:
              "https://cdn.pixabay.com/photo/2017/10/12/14/12/waste-2843887_960_720.jpg",
          },
          {
            id: 10,
            position: [-17.382589, -66.157138],
            category: "medioambiente",
            title: "Contaminación visual",
            description:
              "Hay demasiada publicidad en la calle, lo que causa contaminación visual",
            image:
              "https://cdn.pixabay.com/photo/2017/12/04/12/03/advertising-2995631_960_720.jpg",
          },
        ]);
        break;
      case "abandonoanimal":
        setAbandonoanimalMarkers([
          {
            id: 1,
            position: [-17.390446, -66.188147],
            category: "abandonoanimal",
            title: "Perro abandonado",
            description: "Se ha encontrado un perro abandonado en la calle",
            image:
              "https://www.peta.org/wp-content/uploads/2017/07/animal-homelessness-719x320.jpg",
          },
          {
            id: 2,
            position: [-17.399033, -66.207065],
            category: "abandonoanimal",
            title: "Gato callejero",
            description: "Hay un gato callejero en la zona",
            image:
              "https://www.peta.org/wp-content/uploads/2015/05/Cat_homelessness_Flickr_David_King.jpg",
          },
          {
            id: 3,
            position: [-17.371005, -66.200696],
            category: "abandonoanimal",
            title: "Cachorro abandonado",
            description: "Se ha encontrado un cachorro abandonado en el parque",
            image:
              "https://www.peta.org/wp-content/uploads/2018/05/Puppy_homelessness_Flickr_animals_need_me.jpg",
          },
          {
            id: 4,
            position: [-17.371463, -66.179991],
            category: "abandonoanimal",
            title: "Perro maltratado",
            description:
              "Se ha avistado a un perro en estado de maltrato en la calle",
            image:
              "https://www.peta.org/wp-content/uploads/2015/06/dog_homelessness_Flickr_amayaeguizabal.jpg",
          },
          {
            id: 5,
            position: [-17.397282, -66.159183],
            category: "abandonoanimal",
            title: "Conejo abandonado",
            description: "Se ha encontrado un conejo abandonado en el parque",
            image:
              "https://www.peta.org/wp-content/uploads/2016/04/Bunny_homelessness_Flickr_animals_need_me.jpg",
          },
        ]);
        break;
      case "revitalizacionurbana":
        setRevitalizacionurbanaMarkers([
          {
            id: 1,
            position: [-17.3835, -66.1558],
            category: "revitalizacionurbana",
            title: "Remodelación de parque central",
            description:
              "Se está llevando a cabo la remodelación completa del parque central para mejorar la calidad de vida de los ciudadanos",
            image:
              "https://i1.wp.com/boliviamaya.com/wp-content/uploads/2017/09/6f3b8c11-6e9e-4f1c-8b8a-bf329bebc61d.jpg?resize=800%2C600&ssl=1",
          },
          {
            id: 2,
            position: [-17.3847, -66.1602],
            category: "revitalizacionurbana",
            title: "Reconstrucción de la plaza principal",
            description:
              "La plaza principal está siendo reconstruida con nuevos bancos, iluminación y espacios verdes para fomentar la convivencia entre los ciudadanos",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2019/03/22/166202-jpg.jpg?itok=abInheFD",
          },
          {
            id: 3,
            position: [-17.3852, -66.1684],
            category: "revitalizacionurbana",
            title: "Renovación de fachadas del centro histórico",
            description:
              "El centro histórico está siendo renovado con nuevos diseños y colores para darle una apariencia fresca y moderna",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/09/28/fachadascentrohistorico.jpg",
          },
        ]);
        break;
      case "controversiasocial":
        setControversiasocialMarkers([
          {
            id: 1,
            position: [-17.3934, -66.1566],
            category: "controversiasocial",
            title: "Protestas en la plaza principal",
            description:
              "Grupos de manifestantes se han reunido en la plaza principal exigiendo cambios políticos.",
            image:
              "https://ichef.bbci.co.uk/news/976/cpsprodpb/142A0/production/_128159717_bolivia.jpg",
          },
          {
            id: 2,
            position: [-17.3908, -66.1569],
            category: "controversiasocial",
            title: "Conflicto entre comunidades",
            description:
              "Dos comunidades en las afueras de la ciudad han entrado en conflicto por la posesión de una tierra.",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2018/11/19/concejo.jpg",
          },
          {
            id: 3,
            position: [-17.3872, -66.1556],
            category: "controversiasocial",
            title: "Huelga de hambre de trabajadores",
            description:
              "Un grupo de trabajadores de una fábrica local han iniciado una huelga de hambre en protesta por el despido de varios compañeros.",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2020/02/04/despedidos.jpg",
          },
          {
            id: 4,
            position: [-17.3987, -66.1523],
            category: "controversiasocial",
            title: "Protesta de estudiantes universitarios",
            description:
              "Estudiantes universitarios han tomado las calles para protestar por la falta de recursos y la calidad de la educación.",
            image:
              "https://www.opinion.com.bo/image.ashx?s=57067&id=429792&t=20190507013210",
          },
          {
            id: 5,
            position: [-17.3804, -66.1664],
            category: "controversiasocial",
            title: "Polémica por el uso de un parque público",
            description:
              "Los vecinos de un barrio cercano a un parque público han iniciado una petición para limitar su uso por parte de personas de otras zonas de la ciudad.",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2017/2/6/3e7a7381.jpg",
          },
          {
            id: 6,
            position: [-17.4029, -66.1654],
            category: "controversiasocial",
            title: "Cierre de un centro de salud",
            description:
              "El cierre de un centro de salud en una zona pobre de la ciudad ha desencadenado protestas y críticas por parte de la población afectada.",
            image:
              "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2020/07/20/salud_2.jpg",
          },
        ]);
        break;
      default:
        break;
    }
  }, [selectedCategory]);

  return (
    <div className="flex">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MapScreen
        selectedMarkers={
          selectedCategory === "medioambiente"
            ? medioambienteMarkers
            : selectedCategory === "abandonoanimal"
            ? abandonoanimalMarkers
            : selectedCategory === "revitalizacionurbana"
            ? revitalizacionurbanaMarkers
            : selectedCategory === "controversiasocial"
            ? controversiasocialMarkers
            : []
        }
        setSelectedMarkers={
          selectedCategory === "medioambiente"
            ? setMedioambienteMarkers
            : selectedCategory === "abandonoanimal"
            ? setAbandonoanimalMarkers
            : selectedCategory === "revitalizacionurbana"
            ? setRevitalizacionurbanaMarkers
            : selectedCategory === "controversiasocial"
            ? setControversiasocialMarkers
            : []
        }
        selectedCategory={selectedCategory}
      />
      <MenuRight />
    </div>
  );
}

export default Layout;
