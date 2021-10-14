import Header from './Header';
// import {WebtrekkInitData, WebtrekkAutoTracking} from './../../index';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <>
        <div style={layoutStyle}>
            <Header />
            {props.children}
        </div>

        {/*
            <WebtrekkAutoTracking
                trackId="123451234512345"
                trackDomain="analytics01.webtrekk.net"
            />
        */}
    </>
);

export default Layout;
