import React from 'react';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import {WebtrekkPageData} from './../../../index';

class Post extends React.Component {
    render() {
        return (
            <Layout>
                <h1>{this.props.show.name}</h1>
                <p>{this.props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
                <img src={this.props.show.image.medium} />

                <WebtrekkPageData
                    name={`Batman TV Shows - ${this.props.show.name}`}
                    articleTitle={`Batman TV Shows - ${this.props.show.name}`}
                    title={`${this.props.show.name}`}
                    parameter={{
                        1: `${this.props.show.id}`,
                        3: `${this.props.show.type}`,
                        5: `${this.props.show.language}`
                    }}
                    category={{
                        1: this.props.show.genres[0],
                        2: this.props.show.genres[1],
                        3: this.props.show.genres[2]
                    }}
                />
            </Layout>
        );
    }
}

Post.getInitialProps = async function(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return {show};
};

export default Post;
