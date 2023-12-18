'use client';

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartData } from "@/features/dashboard/components/chart/constants";

const Chart = () => {
  return (
    <div className='h-96 p-5 rounded-md bg-bg-light'>
      <h2 className='mb-5 text-xl text-white-dark font-extralight'>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip contentStyle={{ background: '#151c2c', border: 'none' }}/>
          <Legend/>
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;