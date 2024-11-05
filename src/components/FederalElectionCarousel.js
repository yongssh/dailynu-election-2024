
  import React, { useState, useEffect } from "react";
  import { Carousel, Box, Card, Button, Icon } from "@washingtonpost/wpds-ui-kit";
  import "../App.css";
  
  export default function FederalElectionCarousel() {
      const items = [
        {
            imageUrl: "article-photos/JONES_Nineth_CMYK-1200x800.jpg",
            category: "2024 Elections",
            title: "CNN political analyst Van Jones talks life experiences, upcoming election at NU College Democrats event",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/10/30/campus/cnn-political-analyst-van-jones-talks-life-experiences-upcoming-election-at-nu-college-democrats-event/",
        },
        {
            imageUrl: "article-photos/NowIsWhenWeHavePower.jpg",
            category: "2024 Elections",
            title: "“Now is when we have power”: Voters consider withholding presidential votes in protest of war in Gaza",
            author: "Femi Horrall",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
        },
        {
            imageUrl: "article-photos/KosoThomasMiller.png",
            category: "2024 Elections",
            title: "Who’s leading the presidential race? This NU professor says the answer lies in election betting markets",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/10/30/campus/whos-leading-the-presidential-race-this-nu-professor-says-the-answer-lies-in-election-betting-markets/"
        },
        {
            imageUrl: "article-photos/Hwang.png",
            category: "2024 Elections",
            title: "We asked students how they’re feeling about the election. Here’s what they said.",
            author: "Scott Hwang",
            link: "https://dailynorthwestern.com/2024/10/30/campus/we-asked-students-how-theyre-feeling-about-the-election-heres-what-they-said/"
        },
        {
            imageUrl: "article-photos/ELECTION-ANXIETY-1200x900.jpg",
            category: "2024 Elections",
            title: "Lake Street Church offers meditative strategies to alleviate election anxiety",
            author: "Maia Alvarez",
            link: "https://dailynorthwestern.com/2024/10/24/city/lake-street-church-offers-meditative-strategies-to-alleviate-election-anxiety/",
        },
    ];
  

    // State to manage items per page
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
                            Federal Election Coverage
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