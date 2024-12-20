import React, {useState, useEffect} from "react";
import { Carousel, Box, Card } from "@washingtonpost/wpds-ui-kit";
import "../App.css"; 

export default function ReferendumCarousel() {
    const items = [
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Illinois voters approve advisory measure expanding coverage for IVF treatments",
            author: "Samanta Habashy and Tia Bethke",
            link: " https://dailynorthwestern.com/2024/11/06/city/illinois-voters-approve-advisory-measure-expanding-coverage-for-ivf-treatments/",
        },
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Illinois voters cast ballots in favor of Property Tax Relief and Fairness Referendum",
            author: "Cassie Sun and Claire Kirwan",
            link: "https://dailynorthwestern.com/2024/11/06/city/illinois-voters-cast-ballots-in-favor-of-property-tax-relief-and-fairness-referendum/",
        },
        {
            imageUrl: "article-photos/ELECTION-RACES-3.png",
            category: "2024 Elections",
            title: "Election worker protection referendum overwhelmingly favored by voters",
            author: "Desiree Luo and Anavi Prakash",
            link: "https://dailynorthwestern.com/2024/11/05/city/election-worker-protection-referendum-overwhelmingly-favored-by-voters/",
        },

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
            link: "https://dailynorthwestern.com/2024/10/30/city/illinois-to-vote-on-three-advisory-referenda-elections-taxes-ivf/",
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
                        <Carousel.Title css={{color: "#501e4c"}}>Referenda Coverage</Carousel.Title>
                    </Carousel.HeaderContent>
                    <Carousel.HeaderActions>
                        <Carousel.PreviousButton />
                        <Carousel.NextButton />
                    </Carousel.HeaderActions>
                </Carousel.Header>
                <Carousel.Content aria-live="polite">
                    {items.map((item, i) => (
                        <Carousel.Item key={item.link} id={item.link} aria-labelledby={`article-heading-${i}`}>
   <a href={item.link} style={{textDecoration:"none"}}><Card
    css={{
        width: isMobile ? "90vw" : "255px", 
        height: "350px",  
        margin: isMobile ? "10px auto" : "0 10px",   
        marginInline: isMobile? "-2px" :"auto", 
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

