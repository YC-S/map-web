import React from 'react';
import SideBarComponent from "./SideBarComponent"

class MapSideBar extends React.Component {
    state = {
        data: [{
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s",
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
            {
                imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpChfpdl2pEQxJWEH-Q_FsZyg3SLkV3DzS3-VE17mBgXZkFljX&s',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus '
            },
        ],
    }
    render() {
        const { data } = this.state;
        return (
            <div className="map-sidebar">
                {data.map((element, i) => {
                    return (<SideBarComponent key={i} componentData={element} />);
                }

                )}
            </div>
        );
    }
}

export default MapSideBar;