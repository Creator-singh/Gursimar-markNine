import React, { useState } from "react";
import "./styles.css";

const travelDB = {
  Kargil: [
    {
      name: "Sankoo - Suru Valley",
      rating: "10/10",
      disp:
        "Sankoo is a town in the Kargil district of the union territory of Ladakh in India.The township is 42 km away towards south from Kargil City."
    },
    {
      name: "Dras Valley",
      rating: "10/10",
      disp:
        "Dras is a hill station in the Kargil district of the union territory of Ladakh in India. It is on the NH 1 (former name NH 1D before renumbering of all national highways) between Zoji La pass and Kargil town."
    },
    {
      name: "Mushkoh Valley",
      rating: "10/10",
      disp:
        "The Mushkoh Valley is a valley situated in Dras. Also known as valley of wild tulips, which are a major attraction for tourists but it's yet to explore. Located within the Indian-administered union territory of Ladakh. Widely considered to be glaciated and unsuitable for human habitation, it came into prominence during the Kargil War in 1999, when Pakistani forces crossed the Line of Control and took up positions in the region."
    }
  ],

  Leh: [
    {
      name: "Pangong Tso Lake",
      rating: "10/10",
      disp:
        "Pangong Tso or Pangong Lake is an endorheic lake spanning eastern Ladakh and West Tibet situated at an elevation of 4,225 m . It is 134 km long and divided into five sublakes, called Pangong Tso, Tso Nyak, Rum Tso and Nyak Tso."
    },
    {
      name: "Shanti Stupa",
      rating: "10/10",
      disp:
        "Shanti Stupa is a Buddhist white-domed stupa (chorten) on a hilltop in Chanspa, Leh district, Ladakh, in north India. It was built in 1991 by Japanese Buddhist Bhikshu, Gyomyo Nakamura and part of the Peace Pagoda mission."
    },
    {
      name: "Gurdwara Pathar Sahib",
      rating: "10/10",
      disp:
        "Gurdwara Pathar Sahib, is a beautiful Gurudwara sahib constructed in the memory of Guru Nanak, about 25 miles away from Leh, on the Leh-Kargil road, 12000 ft above sea level. The Gurdwara was built in 1517 to commemorate the visit to the Ladakh region of Guru Nanak Dev, the founder Guru of the Sikh faith."
    }
  ],

  Nubra: [
    {
      name: "Turtuk Village",
      rating: "10/10",
      disp:
        "Turtuk is a small village in the Indian union territory of Ladakh. Turtuk is one of the nothermost village of India, second only to Murgo Village, the northernmost village of India. Turtuk is situated in the Leh district of the Nubra Valley. It is 205 km from Leh, the district headquarters, and 2.5 km from the Line of Control between India and Pakistan."
    },
    {
      name: "Hundar Sand Dunes",
      rating: "10/10",
      disp:
        "The sand dunes aren't high but you can treat this as a visit to one of the highest cold deserts in the world. This Place is located in Nubra Valley Ladakh (UT) India. The Hunder is the coldest desert in India. The sand-dunes, covered with desertious mountain, is breathtaking. Sand dunes, on the bank of the river, give a spectacular view."
    },
    {
      name: "Diskit Monastery",
      rating: "10/10",
      disp:
        "Diskit Monastery also known as Deskit Gompa or Diskit Gompa is the oldest and largest Buddhist monastery in the Nubra Valley of Ladakh, northern India. It belongs to the Gelugpa sect of Tibetan Buddhism. It was founded by Changzem Tserab Zangpo, a disciple of Tsong Khapa, founder of Gelugpa, in the 14th century."
    }
  ],

  Zanskar: [
    {
      name: "Sani Monastery",
      rating: "10/10",
      disp:
        "Sani Monasteryis situated in Zanskar in Jammu and Kashmir, 6km to the west of Padum. Sani monastery is also known as Turtot Gyat and it is considered to be one of the eight holy places of the Buddhist."
    },
    {
      name: "Stongday Monastery",
      rating: "10/10",
      disp:
        "Stongdey Monastery, often written Stongde, Stongday, Tonday or Thonde, is a flourishing Buddhist monastery in Zanskar, Ladakh, northern India, approximately 18 km north of Padum, on the road to Zangla. The gompa was founded in 1052 by Naropa's disciple, the famous translator Lama Marpa Lotsawa (1012-1097)."
    },
    {
      name: "Stat Tso Lake and Lang Tso Lake",
      rating: "10/10",
      disp:
        "The Stat Tso Lake and Lang Tso Lake are twin lakes located at the Pensi La Pass at the Zanskar Valley. The two lakes are separated by about 200 meters only. They are located at and altitude ot about 14,435 feet. Since they are far from Leh the lakes are less popular for visitors. It would take atleast two days to reach these lakes, but they are worth a visit."
    }
  ]
};

var travelData = Object.keys(travelDB);

export default function App() {
  const [selecteddestination, setDestination] = useState("Leh");
  function destinationClickHandler(destination) {
    setDestination(destination);
  }

  return (
    <div className="App">
      <h1>🧳goodTravel</h1>
      <p id="paragraph">Checkout my favorite go to places in Ladakh.</p>

      <div>
        {travelData.map((destination) => (
          <button
            onClick={() => destinationClickHandler(destination)}
            style={{
              cursor: "pointer",
              background: "#D1D5DB"
            }}
          >
            {destination}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selecteddestination].map((place) => (
            <li
              key={place.name}
              style={{
                listStyle: "none",
                background: "#D1D5DB",
                padding: "1rem",
                border: "1px solid",
                width: "60%",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{place.name}</div>
              <div
                style={{
                  fontSize: "smaller",
                  background: "#9CA3AF",
                  width: "2rem",
                  padding: "0.1rem 0.2rem"
                }}
              >
                {place.rating}
              </div>
              <div>{place.disp}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
