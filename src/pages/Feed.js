import React, { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render () {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Tiago Lammers</span>
                            <span className="place">Panambi</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/avatar dm.jpg" alt=""/>

                    <footer>
                        <div className="actions">
                            <img src={like} alt="" />
                            <img src={comment} alt=""/>
                            <img src={send} alt=""/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post show
                            <span>#react #tag</span>
                        </p>

                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed;
