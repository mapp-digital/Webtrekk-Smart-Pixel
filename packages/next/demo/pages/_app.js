import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import {WebtrekkAutoTracking} from './../../index';

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;

        return (
            <div id="foo">
                <div id="bar">
                    <div>
                        <Component {...pageProps} />
                        <WebtrekkAutoTracking
                            trackId="123451234512345"
                            trackDomain="analytics01.webtrekk.net"
                            router={Router}
                            activateActions={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MyApp;
