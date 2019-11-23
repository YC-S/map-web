import React from 'react';
import { Card, Button, Avatar} from 'antd';



class FriendCard extends React.Component {
    render() {
        const { componentData } = this.props;

        return (
            <Card
                hoverable
                className="card"
            >
                <div id="friend-image">
                    <Avatar className="avatar" style={{verticalAlign: 'middle'}} size="large" src={componentData.img} />
                </div>
                <div id="friend-name">{componentData.name}</div>
                <div id="friend-title">{componentData.intro}</div>
                <div id="connect-button">
                    <Button type="primary" block>
                        Connect
                    </Button>
                </div>
            </Card>
        )
    }
}

export default FriendCard;