import React from 'react'
import 
{ BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
from 'recharts';

const BarGraph = ({data}) => {


  return (
    <ResponsiveContainer width="100%" height="100%" className='responsive-container' >
            <BarChart
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" stackId='a' fill="#00C49F" />
                <Bar dataKey="saving"  stackId="a" fill="#40A2E3" />
                <Bar dataKey="expense" fill="#FF8042" />
                </BarChart>
            </ResponsiveContainer>
  )
}

export default BarGraph