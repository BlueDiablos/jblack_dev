import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';



export default class Barchart extends Component{
    constructor(props){
       super(props);
       this.state = {
           chartData:{
                labels: ['Total'],
                datasets: [
                    {
                        label: 'Project Count',
                        data:[
                            13
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