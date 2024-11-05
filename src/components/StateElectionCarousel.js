import React, {useState, useEffect} from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function StateElectionCarousel() {
    const items = [
        {
            imageUrl: "article-photos/WhereToVote.jpg",
            category: "2024 Elections",
            title: "Where to vote in Evanston for the 2024 Election",
            author: "Danny O'Grady",
            link: "https://dailynorthwestern.com/2024/10/30/city/where-to-vote-in-evanston-for-the-2024-election/",
        },
        {
            imageUrl: "article-photos/Ogburn.jpg",
            category: "2024 Elections",
            title: "The Daily Explains: Who’s on the ballot for Evanston voters?",
            author: "Lily Ogburn",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
        },
    ];

     // Adjust items per page based on screen size
     const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth <= 768 ? 2 : 1);
     // Update items per page on window resize
     useEffect(() => {
       const handleResize = () => {
           setItemsPerPage(window.innerWidth <= 768 ? 2 : 1);
       };
       
       window.addEventListener("resize", handleResize);
       
       // Cleanup event
       return () => window.removeEventListener("resize", handleResize);
   }, []);
   
   (
      <Box className="carousel-container">
          <Carousel.Root itemsPerPage={itemsPerPage}>
              <Carousel.Header>
                  <Carousel.HeaderContent>
                      <Carousel.Title className="carousel-title">
                        Illinois Election Coverage
                      </Carousel.Title>
                  </Carousel.HeaderContent>
                  <Carousel.HeaderActions className="carousel-actions">
                      <Carousel.PreviousButton />
                      <Carousel.NextButton />
                  </Carousel.HeaderActions>
              </Carousel.Header>

              <Carousel.Content>
                  {items.map((item, index) => (
                      <Carousel.Item key={index}>
                          <Card className="carousel-card">
                          <a href={item.link} target="_blank" rel="noopener noreferrer" className="carousel-card-link">
                              <Box
                                  className="carousel-card-image"
                                  style={{
                                      backgroundImage: `url(${item.imageUrl})`,
                                  }}
                              />
                              <p className="carousel-card-category">{item.category}</p>
                              <h2 className="carousel-card-title">{item.title}</h2>
                              <p className="carousel-card-author">{item.author}</p>
                          </a>
                          </Card>
                      </Carousel.Item>
                  ))}
              </Carousel.Content>

              <Carousel.Footer>
                  <Carousel.Dots />
              </Carousel.Footer>
          </Carousel.Root>
      </Box>
  );
}
