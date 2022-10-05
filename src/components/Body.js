import React from "react";

import Youtube from './Youtube'

const Body = () => {
    return (
        <React.Fragment>
            <main>
                <div class="one">
                    <h2 id="h21">What is KGC?</h2>
                    <p class="post"> We are just a group of gammers the like to have fun. Like everyone else KGC was created
                        by
                        a
                        bunch of kids
                        wanting to call there group something.
                        KGC is short for KOUNG Gaming, formerly Kashmiri Gaming Community.</p>
                </div>
                <div class="two">
                    <h2 id="h22">Who leads KGC?</h2>
                    <p class="post" id="ph2">There is no leader. We all together make KGC. Master manages most of its
                        operation.
                    </p>
                </div>
                <div class="three">
                    <h2 id="h23">What is our plan going forward?</h2>
                    <p class="post">
                        We want to keeping having fun together while adding new members to our Community everyday, maybe
                        oneday
                        we
                        will
                        be the biggest gaming group in the world.
                        But here are some short term objectives.
                    </p>
                    <ul>
                        <li>Get our Youtube channel to 10000 subscribers.</li>
                        <li> Launch a business as KOUNG Builds where we build computers and their mods.</li>
                        <li>Stream regularly.</li>
                        <li>Make you guys happy.</li>
                    </ul>
                </div>

            </main>


            <Youtube />
            <div id="signupform">
                <div id="leftside"></div>
                <div id="mainform">
                    <h2>Sign Up</h2>
                    <form action="/register">
                        <p>
                            <label for="name">Full Name</label>
                            <input type="text" placeholder="Full Name" name="name" id="name" required></input><br></br>
                            <label for="username">Username</label>
                            <input type="text" placeholder="username" name="username" id="username" required></input><br></br>
                            <label for="pass">Password</label>
                            <input type="password" placeholder="password" name="pass" id="pass" required></input><br></br>
                            <label for="email">Email</label>
                            <input type="email" placeholder="email" name="email" id="email" required></input><br></br>
                        </p>
                        <p>
                            Select your platform/platforms <br></br>
                            <input type="checkbox" name="platform" id="PC" value="PC"></input>
                            <label for="PC">PC</label><br></br>
                            <input type="checkbox" name="platform" id="xbox" value="xbox"></input>
                            <label for="xbox">Xbox</label><br></br>
                            <input type="checkbox" name="platform" id="PS" value="PS"></input>
                            <label for="PS">PlayStation</label><br></br>
                        </p>
                        <p>
                            <label for="gamingtime">Hours spent playing games in a week?</label>
                            <select name="gamingtime" id="gamingtime" required>
                                <option value="under20">Under 20</option>
                                <option value="20-40">20-40</option>
                                <option value="40-60">40-60</option>
                                <option value="60+">60+</option>
                            </select>
                        </p>
                        <p>Your favourite genre?<br></br>
                            <input type="radio" name="genre" id="Shooters" value="Shooters"></input>
                            <label for="Shooters">Shooters (FPS and TPS)</label><br></br>
                            <input type="radio" name="genre" id="roleplay" value="roleplay"></input>
                            <label for="roleplay">Role-playing (RPG, ARPG, and More)</label><br></br>
                            <input type="radio" name="genre" id="moba" value="moba"></input>
                            <label for="moba">Multiplayer online battle arena (MOBA)</label><br></br>
                            <input type="radio" name="genre" id="aa" value="aa"></input>
                            <label for="aa">Action-adventure.</label><br></br>
                        </p>
                        <p>
                            <input type="checkbox" name="agree" id="agree" required></input>
                            <label for="agree">By clicking this you agree to <a href="tos.html">TOS</a></label><br></br>
                        </p>
                        <button>Register</button>
                        <button type="button">Log In</button>


                    </form>
                </div>
                <div id="rightside"></div>
            </div>
        </React.Fragment>
    )
}

export default Body;