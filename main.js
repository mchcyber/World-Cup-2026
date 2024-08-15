import 'regenerator-runtime/runtime';
import axios from 'axios';
const token = "cead3226eee04bd5b13185f63b4522d7"
const baseUrl = "https://api.football-data.org/v4/competitions/2000"

    function getStandings() 
    {
        const url = `${baseUrl}/standings`

        axios.get(url, {
            headers: {
                "X-Auth-Token": token 
            }
        })
        .then((response) => {
            
            const standings = response.data.standings 

            console.log(response.data)

            document.getElementById("standings").innerHTML = ""

            for (standing of standings ) 
            {
                let tableContent = ""


                for (row of standing.table) {

                    tableContent+= `
                                    <!-- TEAM  -->
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-sm-4 d-flex justify-content-center align-items-center" style="text-align: center;" >
                                               <span class="flag">
                                                <img
                                                    style="width: 40px; height:40px; object-fit: cover "
                                                    class="rounded-circle"
                                                    src="${row.team.crest}" alt="">
                                               </span>

                                               <h5 style="margin: auto 4px;">
                                                 <b>${row.team.tla}</b>
                                            </h5>
                                            </div>
                                           
                                            <div class="col-sm-2" style="text-align: center;" >
                                                ${row.won}
                                            </div>
                                     
                                            <div class="col-sm-2" style="text-align: center;" >
                                                 ${row.lost}
                                            </div>

                                            <div class="col-sm-2" style="text-align: center;" >
                                                 ${row.draw}
                                            </div>
                                     
                                            <div class="col-sm-2" style="text-align: center;" >
                                                <b> ${row.points}</b>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- TEAM // -->
                    `
                }

                const content = `                                <!-- STANDING COL  -->
                                <div class="col-sm-6 mb-4">
                                        <div class="card shadow border-none" >
                                            <div class="card-header" style="background-color: #00BCD4; text-align: center;">
                                            <b>${standing.group}</b>
                                            </div>

                                            <div class="row m-0" style="background-color: #02adc4;">
                                                <div class="col-sm-4" style="text-align: center;" >
                                                    Team
                                                </div>
                                            
                                                <div class="col-sm-2" style="text-align: center;" >
                                                    W
                                                </div>
                                        
                                                <div class="col-sm-2" style="text-align: center;" >
                                                    D
                                                </div>

                                                <div class="col-sm-2" style="text-align: center;" >
                                                    D
                                                </div>
                                        
                                                <div class="col-sm-2" style="text-align: center;" >
                                                    Pts
                                                </div>
                                            </div>
                                            <!-- TEAMS -->
                                            <ul class="list-group list-group-flush">
                                            
                                                ${tableContent}
                                           
                                            </ul>
                                            <!-- // TEAMS -->
                                    </div>
                                </div>
                                  <!-- // STANDING COL  -->
                
                `
           
                document.getElementById("standings").innerHTML += content
            }
        })
    }



    function getMatches() 
    {
        const url = `${baseUrl}/matches`

        axios.get(url, {
            headers: {
                "X-Auth-Token": token 
            }
        })
        .then((response) => {
            console.log(response.data)

            const matches = response.data.matches

            document.getElementById("matches").innerHTML = ""
            
            for (match of matches )
            {
                const homeTeam = match.homeTeam 
                const awayTeam = match.awayTeam 
                // const utcDate = match.utcDate
                // const matchTime = new date(utcDate)
                // const dateString = match.getUTCFullYear()
                
                const content = `
                <!-- MATCH COL    -->
                <div class="col-sm-12">
                    <div class="card shadow rounded-pill mt-5 bg-sucess" style="overflow: hidden;">
                        <div class="card-body p-0">
                            <div class="row" style="height: 120px;" >

                                <!-- FIRST TEAM COL  -->
                                <div 
                                class="col-sm-3 d-flex flex-direction-column justify-content-center align-items-center" 
                                style=" border-right:#2842d5 solid 10px  ;background-color: #304FFE; color: white; ">
                                    <li class="list-group-item">
                                        <div class="row">

                                            <div class="d-flex align-items-center justify-content-center">
                                            <!-- IMAGE AND TEAM NAME DIV  -->
                                            <div class="col-sm-4 d-flex justify-content-center align-items-center" 
                                            style="text-align: center; height: 100px;" >
                                            <div>
                                                <div class="flag" style="height: 40px ;">
                                                <img
                                                    style="width: 40px; height:40px ; object-fit: cover"
                                                    class="rounded-circle"
                                                    src="${homeTeam.crest}" alt="">
                                            </div>

                                            <h5 style="margin: auto 4px;">
                                                <b>${homeTeam.tla}</b>
                                            </h5>
                                            </div>
                                            </div>
                                            <!--// IMAGE AND TEAM NAME DIV  -->
                                        </div>
                                        </div>
                                    </li>
                                    <!-- FIRST TEAM COL// -->

                                </div>
                                <!-- //FIRST TEAM   -->
                                <!-- MATCH INFO COL   -->
                                <div class="col-sm-6" style="text-align: center;">
                                    <div class="row">
                                        <div class="col-sm-4" style="margin: auto 0px ">
                                            <h3>
                                                ${match.score.fullTime.home}
                                            </h3>   
                                         </div>

                                    <div class="col-sm-4" style="margin: auto 0px ">
                                    <h6>${match.group ?? "-"}</h6>
                                    <h1> <b>X</b></h1>
                                    <h6>18:30</h6>
                                         </div>

                                                                                 <div class="col-sm-4" style="margin: auto 0px ">
                                            <h3>
                                                ${match.score.fullTime.away}
                                            </h3>   
                                         </div>
                                    </div>

                                </div>
                                <!-- // MATCH INFO COL   -->


                                            <!-- SECOND TEAM COL  -->
                                            <div 
                                            class="col-sm-3 d-flex flex-direction-column justify-content-center align-items-center" 
                                            style=" border-left:#2842d5 solid 10px  ;background-color: #304FFE; color: white; ">
                                                <li class="list-group-item">
                                                    <div class="row">
            
                                                        <div class="d-flex align-items-center justify-content-center">
                                                        <!-- IMAGE AND TEAM NAME DIV  -->
                                                        <div class="col-sm-4 d-flex justify-content-center align-items-center" 
                                                        style="text-align: center; height: 100px;" >
                                                        <div>
                                                            <div class="flag" style="height: 40px ;">
                                                            <img
                                                                style="width: 40px; height:40px ; object-fit: cover"
                                                                class="rounded-circle"
                                                                src="${awayTeam.crest}" alt="">
                                                            </div>
            
                                                            <h5 style="margin: auto 4px;">
                                                            <b>${awayTeam.tla}</b>
                                                        </h5>
                                                        </div>
                                                        </div>
                                                        <!--// IMAGE AND TEAM NAME DIV  -->
                                                    </div>
                                                    </div>
                                                </li>
                                                <!-- //SECOND TEAM COL// -->
                            
                                                            </div>
                                                            <!-- //FIRST TEAM   -->
                            </div>
                        </div>
                    </div>
                </div>
            <!--// MATCH COL    -->`
           
            document.getElementById("matches").innerHTML  += content 
            }
        })
    }

    getStandings() 
    getMatches()
