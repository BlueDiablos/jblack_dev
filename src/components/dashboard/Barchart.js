import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';



class Barchart extends Component{
    constructor(props){
       super(props);
       this.state = {
           chartData:{
                labels: ['Total'],
                datasets: [
                    {
                        label: 'Project Count',
                        data:[
                            12
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                    
                           
                        ],
                        pointHoverBackgroundColor:[
                            '#fff'
                        ],
                        borderColor:[
                            '#fff'
                        ]

                        
                      
                    }
                ]
           }
       }
    }
    componentDidMount() {
        axios.get('https://api.github.com/repos/BlueDiablos/:repo/stats/commit_activity')
        .then(res => {
            const commits = res.data;
            console.log(JSON.stringify(commits));
            this.setState.chartData.data(commits);
        })
    }

    render(){
        return(
            
            <div className="chart">
              <Bar
                data={this.state.chartData}
                width={100}
                height={500}
                options={
                    {
                    maintainAspectRatio: false,
                    legend:{
                        display:true,
                        labels:{
                            fontColor:"#ffff"
                        },
                        gridLines:{
                            color:"#fff"
                        }
                    },
                    scales:{
                        yAxes:[{
                            ticks:{
                            fontColor:"#fff"
                            },
                            gridLines:{
                                color:"transparent"
                            },
                            
                        }],
                        xAxes:[{
                            ticks:{
                            fontColor:"#fff"
                            },
                            gridLines:{
                                color:"#fff"
                            }
                        }]
                    }
                    }
                    
                }
                />
            </div>
        )
    }
    
}

export default Barchart;