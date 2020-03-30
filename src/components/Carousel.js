import React from 'react';

import github from '../assets/images/github.jpg';
import profile from '../assets/images/profile.jpg';
import twitter from '../assets/images/twitter.png'
import Card from './Card';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[
                {
                    id: 0,
                    title:"GitHub",
                    subtitle: "My Repositories",
                    imageSrc: github,
                    link: "https://github.com/BlueDiablos?tab=repositories",
                    selected: false
                },
                {
                    id: 1,
                    title:"Joseph Blackledge",
                    subtitle: "LinkedIn Profile",
                    imageSrc: profile,
                    link: "https://www.linkedin.com/in/jblackl3/",
                    selected: false
                },
                {
                    id: 2,
                    title:"Twitter",
                    subtitle: "@Auth403",
                    imageSrc: twitter,
                    link: "https://twitter.com/Auth403",
                    selected: false
                }

              
            
            ]

            
        }
    }

    handleCardClick = (id) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item =>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
             <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
             </Row>
            </Container>
        );
    }
}

export default Carousel;