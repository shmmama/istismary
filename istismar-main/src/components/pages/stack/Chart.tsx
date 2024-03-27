"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js/auto";
import { format, addMonths, subDays } from "date-fns";
import { Element } from "chart.js/auto";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);
import { FaArrowDown } from "react-icons/fa";

export default function Char() {
  const [currentDate, setCurrentDate] = useState("Day");

  const dateData = [
    { id: "1", label: "Day", value: 1 },
    { id: "2", label: "Tow Days", value: 2 },
    { id: "3", label: "Weak", value: 7 },
    { id: "4", label: "Month", value: 30 },
    { id: "5", label: "6 Month", value: 180 },
  ];

  const [dates, setDates] = useState([]);

  const hanldeDelay = (e: number) => {
    const today = new Date();
    let currentDate = today;

    const newDates: any = [];

    for (let i = 0; i < e; i++) {
      const formattedDate = format(currentDate, "d/M");
      newDates.push(formattedDate);

      currentDate = subDays(currentDate, 1);
    }

    setDates(newDates);
  };
  const data = {
    labels: dates,
    datasets: [
      {
        data: [0, 25, 50, 75, 100],
        label: "",
        backgroundColor: "transparent",
        borderColor: "#4babae",
        pointBorderColor: "#4babae",
        fill: true,
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="bg-white p-8">
      <div className="w-[86px] mb-6">
        <div className="flex items-center justify-between font-semibold">
          <p className="">0.0000%</p>
          <p>
            <FaArrowDown className="text-red-600" />
          </p>
        </div>
        <div>
          <p className="text-base ">Valume rate</p>
        </div>
        <hr className="w-1/3 bg-mold h-1 mt-2" />
      </div>

      <Line data={data} options={options} />

      <div className="flex items-center justify-between">
        {dateData.map((item: { id: string; label: string; value: number }) => (
          <div key={item.id}>
            <button
              onClick={() => {
                hanldeDelay(item.value);
              }}
              className={`text-mold text-[10px] rounded-lg hover:bg-mold hover:text-white p-1 px-5 transition-all duration-200 ${currentDate == item.label ? "bg-mold text-white" : ""} `}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
