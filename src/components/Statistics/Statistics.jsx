import React, { PureComponent } from 'react';
import {LineChart ,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend } from 'recharts';

const data = [
  {
    name: 'A1',
    number: 57,
    
  },
  {
    name: 'A2',
    number: 59,
  },
  {
    name: 'A3',
    number: 60,
  },
  {
    name: 'A4',
    number: 60,
  },
  {
    name: 'A5',
    number: 60,
  },
  {
    name: 'A6',
    number: 48,
  },
  {
    name: 'A7',
    number: 60,
  },
  {
    name: 'A8',
    number: 60,
  },
  

];


const Statistics = () => {
    return (
        <div className='mb-10'>
          <h2 className='text-center my-10 font-bold text-3xl'> Assignment Mark</h2>
            <AreaChart
             width={800}
             height={400}
             data={data}
             margin={{
                top: 70,
                right: 30,
                left: 50,
                bottom: 0,
              }}
             >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" stroke="#8884d8" fill="#8884d8" dataKey="number"></Area>
                <Legend />

            </AreaChart>
        </div>
    );
};

export default Statistics;