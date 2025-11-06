import React, { useState, useEffect } from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css";

export default function StateElectionCarousel() {
    const items = [
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Incumbent Jennifer Gong-Gershowitz projected to win fourth consecutive election for 17th district of the Illinois House of Representatives",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/11/05/city/elections2024/incumbent-jennifer-gong-gershowitz-projected-to-win-fourth-consecutive-election-for-17th-district-of-the-illinois-house-of-representatives/",
        },
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "State House Majority Leader Robyn Gabel projected to win reelection",
            author: "William Tong",
            link: "https://dailynorthwestern.com/2024/11/05/city/elections2024/state-house-majority-leader-robyn-gabel-projected-to-win-reelection/",
        },
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
            link: "https://dailynorthwestern.com/2024/10/06/city/the-daily-explains-whos-on-the-ballot-for-evanston-voters/",
        },
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box css={{ paddingInline: isMobile ? "$5" : "$100", width: isMobile ? "95vw" : "80vw", margin: "0 auto" }}>
            <Carousel.Root itemsPerPage={isMobile ? 1 : 3}>
                <Carousel.Header>
                    <Carousel.HeaderContent>
                        <Carousel.Title css={{ color: "#FFF" }}>Illinois Coverage</Carousel.Title>
                    </Carousel.HeaderContent>
                    <Carousel.HeaderActions>
                        <Carousel.PreviousButton />
                        <Carousel.NextButton />
                    </Carousel.HeaderActions>
                </Carousel.Header>
                <Carousel.Content aria-live="polite">
                    {items.map((item, i) => (
                        <Carousel.Item key={item.link} id={item.link} aria-labelledby={`article-heading-${i}`}>
                            <a href={item.link} style={{ textDecoration: "none" }}><Card
                                css={{
                                    width: isMobile ? "90vw" : "255px",
                                    height: "450px",
                                    margin: isMobile ? "10px auto" : "0 10px",
                                    marginInline: isMobile ? "0" : "auto",
                                    padding: isMobile ? "$015" : "$075",
                                    boxShadow: isMobile ? "$150" : "$200",
                                    display: "flex",
                                    borderRadius: "5px",
                                    flexDirection: "column",
                                    justifyContent: "space-between"
                                }}
                            >
                                <Box
                                    css={{
                                        backgroundImage: `url('${item.imageUrl}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: "180px",
                                        borderRadius: "$100",
                                    }}
                                />
                                <Box css={{ padding: "$100" }}>
                                    <Box as="p" css={{ fontWeight: "bold", fontSize: isMobile ? "$060" : "$070", color: "#501e4c" }}>
                                        {item.category}
                                    </Box>
                                    <Box as="h2" css={{ fontSize: isMobile ? "$120" : "$150", fontFamily: "$headline", margin: "10px 0", color: "#501e4c" }} id={`article-heading-${i}`}>
                                        {item.title}
                                    </Box>
                                    <Box as="p" css={{ color: "$accessible", fontSize: isMobile ? "$065" : "$075", color: "#501e4c" }}>
                                        {item.author}
                                    </Box>
                                    <Box as="a" href={item.link} css={{ color: "$accessible", fontSize: isMobile ? "$065" : "$075", textDecoration: "underline", color: "#501e4c" }}>
                                        Read more
                                    </Box>
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
