import React from 'react';
import { Row, Col } from 'antd';
import FriendCard from "./FriendCard";


class FriendsRecommand extends React.Component{
    state = {
        friends : [
            {
                name : "Tom",
                intro: "I love travel",
                img: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/25201637/day_2_dec_14_085.jpg"
            },
            {
                name: "Max",
                intro: "Travel around this world",
                img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/WelshCorgi.jpeg"
            },
            {
                name : "Tom",
                intro: "I love travel",
                img: "https://www.cats.org.uk/media/2197/financial-assistance.jpg?width=1600"
            },
            {
                name: "Max",
                intro: "Travel around this world",
                img: "https://www.c-ville.com/wp-content/uploads/2019/09/Cats-660x335.jpg"
            },
            {
                name : "Tom",
                intro: "I love travel",
                img: "https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg"
            },
            {
                name: "Max",
                intro: "Travel around this world",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            },
            {
                name : "Tom",
                intro: "I love travel",
                img: "https://www.abc.net.au/cm/rimage/11095486-4x3-large.jpg?v=2"
            },
            {
                name: "Max",
                intro: "Travel around this world",
                img: "https://jngnposwzs-flywheel.netdna-ssl.com/wp-content/uploads/2019/05/Adopt-Fees-nobkgrd1-768x524.png"
            }
        ]
    }

    render() {
        const { friends } = this.state;
        return (
            <Row gutter={3} className="friends-cards">
                {friends.map((element, i) => {
                        return (
                            <Col span={5} key={element.img}>
                            <FriendCard key={i} componentData={element}/>
                            </Col>
                        );
                    }

                )}
            </Row>
        );
    }
}

export default FriendsRecommand;