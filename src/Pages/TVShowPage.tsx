import React from 'react';
import LazyLoad from 'react-lazyload';
import GalleryComponent from "../Components/GalleryComponent";
import {fetchShowData} from "../Utils/FetchAPI";



class TVShowPage extends React.Component<any, any>{
    constructor(props : any) {
        super(props)

        this.state = {
            shows : []
        }
    }

    getShows() {
        fetchShowData()
            .then((res : any) => {
                this.setState({
                    shows : res
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getShows();
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log("Updated")
    }

    render() {
        return (
            <GalleryComponent items={this.state.shows} />
        )
    }
}

export default TVShowPage;