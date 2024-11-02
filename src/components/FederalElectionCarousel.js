import React from "react";
import { Carousel, Box, Card, Button, Icon } from "@washingtonpost/wpds-ui-kit";

export default function FederalElectionCarousel() {
    const items = new Array(10).fill(" ");
    return (
        
      <Box className="carousel-container">
        <Carousel.Root>

          {/* Carousel Header */}
          <Carousel.Header>
            <Carousel.HeaderContent>
              <Carousel.Title className="carousel-title">
                Federal Election Coverage
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
            {items.map((item, i) => (
              <Carousel.Item key={item}>
                <Card
                  key={"item" + i}
                  css={{
                    width: "300px",
                    marginBlockEnd: "$025",
                    marginInlineEnd: "$100",
                    padding: "$100",
                    boxShadow: "$200",
                  }}
                >

                  {/* Article image */}
                  <Box
                    css={{
                      backgroundImage: "url('/../../public/daily.png')",
                      display: "flex",
                      alignItems: "flex-end",
                      height: "151px",
                      marginBlockEnd: "$050",
                      padding: "$100",
                    }}
                  >
                  </Box>

                  {/* Article Category */}
                  <Box
                    as="p"
                    css={{
                      fontWeight: "bold",
                      fontSize: "$075",
                      marginBlockStart: 0,
                      marginBlockEnd: "$025",
                    }}
                  >
                    2024 Elections
                  </Box>

                  {/* Article Title */}
                  <Box
                    as="h2"
                    css={{
                      fontSize: "$150",
                      fontFamily: "$headline",
                      marginBlockStart: 0,
                      marginBlockEnd: "$050",
                    }}
                  >
                    Daily Article
                  </Box>

                  {/* Article Author */}
                  <Box
                    as="a"
                    href="#"
                    css={{
                      color: "$accessible",
                      fontSize: "$087",
                      textDecoration: "none",
                    }}
                  >
                    By The Daily Northwestern
                  </Box>

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
