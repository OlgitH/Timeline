'use strict';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "./owl.css";

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                loop: true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            },

            items: [
                <div className="item" key={1}><h4>1</h4></div>,
                <div className="item" key={2}><h4>2</h4></div>,
                <div className="item" key={3}><h4>3</h4></div>
            ],

        };
    }

    addItem() {
        let { items } = this.state;
        items.push(
            <div className="item" key={items.length + 1}><h4>{items.length + 1}</h4></div>
        )

        this.setState({items})
    }

    deleteItem() {
        let { items, options } = this.state;
        items.pop();

        options.loop = items.length >= 5;
        this.setState({items, options});
    }

    render() {
        return (
            <div>
                <OwlCarousel
                    ref={inst => this.slider = inst}
                    className="owl-theme"
                    {...this.state.options}
                >
                    {this.state.items}
                </OwlCarousel>

                <button onClick={this.addItem.bind(this)}>
                    Add New Item
                </button>

                <button onClick={this.deleteItem.bind(this)}>
                    Delete last Item
                </button>
            </div>
        );
    }
}

export default Demo;
