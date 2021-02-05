import * as React from 'react';
import Header from '../Components/Header-Component';

interface movieInfo {
    category: string,
    index: number
}

const HomePage = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}

export default HomePage;