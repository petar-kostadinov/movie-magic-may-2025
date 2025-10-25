const movies = [
    {
        id: "b9a8d4e2-6f23-4b9a-bf6e-9f1e89a41201",
        title: "Jungle Cruise",
        genre: "Adventure",
        description: "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
        imageUrl: "/img/jungle-cruise.jpeg",
        director: "Jaume Collet-Serra",
        year: 2021,
        rating: 6.7,
        category: "Movie"
    },
    {
        id: "a7c3f0d1-9b7e-4f5b-8a4d-23f4bc6e9842",
        title: "The Little Mermaid",
        genre: "Fantasy",
        description: "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
        imageUrl: "/img/the-little-mermaid.jpg",
        director: "Rob Marshall",
        year: 2023,
        rating: 7.0,
        category: "Movie"
    },
    {
        id: "cf4d0b8e-28f1-4904-87d6-7bdeaa93d59b",
        title: "Home Alone",
        genre: "Comedy",
        description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin (Macaulay Culkin), got into a scuffle with his older brother Buzz (Devin Ratray) and was sent to his room, which is on the third floor of his house. Then, the next morning, while the rest of the family was in a rush to make it to the airport on time, they completely forgot about Kevin, who now has the house all to himself. Being home alone was fun for Kevin, having a pizza all to himself, jumping on his parents' bed, and making a mess. Then, Kevin discovers about two burglars, Harry (Joe Pesci) and Marv (Daniel Stern), about to rob his house on Christmas Eve. Kevin acts quickly by wiring his own house with makeshift booby traps to stop the burglars and to bring them to justice.",
        imageUrl: "/img/home-alone.jpeg",
        director: "Chris Columbus",
        year: 1990,
        rating: 7.7,
        category: "Movie"
    }
]


export default {
    getAll() {
        return movies;
    }
} 