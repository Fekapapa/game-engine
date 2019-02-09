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
            { "x": 940, "y": 150 },
            { "x": 690, "y": 380 },
            { "x": 660, "y": 380 },
            { "x": 400, "y": 150 },
            { "x": 240, "y": 150 },
            { "x": 150, "y": 112 }
          ],
          "route2":
          [
            { "x": 940, "y": 130 },
            { "x": 690, "y": 360 },
            { "x": 660, "y": 360 },
            { "x": 400, "y": 130 },
            { "x": 240, "y": 130 },
            { "x": 150, "y": 112 }
          ],
          "units":
          [
            { "name": "orcEnemy", "route": "route1", "position": { "x": 1150, "y": 150 }},
            { "name": "orcEnemy", "route": "route2", "position": { "x": 1200, "y": 130 }},
            { "name": "orcEnemy", "route": "route1", "position": { "x": 1250, "y": 150 }}
          ]
        }
      }]
    ]
  )
}

export { MapData };
