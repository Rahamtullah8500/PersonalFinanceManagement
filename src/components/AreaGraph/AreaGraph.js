import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const AreaGraph=({data})=> {

    return (
      <ResponsiveContainer width="100%" height="100%" className='responsive-container'>
        <ComposedChart
          layout="vertical"
          width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
            }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend />
          <Area dataKey="saving" fill="#FFBB28" stroke="#FFBB28" />
          <Bar dataKey="income" barSize={20} fill="#00C49F" />
          <Line dataKey="expense" stroke="#FF6868" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  
}


export default AreaGraph;