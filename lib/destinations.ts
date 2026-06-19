export type Destination = {
  id: string
  name: string
  era: string
  description: string
  image: string
  tags: string[]
  price: string
}

export const destinations: Destination[] = [
  {
    id: "paris-1889",
    name: "Paris 1889",
    era: "Belle Époque",
    description:
      "Déambulez sur les boulevards illuminés au gaz pendant l'Exposition Universelle, sous une Tour Eiffel flambant neuve. Élégance, art et raffinement à chaque pas.",
    image: "/images/paris-1889.png",
    tags: ["Élégance", "Art", "Exposition Universelle"],
    price: "12 900 €",
  },
  {
    id: "cretace",
    name: "Crétacé -65M",
    era: "Aventure préhistorique",
    description:
      "Embarquez pour la plus grande aventure jamais conçue : une nature primitive intacte, des forêts géantes et la faune la plus spectaculaire de l'histoire de la Terre.",
    image: "/images/cretaceous.png",
    tags: ["Aventure", "Dinosaures", "Nature primitive"],
    price: "18 500 €",
  },
  {
    id: "florence-1504",
    name: "Florence 1504",
    era: "Renaissance",
    description:
      "Pénétrez dans les ateliers d'artistes au sommet de leur génie, croisez Michel-Ange et admirez une architecture qui redéfinit le monde. La Renaissance, en immersion totale.",
    image: "/images/florence-1504.png",
    tags: ["Renaissance", "Ateliers d'artistes", "Architecture"],
    price: "10 800 €",
  },
]
