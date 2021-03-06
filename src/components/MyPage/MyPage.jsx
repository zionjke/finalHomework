import React from 'react';
import styles from "./MyPage.module.css";
import Greeting from "./Greeting/Greeting";
import Photo from "./Photo/Photo";
import Skills from "./Skills/Skills";
import Form from "./Form/Form";
import {restoreState, saveState} from "../../localStorage";


class MyPage extends React.Component {

    state = {
        person: {
            name: "Васильев Артем",
            age: 31,
            city: "Киев",
            photo: "https://scontent.fiev6-1.fna.fbcdn.net/v/t1.0-9/13537684_1115620958507918_4630165900902713817_n.jpg?_nc_cat=105&_nc_sid=a4a2d7&_nc_ohc=_aka8YDC4XMAX9bPC8w&_nc_ht=scontent.fiev6-1.fna&oh=fbff9bf570b7c0fcbcdd9bc86a1a8d33&oe=5ED1F4D5"
        },
        skills: [
            {skill: "Непреклонный"},
            {skill: "Трудолюбивый"},
            {skill: "Порядочный"}
        ],

        friends: [],
    };

    saveFriends = () => {
        saveState("friends-state",this.state)
    }

    restoreFriends = () => {
        let state =  restoreState("friends-state",this.state);
        this.setState(state)
    }

    addFriend = (newFriend) => {
        this.setState({
            friends: [...this.state.friends, {friend: newFriend}]
        }, () => this.saveFriends());
    };

    componentDidMount() {
        this.restoreFriends()
    }


    render = () => {
        return (
            <div className={styles.myPage}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <Greeting person={this.state.person}/>
                        <Photo photo={this.state.person.photo}/>
                    </div>
                    <Skills skills={this.state.skills}/>
                    <Form friends={this.state.friends}
                          addFriend={this.addFriend}/>
                </div>
            </div>
        );
    }
}

export default MyPage;
