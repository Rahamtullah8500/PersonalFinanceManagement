import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

const LineGraph=({data})=>{
    return (
      <ResponsiveContainer width="100%" height="100%" className='responsive-container'>
        <LineChart
          width={500}
            height={400}
            data={data}
            margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
                
            }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#65B741" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="saving" stroke="#40A2E3"  />
          <Line type="monotone" dataKey="expense" stroke="#d45252" />
        </LineChart>
      </ResponsiveContainer>
    );
}


export default  LineGraph;