'use strict'

const MapData = () => {
  //maps, waves, units in waves

  return (
    [
      [{
        "wave01":
        {
          "route1":
          [
            { "x": 970, "y": 150 },
            { "x": 720, "y": 380 },
            { "x": 690, "y": 380 },
            { "x": 430, "y": 150 },
            { "x": 270, "y": 150 },
            { "x": 180, "y": 112 }
          ],
          "route2":
          [
            { "x": 970, "y": 130 },
            { "x": 720, "y": 360 },
            { "x": 690, "y": 360 },
            { "x": 430, "y": 130 },
            { "x": 270, "y": 130 },
            { "x": 180, "y": 112 }
          ],
          "units":
          [
            { "name": "orc", "route": "route1", "coordinates": { "x": 1150, "y": 150 }},
            { "name": "orc", "route": "route2", "coordinates": { "x": 1200, "y": 130 }},
            { "name": "orc", "route": "route1", "coordinates": { "x": 1250, "y": 150 }}
          ]
        }
      }]
    ]
  )
}

export { MapData };
