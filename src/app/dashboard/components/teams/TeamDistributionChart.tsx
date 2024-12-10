'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'Delta',
    value: 55,
    color: '#84cc16',
  },
  {
    name: 'Alpha',
    value: 34,
    color: '#3b82f6',
  },
  {
    name: 'Canary',
    value: 11,
    color: '#f97316',
  },
];

const TeamDistributionChart = () => {
  return (
    <ResponsiveContainer width='100%' height={150}>
      <PieChart>
        <Tooltip
          labelClassName='font-bold'
          wrapperClassName='dark:[&_.recharts-tooltip-item]:!text-white !text-sm dark:!bg-black rounded-md dark:!border-border'
        />
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          outerRadius={50}
        >
          {data.map((dataItem) => (
            <Cell key={dataItem.name} fill={dataItem.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TeamDistributionChart;
