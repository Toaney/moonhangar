import React from 'react';
import Hero from '../components/hero';
import Feature from '../components/feature';
import axios from 'axios';

const Landing = () => {
    const [assets, setAssets] = React.useState([]);

    const get_assets = () => {
        axios
        .get("/travel-assets")
        .then(res => {
            setAssets(res.data)
        })
        .catch((err) => {
            console.log(err)
        });
    };

    React.useEffect(() => {
        get_assets();
    }, []);

    return (
        <div className="page">
            <h1>moonhangar</h1>
            <p>pi projects</p>
            <p>paintings</p>
            <p>bike routes</p>
            <p>diy</p>
        </div>
    )
}

export default Landing;