import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AiFillStar } from "react-icons/ai";

const customStyles = {
  rows: {
    style: {
      minHeight: "30px",
      backgroundImage: "radial-gradient(#e3e8da 1px, #fcfcfc 0)",
      backgroundSize: "28px 28px",
      backgroundPosition: "-19px -19px",
      fontSize: "11px",
    },
  },

  headCells: {
    style: {
      backgroundImage: "radial-gradient(#e3e8da 1px, #fcfcfc 0)",
      backgroundSize: "28px 28px",
      backgroundPosition: "-19px -19px",
    },
  },
  // cells: {
  //   style: {
  //     paddingLeft: "8px", // override the cell padding for data cells
  //     paddingRight: "8px",
  //   },
  // },
};

const CommissionStatus = () => {
  // const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(10);

  const columns2 = [
    {
      name: "Client",
      selector: (row) => row.client,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Completion By",
      selector: (row) => row.completion,
    },
  ];

  const columns = [
    {
      name: "Client",
      selector: (row) => row.client,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    setLoading(true);
    const URL = "";
    const response = await fetch(URL);

    const user = await response.json();
    setData(user);
  }

  return (
    <div className="md:w-[73%] lg:w-[80%] ml-auto sm:px-8 lg:px-16 pt-10">
      <div className="flex flex-col md:flex-row px-3">
        <div className="md:w-[20%] w-full">
          <p className="text-center text-gray-500">Status Progression</p>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                NOT STARTED
              </p>
              <AiFillStar className="text-xl text-[#DB4D4D]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                GATHERING IDEAS
              </p>
              <AiFillStar className="text-xl text-[#FA9B43]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                SKETCH
              </p>
              <AiFillStar className="text-xl text-[#EBDD5E]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                LINE WORK
              </p>
              <AiFillStar className="text-xl text-[#7DCF57]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                COLOR
              </p>
              <AiFillStar className="text-xl text-[#6CC8E6]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                FINAL TOUCHES
              </p>
              <AiFillStar className="text-xl text-[#505BC7]" />
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <p className="font-semibold text-gray-500 text-[10px] tracking-[5px]">
                COMPLETE
              </p>
              <AiFillStar className="text-xl text-[#c26cbf]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:pl-8 w-full md:w-[70%]">
          <p className="text-[12px] font-bold">
            Commission Work Week: Monday - Friday | Excluding Holidays
          </p>
          <p className="text-[12px]">
            * You will not be added to the queue until payment has been sent.
          </p>
          <DataTable
            columns={columns2}
            data={data2}
            customStyles={customStyles}
          />
        </div>
      </div>
      <div className="bg-transparent md:w-3/4 mx-auto">
        <p className="text-center text-gray-500">
          Past Commissions: 2020 - Present
        </p>
        <DataTable
          columns={columns}
          data={data}
          className=""
          customStyles={customStyles}
          // progressPending={loading}
        />
      </div>
    </div>
  );
};

export default CommissionStatus;

const data2 = [
  {
    id: 1,
    client: "dinstraction @dA",
    date: "12.08.2022",
    type: "PWYW Esk",
    description: "#3445 #5627",
    status: "✡️ Final Touches",
    completion: "01/06/2023",
  },
];

const data = [
  {
    id: 1,
    client: "Revan-Dawnstar @dA",
    date: "12.08.2022",
    type: "PWYW Esk",
    description: "#3445 #5627",
    status: "✡️Complete",
  },
  {
    id: 2,
    client: "KaijuRomance @dA",
    date: "09.27.2022",
    type: "PWYW Esk",
    description: "#194 Somber",
    status: "✡️Complete",
  },
  {
    id: 3,
    client: "dinstraction @dA",
    date: "09.23.2022",
    type: "PWYW Esk",
    description: "#3423 Ilk",
    status: "✡️Complete",
  },
  {
    id: 4,
    client: "dinstraction @dA",
    date: "06.14.2022",
    type: "PWYW Esk",
    description: "#5200 Aira",
    status: "✡️Complete",
  },
  {
    id: 5,
    client: "Seren @TWWM Discord",
    date: "04.25.2022",
    type: "PWYW Esk",
    description: "#4318 Lyvana",
    status: "✡️Complete",
  },
  {
    id: 6,
    client: "Seren @TWWM Discord",
    date: "04.25.2022",
    type: "PWYW Esk",
    description: "#4540 Quell",
    status: "✡️Complete",
  },
  {
    id: 7,
    client: "dinstraction @dA",
    date: "03.08.2022",
    type: "PWYW Esk",
    description: "#3290 Vizka",
    status: "✡️Complete",
  },
  {
    id: 8,
    client: "MythicalDewdrop @dA",
    date: "02.07.2022",
    type: "PWYW Esk",
    description: "#3875 Momo",
    status: "✡️Complete",
  },
  {
    id: 9,
    client: "April-Cakes @dA",
    date: "12.14.2021",
    type: "	Custom",
    description: "Custom Starweaver",
    status: "✡️Complete",
  },
  {
    id: 10,
    client: "Sathem @TWWM Discord",
    date: "11.18.2021",
    type: "PWYW Esk",
    description: "#2380 #2690 #203",
    status: "✡️Complete",
  },
  {
    id: 11,
    client: "senchasloth @dA",
    date: "09.16.2021",
    type: "PWYW Esk",
    description: "#359 Paget",
    status: "✡️Complete",
  },
  {
    id: 12,
    client: "Kaosheen @dA",
    date: "09.07.2021",
    type: "PWYW Esk",
    description: "#3753 Aku",
    status: "✡️Complete",
  },
  {
    id: 13,
    client: "glitterghostie @dA",
    date: "08.03.2021",
    type: "PWYW Esk",
    description: "#3519 Luebella",
    status: "✡️Complete",
  },
  {
    id: 14,
    client: "Orielyn @dA",
    date: "08.02.2021",
    type: "PWYW Esk",
    description: "#005 Qyah",
    status: "✡️Complete",
  },
  {
    id: 15,
    client: "Orielyn @dA",
    date: "08.02.2021",
    type: "PWYW Esk",
    description: "#1128 Liet",
    status: "✡️Complete",
  },
  {
    id: 16,
    client: "ScarletsFeed @dA",
    date: "05.26.2021",
    type: "PWYW Esk",
    description: "#2996 Tzila & #4015 Ceres",
    status: "✡️Complete",
  },
  {
    id: 17,
    client: "LettersofSky @dA",
    date: "05.06.2021",
    type: "PWYW Esk",
    description: "#4341 Forsaken",
    status: "✡️Complete",
  },
  {
    id: 18,
    client: "dinstraction @dA",
    date: "04.13.2021",
    type: "PWYW Esk",
    description: "#4236 Keera",
    status: "✡️Complete",
  },
  {
    id: 19,
    client: "erasvita @dA",
    date: "03.17.2021",
    type: "PWYW Esk",
    description: "#2053 Oisin & #2834 Shasta",
    status: "✡️Complete",
  },
  {
    id: 20,
    client: "Kaosheen @dA",
    date: "03.04.2021",
    type: "PWYW Esk",
    description: "#3643 Quack",
    status: "✡️Complete",
  },
  {
    id: 21,
    client: "ScarletsFeed @dA",
    date: "02.20.2021",
    type: "PWYW Esk",
    description: "#4197 Anwir",
    status: "✡️Complete",
  },
  {
    id: 22,
    client: "ScarletsFeed @dA",
    date: "02.20.2021",
    type: "PWYW Esk",
    description: "#4169 Lior",
    status: "✡️Complete",
  },
  {
    id: 23,
    client: "ScarletsFeed @dA",
    date: "02.20.2021",
    type: "PWYW Esk",
    description: "#3629 Rhys",
    status: "✡️Complete",
  },
  {
    id: 24,
    client: "artdreya @dA",
    date: "09.21.2020",
    type: "PWYW Esk",
    description: "#3356 En",
    status: "✡️Complete",
  },
  {
    id: 25,
    client: "mondayecho @dA",
    date: "08.24.2020",
    type: "PWYW Esk",
    description: "#3778",
    status: "✡️Complete",
  },
  {
    id: 26,
    client: "ReaperOfAngelsAO3 @dA",
    date: "08.19.2020",
    type: "PWYW Esk",
    description: "#3730",
    status: "✡️Complete",
  },
  {
    id: 27,
    client: "n123snow @dA",
    date: "07.19.2020",
    type: "PWYW Esk",
    description: "#1475 Po",
    status: "✡️Complete",
  },
  {
    id: 28,
    client: "n123snow @dA",
    date: "07.19.2020",
    type: "PWYW Esk",
    description: "#3272 Nogara",
    status: "✡️Complete",
  },
  {
    id: 29,
    client: "Kaosheen @dA",
    date: "06.22.2020",
    type: "PWYW Esk",
    description: "#3653 Grem",
    status: "✡️Complete",
  },
  {
    id: 30,
    client: "Kaosheen @dA",
    date: "06.22.2020",
    type: "PWYW Esk",
    description: "#3653 Grem",
    status: "✡️Complete",
  },
  {
    id: 31,
    client: "Thundering-Horses @dA",
    date: "	05.27.2020",
    type: "PWYW Esk",
    description: "#1211 Seloran",
    status: "✡️Complete",
  },
  {
    id: 32,
    client: "Thundering-Horses @dA",
    date: "05.27.2020",
    type: "PWYW Esk",
    description: "#3610 Delyn",
    status: "✡️Complete",
  },
  {
    id: 33,
    client: "Thundering-Horses @dA",
    date: "05.27.2020",
    type: "PWYW Esk",
    description: "#216 Raylan",
    status: "✡️Complete",
  },
  {
    id: 34,
    client: "glitterghostie @dA",
    date: "04.22.2020",
    type: "PWYW Esk",
    description: "#3468 Lyuba",
    status: "✡️Complete",
  },
  {
    id: 35,
    client: "Skyeec2 @dA",
    date: "04.07.2020",
    type: "PWYW Esk",
    description: "#3446 Cyrus",
    status: "✡️Complete",
  },
  {
    id: 36,
    client: "BeeSideBeauty @dA",
    date: "02.20.2020",
    type: "PWYW Esk",
    description: "Rosa",
    status: "✡️Complete",
  },
  {
    id: 37,
    client: "BeeSideBeauty @dA",
    date: "02.20.2020",
    type: "PWYW Esk",
    description: "Rosa",
    status: "✡️Complete",
  },
];
