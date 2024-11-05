
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
  

      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Box css={{ paddingInline: isMobile?"$5" : "$100", width: isMobile? "95vw":"71vw", margin: "0 auto" }}>
            <Carousel.Root itemsPerPage={isMobile ? 1 : 3}>
                <Carousel.Header>
                    <Carousel.HeaderContent>
                        <Carousel.Title>Federal Coverage</Carousel.Title>
                    </Carousel.HeaderContent>
                    <Carousel.HeaderActions>
                        <Carousel.PreviousButton />
                        <Carousel.NextButton />
                    </Carousel.HeaderActions>
                </Carousel.Header>
                <Carousel.Content aria-live="polite">
                    {items.map((item, i) => (
                        <Carousel.Item key={item.link} id={item.link} aria-labelledby={`article-heading-${i}`}>
 <Card
    css={{
        width: isMobile ? "90vw" : "255px", 
        height: "450px", 
        margin: isMobile ? "10px auto" : "0 10px", 
        marginInline: isMobile? "0" :"auto",  
        padding: isMobile ? "$015" : "$075",
        boxShadow: isMobile ? "$150" : "$200",
        display: "flex",
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
    <Box css={{ padding: "$100" }}> {/* Content container */}
        <Box as="p" css={{ fontWeight: "bold", fontSize: isMobile ? "$060" : "$070" }}>
            {item.category}
        </Box>
        <Box as="h2" css={{ fontSize: isMobile ? "$120" : "$150", fontFamily: "$headline", margin: "10px 0" }} id={`article-heading-${i}`}>
            {item.title}
        </Box>
        <Box as="p" css={{ color: "$accessible", fontSize: isMobile ? "$065" : "$075" }}>
            {item.author}
        </Box>
        <Box as="a" href={item.link} css={{ color: "$accessible", fontSize: isMobile ? "$065" : "$075", textDecoration: "underline" }}>
            Read more
        </Box>
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
