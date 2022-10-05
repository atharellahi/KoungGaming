import React, { useState } from "react";



const Youtube = () => {

    const youtubeLinks = [
        {
            title: 'Funny Moments #1',
            link: 'https://www.youtube.com/embed/-uuZAuOL-GQ'
        },
        {
            title: 'How KGC really plays CS:GO',
            link: 'https://www.youtube.com/embed/NGWZ0vAa61U'
        },
        {
            title: 'Building in my dream case | Lian li O11 Dynamic',
            link: 'https://www.youtube.com/embed/h0tg3uJ4YDA'
        },
        {
            title: 'He is going to play what on this PC!!!!!!',
            link: 'https://www.youtube.com/embed/dok7ZJnkiM0'
        },
        {
            title: 'Building my cousin his first gaming PC',
            link: 'https://www.youtube.com/embed/KMR5kfvH2R0'
        },
        {
            title: 'Building my Rs. 300,000 ( 4000 $ ) Gaming + Streaming setup',
            link: 'https://www.youtube.com/embed/LeqFjQkhnGw'
        },
    ]

    const [source, setSource] = useState('https://www.youtube.com/embed/LeqFjQkhnGw');

    const ondivclick = (e) => {
        setSource(youtubeLinks[e.target.getAttribute('mysrc')].link)
    }
    return (
        <React.Fragment>
            <div id="youtube" class="youtube-main">
                <div class="topplayer">
                    <div class="topleft thumb" mysrc={0} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/-uuZAuOL-GQ/mqdefault.jpg" width="246px"
                            mysrc={0}></img>
                        <p mysrc={0}>{youtubeLinks[0].title}</p>
                    </div>
                    <div class="youtube-player">
                        <iframe src={source} title="YouTube video player"
                            allowfullscreen></iframe>
                    </div>
                    <div class="topright thumb" mysrc={1} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/NGWZ0vAa61U/mqdefault.jpg" width="246px"
                            mysrc={1}></img>
                        <p mysrc={1}>How KGC really plays CS:GO</p>
                    </div>
                </div>
                <div class="youtube-list">
                    <div class="itemone thumb" mysrc={2} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/h0tg3uJ4YDA/mqdefault.jpg" width="246px"
                            mysrc={2}></img>
                        <p mysrc={2}>Building in my dream case | Lian li O11 Dynamic</p>
                    </div>
                    <div class="itemtwo thumb" mysrc={3} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/dok7ZJnkiM0/mqdefault.jpg" width="246px"
                            mysrc={3}></img>
                        <p mysrc={3}>He is going to play what on this PC!!!!!!</p>
                    </div>
                    <div class="itemthree thumb" mysrc={4} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/KMR5kfvH2R0/mqdefault.jpg" width="246px"
                            mysrc={4}></img>
                        <p mysrc={4}>Building my cousin his first gaming PC</p>
                    </div>
                    <div class="itemfour thumb" mysrc={5} onClick={ondivclick}>
                        <img src="https://img.youtube.com/vi/LeqFjQkhnGw/mqdefault.jpg" width="246px"
                            mysrc={5}></img>
                        <p mysrc={5}>Building my Rs. 300,000 ( 4000 $ ) Gaming +
                            Streaming setup</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default Youtube;