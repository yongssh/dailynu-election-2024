import React from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function FederalElectionCarousel() {
    const items = [
        {
            imageUrl: "/article-photos/JONES_Nineth_CMYK-1200x800.jpg",
            category: "2024 Elections",
            title: "CNN political analyst Van Jones talks life experiences, upcoming election at NU College Democrats event",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/10/30/campus/cnn-political-analyst-van-jones-talks-life-experiences-upcoming-election-at-nu-college-democrats-event/",
        },
        {
            imageUrl: "/article-photos/NowIsWhenWeHavePower.jpg",
            category: "2024 Elections",
            title: "“Now is when we have power”: Voters consider withholding presidential votes in protest of war in Gaza",
            author: "Femi Horrall",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
        },
        {
            imageUrl:"/article-photos/KosoThomasMiller.png",
            category: "2024 Elections",
            title: "Who’s leading the presidential race? This NU professor says the answer lies in election betting markets",
            author:"Nineth Kanieski Koso",
            link:"https://dailynorthwestern.com/2024/10/30/campus/whos-leading-the-presidential-race-this-nu-professor-says-the-answer-lies-in-election-betting-markets/"

        },
        {
          imageUrl:"/article-photos/Hwang.png",
          category: "2024 Elections",
          title: "We asked students how they’re feeling about the election. Here’s what they said.",
          author:"Scott Hwang",
          link:"https://dailynorthwestern.com/2024/10/30/campus/we-asked-students-how-theyre-feeling-about-the-election-heres-what-they-said/"

      }

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
                Federal Election Coverage
              </Carousel.Title>
            </Carousel.HeaderContent>

            {/* Previous and Next Buttons */}
            <Carousel.HeaderActions class="carousel-header-actions">
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
