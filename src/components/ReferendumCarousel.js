import React, {useState, useEffect} from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function ReferendumCarousel() {
    const items = [
        {
            imageUrl: "article-photos/MISINFORMATION-Isabella-Dumenigo-1200x675.jpg",
            category: "2024 Elections",
            title: "Political misinformation can decrease voter turnout in local elections, local experts warn",
            author: "Isaiah Steinberg",
            link: "https://dailynorthwestern.com/2024/10/30/city/political-misinformation-can-decrease-voter-turnout-in-local-elections-local-experts-warn/",
        },
        {
            imageUrl: "article-photos/REFERENDA-Iliana-Garner-1200x800.jpg",
            category: "2024 Elections",
            title: "Illinois to vote on three advisory referenda: elections, taxes, IVF",
            author: "Naomi Taxay and Shreya Srinivasan",
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
      
      // Cleanup event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <Box className="carousel-container">
          <Carousel.Root itemsPerPage={itemsPerPage}>
              <Carousel.Header>
                  <Carousel.HeaderContent>
                      <Carousel.Title className="carousel-title">
                          Cook County Election Coverage
                      </Carousel.Title>
                  </Carousel.HeaderContent>
                  <Carousel.HeaderActions>
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
