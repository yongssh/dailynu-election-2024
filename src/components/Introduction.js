import React from 'react';
import { Accordion, Box } from '@washingtonpost/wpds-ui-kit';
import "../App.css"; 

const Introduction = () => {
    return (
        <section style={{ padding: '10px', border:'2px solid #967893' }}>
            <p>Welcome to <em>The Daily Northwestern</em>'s coverage of the 2024 Elections. Explore our brief explainers of what we're reporting on tonight.</p>
            <Box className="introduction-container"
            >
                <Accordion.Root type="single" collapsible={true}>
                    <Accordion.Item value={"item-1"}>
                        <Accordion.Trigger>
                        
                                Federal
                       
                        </Accordion.Trigger>
                        <Accordion.Content style={{ padding: '5px'}}>
                            <div style={{fontSize:"14px", marginTop: "5px", lineHeight: "1.0" }}>
                               We're covering the race for President and Vice President, as well as the election for Illinois' 9th Congressional District Representative. 
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value={"item-2"}>
                        <Accordion.Trigger>
                                Illinois
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <div style={{ fontSize:"14px", marginTop: "5px", lineHeight: "1.0" }}>
                              The general election for the Illinois House of Representatives' 17th and 18th Districts is afoot.
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value={"item-3"}>
                        <Accordion.Trigger>
                                Cook County
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <div style={{ fontSize:"14px", marginTop: "5px", lineHeight: "1.0" }}>
                               Tune in to learn about the races for the Cook County State's Attorney, the Cook County Clerk, the Cook County Circuit Court Clerk, and the Water Reclamation District.
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item value={"item-4"}>
                        <Accordion.Trigger>
                           
                                Referenda
     
                        </Accordion.Trigger>
                        <Accordion.Content>
                            <div style={{ fontSize:"14px", marginTop: "5px", lineHeight: "1.0" }}>
                                Voters are deciding on the following referenda: <br /><br />
                                <b>Election Worker Protection Referendum:</b> "Should any candidate appearing on the Illinois ballot for federal, State, or local office be subject to civil penalties if the candidate interferes or attempts to interfere with an election worker's official duties?"<br /><br />
                                <b>Property Tax Relief and Fairness Referendum:</b> "Should the Illinois Constitution be amended to create an additional 3% tax on income greater than $1,000,000 for the purpose of dedicating funds raised to property tax relief?"<br /><br />
                                <b>Assisted Reproductive Health Referendum:</b> "Should all medically appropriate assisted reproductive treatments, including, but not limited to, in vitro fertilization, be covered by any health insurance plan in Illinois that provides coverage for pregnancy benefits, without limitation on the number of treatments?"<br /><br />
                            </div>
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </Box>
        </section>
    );
};

export default Introduction;
