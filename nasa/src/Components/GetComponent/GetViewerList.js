import React, { useState, useEffect, useReducer } from 'react';
import axios from '../../Api/axios'
import GetViewer from './GetViewer';

const reducer = (state, action) => {
    switch (typeof(action)) {
        case 'undefined':
            return ({...state, page: 1});
        case 'number':
            return ({...state, page: state.page + 1});
        default:
            throw new Error('$(action}');
    }
}

function GetViewerList (props) {
    const [nasaData, setnasaData] = useState(props.nasaData);
    const [isFetching, setisFetching] = useState(false);
    const [listItems, setlistItems] = useState(nasaData.slice(1,6));
    const [listCount, stelistCount] = useState(6);
    const [searchState, setsearchState] = useState(reducer, props.searchState);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching && listItems.length != 100) return ;
        fetchMoreListItems();
    }, [isFetching]);

    function handleScroll()
    {
        if (window.innerHeight + document.documentElement.ScrollTop +1 <= document.documentElement.offsetHeight)
            return;
        setisFetching(true);
    }

    function fetchMoreListItems()
    {
        if (listItems.length % 100 === 0)
        {
            setsearchState(searchState.page);
            stelistCount(0);
            nextnasaData(searchState);
            
        }
        stelistCount(listCount + 6);
        setlistItems(pre => ([...pre, ...nasaData.slice(listCount, listCount + 6)]));
        setisFetching(false);
    }

    async function nextnasaData (searchState) {
        let message = "";
        axios 
        .get('/search', {
            params: {
                q: searchState.text,
				center: searchState.center,
				description: searchState.description,
				description_508: searchState.description_508,
				keywords: searchState.keywords,
				locations: searchState.locations,
				media_type: searchState.media_type,
				nasa_id: searchState.nasa_id,
				page: searchState.page,
				photographer: searchState.photographer,
				secondary_creator: searchState.secondary_creator,
				title: searchState.title,
				year_start: searchState.year_start,
				year_end: searchState.year_end
            }
        })
        .then(function (res) {
            if (res.data.collection.items[0].href === nasaData[0].href)
                return ;
            setnasaData([...res.data.collection.items]);
            message="";
        })
        .catch(function (err) {
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        message = "The request was unacceptable, often due to missing a required parameter.";
                        break;
                    case 404:
                        message = "The requested resource doesn't exist.";
                    case 500:
                    case 502:
                    case 503:
                    case 504:
                        message = "Server Errors";
                        break;
                    default:
                        message = "Call developers to check axios status error";
                }
            } else if (err.request) {
                message = "App Error";
            } else {
                message = "Unknown Error";
            }
            setnasaData([]);
        })
    }

    return (
        <React.Fragment>

            {listItems.map((data) => 
            <GetViewer
                //key={data.data[0].nasa_id}
                nasaData={data}
            />
            )}
        </React.Fragment>
    );
}

export default GetViewerList;