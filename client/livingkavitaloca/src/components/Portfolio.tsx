import * as React from 'react';
import styled from 'styled-components';
import SnazzyDivider from './SnazzyDivider';
import ModalPopup from './ModalPopup';
import * as resume from './resume.json';

const FlexColumnOnMobileDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

const ALink = styled.a`
    font-size: 17px !important;
`;

const WorkLinkStyledP = styled.p`
    font-variant: all-small-caps;
    font-family: RailwayBold, Arial, serif;
    font-size: 20px;
    text-decoration: underline;
    a:active,
    a:link,
    a:visited {
        color: black;
        font-size: 16px;
        text-decoration: underline;
    }
    a:hover {
        color: blue;
    }
`;
const StyledImg = styled.img`
    border-radius: 18px;
    max-height: 600px;
`;
const FlexDivContainer = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;

    flex-direction: column;
    @media (max-width: 670px) {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 13px;
    }
    align-items: baseline;
`;
const TopDivContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
`;
const AboutMeContentDiv = styled.div`
    background: #fff6ed;
    padding: 38px;
    height: 100%;
    border-radius: 40px;
    font-weight: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: 'ArchivoLight', sans-serif;
    a:active,
    a:link,
    a:visited {
        color: black;
        text-decoration: underline;
    }
    a:hover {
        color: #ffaaf5;
    }
`;
const MainText = styled.div`
    font-family: 'Lobster', cursive;
    justify-content: flex-start;
    max-width: 50%;
    display: flex;
    color: white;

    font-size: calc(50px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    @media (max-width: 670px) {
        font-size: calc(50px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
        flex-direction: column;
    }
`;

const PortfolioSubHeader = styled.div`
    font-family: 'Lobster', cursive;
    justify-content: center;
    display: flex;
    font-size: calc(20px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    color: black;
`;
type WorkLink = {
    url: string;
    title: string;
};
type WorkDescription = {
    description: string;
    img: string;
    title: string;
    links?: WorkLink[];
};
const Porfolio: React.FC = () => {
    const resumeKeys: string[] = Object.keys(resume).filter((value, index) => value !== 'default');
    const [open, setOpen] = React.useState<boolean>(false);
    const [selectedItem, setSelectedItem] = React.useState<WorkDescription>();
    const handleClose = () => setOpen(!open);

    return (
        <div>
            <FlexDivContainer>
                <TopDivContainer>
                    <MainText>Portfolio</MainText>
                    <SnazzyDivider />
                </TopDivContainer>

                <AboutMeContentDiv>
                    <p className="header-font-caps font-size-sm-20 display-flex-center">
                        Here's some of the cool things I've contributed. Click the underlined titles to see more
                    </p>
                    {resumeKeys.map((workKey, i) => {
                        const workList: WorkDescription[] = resume[workKey].workList;
                        const tech: string[] = resume[workKey].technologies;

                        const workListDOM = workList.map((work: WorkDescription, index: number) => {
                            return (
                                <div className={'display-flex-column'} style={{ padding: '20px' }} key={index}>
                                    <WorkLinkStyledP
                                        onClick={() => {
                                            setSelectedItem(work);
                                            handleClose();
                                        }}
                                    >
                                        {work.title}
                                    </WorkLinkStyledP>
                                    {work.description}

                                    {work.links && (
                                        <p>
                                            {'Links: '}
                                            {work.links.map((workLink: WorkLink) => (
                                                <ALink
                                                    key={workLink.title}
                                                    href={workLink.url}
                                                    target={'_blank'}
                                                    rel="noreferrer"
                                                >
                                                    {workLink.title}
                                                </ALink>
                                            ))}
                                        </p>
                                    )}
                                </div>
                            );
                        });
                        return (
                            <div key={`${i}-${workKey}`}>
                                <PortfolioSubHeader>{workKey}</PortfolioSubHeader>
                                <p className="header-font-caps font-size-sm-15 display-flex-center">
                                    {tech.map((value, ix) => (ix === 0 ? value : `- ${value}`))}
                                </p>

                                <SnazzyDivider />
                                <FlexColumnOnMobileDiv>{workListDOM}</FlexColumnOnMobileDiv>
                            </div>
                        );
                    })}
                    {selectedItem && selectedItem.img && (
                        <ModalPopup title={selectedItem.title} open={open} handleClose={handleClose}>
                            <div className="display-flex-center">
                                <StyledImg src={selectedItem.img} />
                            </div>
                        </ModalPopup>
                    )}
                </AboutMeContentDiv>
            </FlexDivContainer>
        </div>
    );
};

export default Porfolio;
