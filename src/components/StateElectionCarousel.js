import React from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";

export default function StateElectionCarousel() {
    const items = [
        {
            imageUrl: "/JONES_Nineth_CMYK-1200x800.jpg",
            category: "2024 Elections",
            title: "CNN political analyst Van Jones talks life experiences, upcoming election at NU College Democrats event",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/10/30/campus/cnn-political-analyst-van-jones-talks-life-experiences-upcoming-election-at-nu-college-democrats-event/",
        },
        {
            imageUrl: "/NowIsWhenWeHavePower.jpg",
            category: "2024 Elections",
            title: "“Now is when we have power”: Voters consider withholding presidential votes in protest of war in Gaza",
            author: "Femi Horrall",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
        },
    ];

    return (
      <Box className="carousel-container">
        <Carousel.Root>

          {/* Carousel Header */}
          <Carousel.Header>
            <Carousel.HeaderContent>
              <Carousel.Title className="carousel-title">
                State Election Coverage
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
                {/* Wrap the entire Card in an anchor tag */}
                <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <Card
                    key={"item" + index}
                    css={{
                      width: "300px",
                      height: "400px", // Fixed height for uniformity
                      marginBlockEnd: "$025",
                      marginInlineEnd: "$100",
                      padding: "$100",
                      boxShadow: "$200",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >

                    {/* Article image */}
                    <Box
                      css={{
                        backgroundImage: `url(${item.imageUrl})`,
                        display: "flex",
                        alignItems: "flex-end",
                        height: "150px", // Fixed height for uniformity
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                      {item.category}
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
                      {item.title}
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
