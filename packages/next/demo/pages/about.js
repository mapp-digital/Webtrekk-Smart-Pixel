import React from 'react';
import Layout from '../components/Layout';
import {WebtrekkPageData} from './../../index';

class About extends React.Component {
    render() {
        return (
            <Layout>
                <p>This is the about page</p>

                <WebtrekkPageData
                    name="Batman TV Shows - About"
                />
            </Layout>
        );
    }
}

export default About;
