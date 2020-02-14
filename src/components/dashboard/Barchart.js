import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';



class Barchart extends Component{
    constructor(props){
       super(props);
       this.state = {
           chartData:{
                labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                    {
                        label: 'Project Count',
                        data:[
                           2,
                           4,
                           4,
                           4,
                           5,
                           5,
                           6,
                           6,
                           7,
                           8,
                           10,
                           12
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                            'rgba(255,99,132,0.6)',
                           
                        ],
                        pointHoverBackgroundColor:[
                            '#1b1b1b'
                        ],
                        borderColor:[
                            '#1b1b1b'
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
                            fontColor:"#1b1b1b"
                        },
                        gridLines:{
                            color:"#1b1b1b"
                        }
                    },
                    scales:{
                        yAxes:[{
                            ticks:{
                            fontColor:"#1b1b1b"
                            },
                            gridLines:{
                                color:"transparent"
                            },
                            
                        }],
                        xAxes:[{
                            ticks:{
                            fontColor:"#1b1b1b"
                            },
                            gridLines:{
                                color:"transparent"
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