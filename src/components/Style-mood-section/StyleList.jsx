import PlaylistCard from './PlaylistCard';
import './StyleList.css'
let styles = require('../../data/styles')

function StyleList() {
    return (
        <div className="StyleList">
            <div className="style-container">
                {styles
                .map((style) => (
                    <div key={style.id}>
                        <PlaylistCard style={style}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StyleList;
