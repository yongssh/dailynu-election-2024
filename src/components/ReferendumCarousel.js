import React, {useState, useEffect} from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function ReferendumCarousel() {
    const items = [
        {
            imageUrl: "article-photos/MISINFORMATION-Isabella-Dumenigo-1200x675.jpg",
            category: "2024 Elections",
            title: "Political misinformation can decrease voter turnout in local elections, local experts warn",
            author: "Isaiah Steinberg",
            link: "https://dailynorthwestern.com/2024/10/30/city/political-misinformation-can-decrease-voter-turnout-in-local-elections-local-experts-warn/",
        },
        {
            imageUrl: "article-photos/REFERENDA-Iliana-Garner-1200x800.jpg",
            category: "2024 Elections",
            title: "Illinois to vote on three advisory referenda: elections, taxes, IVF",
            author: "Naomi Taxay and Shreya Srinivasan",
            link: "https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/",
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
                        <Carousel.Title>Referenda Coverage</Carousel.Title>
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
        width: isMobile ? "90vw" : "255px", // Set width for mobile and desktop
        height: "350px", // Set consistent height for all cards
        margin: isMobile ? "10px auto" : "0 10px", // Center on mobile and add margin for desktop
        marginInline: isMobile? "-2px" :"auto", // Center the card 
        padding: isMobile ? "10px" : "$075",
        boxShadow: isMobile ? "$150" : "$200",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}
>
    <Box // Image container
        css={{
            backgroundImage: `url('${item.imageUrl}')`,
            backgroundSize: 'cover', // Ensure images fill the container
            backgroundPosition: 'center', // Center the image in the container
            height: "180px", // Fixed height for uniform aspect ratio
            borderRadius: "$100", // Optional, for rounded corners
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
        <Box as="a" href={item.link} css={{ color: "$accessible", fontSize: isMobile ? "$065" : "$075", textDecoration: "none" }}>
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

