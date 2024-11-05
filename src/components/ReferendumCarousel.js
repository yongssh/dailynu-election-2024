import React from "react";
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

    const maxWidth = window.innerWidth < 768 ? "100%" : "55%"; 
    const maxItemsPerPage = window.OverconstrainedError < 768? 2 : 1;
    return (
      <Box className="carousel-container">
        <Carousel.Root style={{ maxWidth: maxWidth }} itemsPerPage={maxItemsPerPage}>
          {/* Carousel Header */}
          <Carousel.Header>
            <Carousel.HeaderContent>
              <Carousel.Title className="carousel-title">
                Referenda Coverage
              </Carousel.Title>
            </Carousel.HeaderContent>

            {/* Previous and Next Buttons */}
            <Carousel.HeaderActions>
              <Carousel.PreviousButton />
              <Carousel.NextButton />
            </Carousel.HeaderActions>
          </Carousel.Header>

          {/* Carousel content */}
          <Carousel.Content>
            {items.map((item, index) => (
              <Carousel.Item key={index}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Card className="carousel-card">
                    {/* Article image */}
                    <Box
                      className="carousel-card-image"
                      css={{
                        backgroundImage: `url(${item.imageUrl})`,
                      }}
                    />

                    {/* Article Category */}
                    <Box as="p" className="carousel-card-category">
                      {item.category}
                    </Box>

                    {/* Article Title */}
                    <Box as="h2" className="carousel-card-title">
                      {item.title}
                    </Box>

                    {/* Article Author */}
                    <Box as="a" href="#" className="carousel-card-author">
                      {item.author}
                    </Box>
                  </Card>
                </a>
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
