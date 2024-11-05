import React, {useEffect, useState} from "react";
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
                             Cook County Coverage
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
                             <Card className="carousel-card">\ <a href={item.link} target="_blank" rel="noopener noreferrer" className="carousel-card-link">
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