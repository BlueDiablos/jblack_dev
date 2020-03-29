import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import axios from 'axios';


class Chart extends Component{
    constructor(props){
       super(props);
       this.state = {
           chartData:{
                labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                datasets: [
                    {
                        label: 'Commits',
                        data:[
                           23,
                           25,
                           34,
                           19,
                           54,
                           23,
                           43,
                           34,
                           54,
                           54,
                           34,
                           23
                        ],
                        backgroundColor:[
                            'rgba(255,99,132,0.6)',
                           
                        ],
                        pointHoverBackgroundColor:[
                            '#ffff'
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
            
            <div >
              <Line
                data={this.state.chartData}
                width={100}
                height={500}
                options={
                    {
                    maintainAspectRatio: false,
                    legend:{
                        display:true,
                        labels:{
                            fontColor:"#fff"
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

export default Chart;