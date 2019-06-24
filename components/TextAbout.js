import React from "react";
import styled from "styled-components";

const TextAboutStyled = styled.div`
    width: 270px;
    margin:auto;
    .textSection{
        margin-bottom:5%;
    }
    .aboutImg{
        width: 270px;
        border-radius:50%;
    }
    .textSectionFirst__left__text, .textSectionFirst__right__text{
        text-align:justify;
        line-height:2rem;
    }
    .textSectionFirst__left__heading{
        margin:2rem 0;
    }
    @media (min-width: ${props => props.theme.tabletWidth}) {
        width: 610px;
        .aboutImg{
        width: 610px;
        }
    }
    @media (min-width: ${props => props.theme.desktopWidth}) {
        width: 1050px;
    .aboutImg{
        width: 525px;
        box-sizing:border-box;
    }
    .textSection{
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .textSectionFirst__left, .textSectionFirst__right, .textSectionSecond__left, .textSectionSecond__right{
        flex:1;
    }
    .textSectionFirst__left, .textSectionSecond__left{
        order:1;
        margin-right:5%;
    }
    .textSectionFirst__right, .textSectionSecond__right{
        order:2;
    }
    .textSectionFirst__left__heading{
        margin:2rem 0;
    }
} 
`;

class TextAbout extends React.Component{
    render(){
        return(
            <TextAboutStyled>
            <div className="textSection textSectionFirst">
                <div className="textSectionFirst__left">
                    <h2 className="textSectionFirst__heading">Experience for young and old</h2>
                    <p className="textSectionFirst__left__text">Gouda is an attraction richer with 
                    the Gouda Cheese Experience. The initiators behind the experience are Mia Schaap, 
                    Ronald Boom, Femke van Munster and Rik Dijkgraaf. Femke van Munster explains: “It is an 
                    experience for young and old and takes you on an interactive journey through 
                    the world of Gouda Cheese</p>
                    <h2 className="textSectionFirst__heading">Note!</h2>
                    <p className="textSectionFirst__left__text">
                    Visitors get to work with discovery walls, virtual milking, turning cheese and 
                    the age-old hand-clapping. Everything is devoted to cows, milk and cheese. " 
                    Van Munster:" And of course the visitors do not leave until they have tasted the 
                    one and only Gouda Cheese and drank a glass of milk! 
                    </p>
                </div>

                <div className="textSectionFirst__right">
                    <img src="/static/img/about1.jpg" alt="" className="aboutImg"/>
                </div>
            </div>
            <div className="textSection textSectionSecond">

                <div className="textSectionSecond__right"> 

                    <h2 className="textSectionFirst__heading">Opening</h2>
                    <p className="textSectionFirst__right__text">Van Munster joint project : “We are so happy that we are officially starting today. 
                    Behind the scenes Rik and I have been busy for a long time. Thanks to our partners Vergeer Holland, Campina, the municipality of Gouda and the province of South Holland, we are able 
                    to embark on this great adventure . ”Partner Diederik Vergeer, General Manager at Vergeer 
                    Holland sees only opportunities:“ We think it's fantastic that there now an attraction is finally being opened that allows interested parties from home and abroad to get acquainted in an original way 
                    with everything about Gouda Cheese, including tasting different Gouda Cheese ages'. </p>
                     
                    <h2 className="textSectionFirst__heading">Thanks</h2>
                    
                    <div className="textSectionSecond__left">
                    <p className="textSectionFirst__right__text">Patrick van der Aa, Global Director 
                    of Category Cheese at FrieslandCampina, is also enthusiastic: 
                    “It's not just a great experience for visitors. We think
                    it is also nice that our farmers, who work hard every day, every day, 
                    can proudly walk through this attraction. ”</p>
                    </div>
                </div>

                <div className="textSectionSecond__left">
                <img src="/static/img/about2.jpg" alt="" className="aboutImg"/>
                </div>

            </div>
            </TextAboutStyled>
        );
    };
};
export default TextAbout;