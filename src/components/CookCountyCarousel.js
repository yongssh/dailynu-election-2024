import React, { useEffect, useState } from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css";

export default function CookCountyCarousel() {
    const items = [

        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Democrats win Water Reclamation District seats",
            author: "Sophie Baker and Shreya Srinivasan",
            link: " https://dailynorthwestern.com/2024/11/06/city/democrats-lead-race-for-water-reclamation-district-seats/",
        },
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Mariyana T. Spyropoulos elected Cook County Circuit Court Clerk",
            author: "Femi Horrall",
            link: "https://dailynorthwestern.com/2024/11/05/city/mariyana-t-spyropoulos-elected-cook-county-circuit-court-clerk/",
        },
        {
            imageUrl: "article-photos/POLLS_ShunGraves_CMYK-1200x800.jpg",
            category: "2024 Elections",
            title: "Election Day brings 800 voters to Northwestern polls",
            author: "Jerry Wu",
            link: "https://dailynorthwestern.com/2024/11/05/campus/election-day-brings-800-voters-to-northwestern-polls/",
        },

        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "O’Neill Burke projected to win Cook County State’s Attorney race",
            author: "Jake Epstein",
            link: "https://dailynorthwestern.com/2024/11/05/city/oneill-burke-projected-to-win-cook-county-states-attorney-race/"
        },
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Voters elect Monica Gordon as Cook County clerk in special election",
            author: "Joyce Li",
            link: "https://dailynorthwestern.com/2024/11/05/city/voters-elect-monica-gordon-as-cook-county-clerk-in-special-election/"
        },
        {
            imageUrl: "article-photos/FILE_Voting_SeegerGray-1200x800.jpg",
            category: "2024 Elections",
            title: "Civic Center sees 30% increase in early voting totals compared to 2020",
            author: "Femi Horrall",
            link: "https://dailynorthwestern.com/2024/11/05/city/civic-center-sees-30-increase-in-early-voting-totals-compared-to-2020/"
        },
        {
            imageUrl: "article-photos/Taxay.jpg",
            category: "2024 Elections",
            title: "Innocent until proven guilty: Cook County Jail expands pretrial voter access",
            author: "Naomi Taxay",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/innocent-until-proven-guilty-cook-county-jail-expands-pretrial-voter-access/",
        },
        {
            imageUrl: "article-photos/EverythingEvanston.png",
            category: "2024 Elections",
            title: "Everything Evanston: Local leaders prepare for 2024 election",
            author: "Edward Simon Cruz",
            link: "https://dailynorthwestern.com/2024/11/03/audio/everything-evanston-local-leaders-prepare-for-2024-election/",
        },
        {
            imageUrl: "article-photos/YoutubeSS.png",
            category: "2024 Elections",
            title: "2024 Election Guide for Evanston Voters",
            author: "Ashley Lee",
            link: "https://dailynorthwestern.com/2024/10/30/city/elections2024/2024-election-guide-for-evanston-voters/",
        },
        {
            imageUrl: "article-photos/POLITICAL-CLUBS-Nineth-Kanieski-Koso-min-1200x800.jpg",
            category: "2024 Elections",
            title: "NU political clubs drive discourse ahead of the upcoming election",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/10/28/campus/nu-political-clubs-drive-discourse-ahead-of-the-upcoming-election/",
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
                <Carousel.Header css={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                }}>
                    <Carousel.HeaderContent>
                        <Carousel.Title css={{ color: "#FFF" }}>Cook County Coverage</Carousel.Title>
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
                                    height: isMobile ? "300px" : "450px",
                                    margin: isMobile ? "10px auto" : "0 10px",
                                    marginInline: isMobile ? "0" : "auto",
                                    padding: isMobile ? "$015" : "$075",
                                    padding: isMobile ? "$015" : "$075",
                                    boxShadow: isMobile ? "$150" : "$200",
                                    display: "flex",
                                    borderRadius: "5px",

                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    css={{
                                        backgroundImage: `url('${item.imageUrl}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        // height: "100%",  
                                        height: "180px",
                                        width: "100%",
                                        borderRadius: "$100"
                                    }}
                                />
                                <Box css={{ padding: "10px", flex: "1" }}>
                                    <Box as="p" css={{ fontWeight: "bold", fontSize: isMobile ? "$060" : "$070", color: "#501e4c" }}>
                                        {item.category}
                                    </Box>
                                    <Box as="h2" css={{ fontSize: isMobile ? "$140" : "$150", fontFamily: "$headline", color: "#501e4c" }} id={`article-heading-${i}`}>
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

