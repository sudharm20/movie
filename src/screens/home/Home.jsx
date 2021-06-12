import Header from "../../common/header/Header";
import * as React from 'react'
import './Home.css'
import  '../../common/moviesData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
        <div><Header/></div>
        <div className="upcome"><span>Upcoming Movies</span></div>
        </div>
        )
        
    }
}

export default Home

