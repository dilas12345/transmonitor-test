import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(0, 183, 255, 0.6)',
      opacity: 10,
      borderColor: 'rgba(75,192,192,0.9)',
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 0.5,
      pointHitRadius: 5,
      data: [45, 50, 43, 65, 59, 45, 50, 53, 40,  80, 81, 56, 55, 40]
    }
  ]
};


class LineExample2 extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default LineExample2;