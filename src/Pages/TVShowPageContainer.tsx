import React from 'react';
import GalleryComponent from "../Components/GalleryComponent";
import {fetchShowData} from "../Utils/FetchAPI";



class TVShowPageContainer extends React.Component<any, any>{
    constructor(props : any) {
        super(props)
        this.state = {
            shows : []
        }
    }

    /**
     * Fetch shows array for TV Show Page
     * fetchShowData returns a promise [Array : objects]
     */
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

export default TVShowPageContainer;