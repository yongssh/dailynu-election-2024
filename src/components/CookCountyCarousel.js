import React from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function CookCountyCarousel() {
    const items = [
        {
            imageUrl: "/article-photos/Taxay.jpg",
            category: "2024 Elections",
            title: "Innocent until proven guilty: Cook County Jail expands pretrial voter access",
            author: "Naomi Taxay",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/innocent-until-proven-guilty-cook-county-jail-expands-pretrial-voter-access/",
        },
        {
            imageUrl: "/article-photos/NowIsWhenWeHavePower.jpg",
            category: "2024 Elections",
            title: "“Now is when we have power”: Voters consider withholding presidential votes in protest of war in Gaza",
            author: "Femi Horrall",
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
                Cook County Coverage
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
