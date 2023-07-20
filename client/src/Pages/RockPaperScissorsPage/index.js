import React from "react";
import { } from "reactstrap";

//import css
import '../../Styles/rps.css'

function RockPaperScissorsPage() {
    return (
        <div>
            <header>
                <a href="/home" type="button" class="backButton" >
                    <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.0039 37.8633L0.09375 22.4648V17.4375L35.0039 0V8.4375L10.957 19.582L35.0039 29.4609V37.8633Z" fill="#724C21" />
                    </svg>
                </a>
                <img src="/images/game/rps.png" alt="" class="logo" />
                    <h1>ROCK PAPER SCISSORS</h1>
            </header>
            <br />
                    <div class="grid">
                        <div class="row" id="row-1">
                            <div class="col" id="col-11">
                                <h2 >username</h2>
                            </div>
                            <div class="col" id="col-12"></div>
                            <div class="col" id="col-13">
                                <h2 >COM</h2>
                            </div>
                        </div>
                        <div class="row" id="row-2">
                            <div class="col" id="col-21">
                                <button onclick="chosen('r')" id="button1">
                                    <img src="/images/game/batu.png" alt="" class="choices" id="batu" />
                                </button>
                            </div>
                            <div class="col" id="col-22"></div>
                            <div class="col" id="col-23">
                                <div class="comChoice" id="computerChoice1">
                                    <img src="/images/game/batu.png" alt="" id="batu-com" />
                                </div>
                            </div>
                        </div>
                        <div class="row" id="row-3">
                            <div class="col" id="col-31">
                                <button onclick="chosen('p')" id="button2">
                                    <img src="/images/game/kertas.png" alt="" class="choices" id="kertas" />
                                </button>
                            </div>
                            <div class="col" id="result">
                                <span>VS</span>
                            </div>
                            <div class="col" id="col-33">
                                <div class="comChoice" id="computerChoice2">
                                    <img src="/images/game/kertas.png" alt="" id="kertas-com" />
                                </div>
                            </div>
                        </div>
                        <div class="row" id="row-4">
                            <div class="col" id="col-41">
                                <button onclick="chosen('s')" id="button3">
                                    <img src="/images/game/gunting.png" alt="" class="choices" id="gunting" />
                                </button>
                            </div>
                            <div class="col" id="col-42"></div>
                            <div class="col" id="col-43">
                                <div class="comChoice" id="computerChoice3">
                                    <img src="/images/game/gunting.png" alt="" id="gunting-com" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="ulang()" id="button4">
                        <img src="/images/game/refresh.png" alt="" class="refresh-img" />
                    </button>
                </div>
                )
}

                export default RockPaperScissorsPage;