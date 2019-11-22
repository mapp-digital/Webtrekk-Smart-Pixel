import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {WebtrekkPageData} from './../../index';

class Index extends React.Component {
    componentDidMount() {
        // WebtrekkSmartPixelReact.init({
        //    trackId: '123451234512345',
        //    trackDomain: 'analytics01.webtrekk.net'
        // });
        // WebtrekkSmartPixelReact.page('Batman TV Shows', {
        //    parameter: {
        //        1: `${this.props.shows.length}`
        //    }
        // });
        // WebtrekkSmartPixelReact.track();
    }

    render() {
        return (
            <Layout>
                <h1>Batman TV Shows</h1>
                <ul>
                    {this.props.shows.map(show => (
                        <li key={show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <style jsx>{`
                    h1, a {
                      font-family: 'Arial';
                    }

                    ul {
                      padding: 0;
                    }

                    li {
                      list-style: none;
                      margin: 5px 0;
                    }

                    a {
                      text-decoration: none;
                      color: blue;
                    }

                    a:hover {
                      opacity: 0.6;
                    }
                `}</style>

                <WebtrekkPageData
                    name="Batman TV Shows - Home"
                    parameter={{
                        1: `${this.props.shows.length}`
                    }}
                />
            </Layout>
        );
    }
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    // WebtrekkSmartPixelReact.init({
    //    trackId: '123451234512345',
    //    trackDomain: 'analytics01.webtrekk.net'
    // });
    // WebtrekkSmartPixelReact.page('Batman TV Shows', {
    //    parameter: {
    //        1: `${data.length}`
    //    }
    // });
    // WebtrekkSmartPixelReact.track();

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
