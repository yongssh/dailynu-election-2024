import React, { useEffect, useState } from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function CookCountyCarousel() {
    const items = [
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
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
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
        <Box css={{ paddingInline: isMobile?"$5" : "$100", width: isMobile? "95vw":"72vw", margin: "0 auto" }}>
            <Carousel.Root itemsPerPage={isMobile ? 1 : 3}>
                <Carousel.Header>
                    <Carousel.HeaderContent>
                        <Carousel.Title>Cook County Coverage</Carousel.Title>
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
        padding: isMobile ? "$015" : "$075",
        boxShadow: isMobile ? "$150" : "$200",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }}
>
    <Box 
        css={{
            backgroundImage: `url('${item.imageUrl}')`,
            backgroundSize: 'cover',  
            backgroundPosition: 'center',  
            height: "40%",  
            width: "100%",
        }}
    />
    <Box css={{ padding: "10px", flex: "1" }}>
        <Box as="p" css={{ fontWeight: "bold", fontSize: isMobile ? "$060" : "$070" }}>
            {item.category}
        </Box>
        <Box as="h2" css={{ fontSize: isMobile ? "$140" : "$150", fontFamily: "$headline" }} id={`article-heading-${i}`}>
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

