
import React, { useState, useEffect } from "react";
import { Carousel, Box, Card, Button, Icon } from "@washingtonpost/wpds-ui-kit";
import "../App.css";

export default function FederalElectionCarousel() {
    const items = [
        {
            imageUrl: "article-photos/EverythingEvanston.png",
            category: "2024 Elections",
            title: "Everything Evanston: Voters prioritize reproductive rights, democracy in 2024 election",
            author: "Edward Simon Cruz, Jack Baker, Matias Castañeda, Dalton Hanna, and Isaac Speyer",
            link: "https://dailynorthwestern.com/2024/11/06/audio/everything-evanston-voters-prioritize-reproductive-rights-democracy-in-2024-election/",
        },
        {
            imageUrl: "article-photos/watchparty.png",
            category: "2024 Elections",
            title: "Students and Evanston residents take in election results at watch parties",
            author: "Ashley Lee, Kara Peeler, Clara Martinez, Jason Xing, Sid Sivaraman, and Sai Trivedi",
            link: "https://dailynorthwestern.com/2024/11/06/video/election-2024-watch-parties/",
        },

        {
            imageUrl: "article-photos/trump.png",
            category: "2024 Elections",
            title: "Donald Trump poised to win presidential election",
            author: "Nicole Markus and Lily Ogburn",
            link: "https://dailynorthwestern.com/2024/11/06/city/donald-trump-poised-to-win-presidential-election/",
        },
        {
            imageUrl: "article-photos/ELECTIONS06_ShunGraves_Bridge-1200x800.jpg",
            category: "2024 Elections",
            title: "Students anxious about election outcome as presidential results remain unclear",
            author: "Nineth Kanieski Koso",
            link: "https://dailynorthwestern.com/2024/11/06/campus/students-anxious-about-election-outcome-as-presidential-results-remain-unclear/",
        },
        {
            imageUrl: "article-photos/ELECTIONS04_ShunGraves_Bridge-1200x800.jpg",
            category: "2024 Elections",
            title: "How Northwestern’s political clubs followed election night",
            author: "Maya Heyman",
            link: "https://dailynorthwestern.com/2024/11/05/campus/how-northwesterns-political-clubs-followed-election-night/",
        },
        {
            imageUrl: "article-photos/ELECTIONS01_ShunGraves_Bridge-1200x800.jpg",
            category: "2024 Elections",
            title: "We talked to students about their feelings on Election Day. Here’s what they said.",
            author: "Mintesinot Sturm",
            link: "https://dailynorthwestern.com/2024/11/05/campus/we-talked-to-students-about-their-feelings-on-election-day-heres-what-they-said/",
        },
        {
            imageUrl: "article-photos/IMG_1046-1200x755.jpg",
            category: "2024 Elections",
            title: "Evanston voters resoundingly support Vice President Kamala Harris in The Daily’s exit surveys",
            author: "Isaiah Steinberg",
            link: " https://dailynorthwestern.com/2024/11/05/lateststories/evanston-voters-resoundingly-support-vice-president-kamala-harris-in-the-dailys-exit-surveys/",
        },
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
                        <Carousel.Title css={{ color: "#FFF" }}>Federal Coverage</Carousel.Title>
                    </Carousel.HeaderContent>
                    <Carousel.HeaderActions>
                        <Carousel.PreviousButton />
                        <Carousel.NextButton />
                    </Carousel.HeaderActions>
                </Carousel.Header>
                <Carousel.Content aria-live="polite">
                    {items.map((item, i) => (
                        <Carousel.Item key={item.link} id={item.link} aria-labelledby={`article-heading-${i}`}>
                            <a href={item.link} style={{ textDecoration: "none" }}>
                                <Card
                                    css={{
                                        width: isMobile ? "90vw" : "255px",
                                        height: "450px",
                                        margin: isMobile ? "10px auto" : "0 10px",
                                        marginInline: isMobile ? "0" : "auto",
                                        padding: isMobile ? "$015" : "$075",
                                        boxShadow: isMobile ? "$150" : "$200",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "5px",

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
                                    <Box css={{ padding: "$100" }}> {/* Content container */}
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
