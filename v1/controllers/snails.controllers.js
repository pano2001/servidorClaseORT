import { randomInRange } from '../utils/numbers.utils.js';

export const getSnails = (req, res) => {

    const snails = [
        {
            name: "Helicol",
            speed: randomInRange(2, 5),
            acceleration: randomInRange(1, 2),
            stickiness: randomInRange(2, 3),
            id: 'snail-0'
        },
        { name: "Magicol", speed: randomInRange(3, 4), acceleration: randomInRange(4, 5), stickiness: randomInRange(2, 3), id: 'snail-1' },
        { name: "Mecanicol", speed: randomInRange(3, 4), acceleration: randomInRange(1, 2), stickiness: randomInRange(1, 2), id: 'snail-2' },
        { name: "Turbocol", speed: randomInRange(2, 4), acceleration: randomInRange(3, 5), stickiness: randomInRange(2, 3), id: 'snail-3' }
    ];

    res.json({ snails });
}

/* 
const snailData = [
    {
        name: "Helicol",
        speedMax:5,
        speedMin:2,
        acceleration: randomInRange(1, 2),
        stickiness: randomInRange(2, 3),
        id: 'snail-0'
    },
    { name: "Magicol", speed: randomInRange(3, 4), acceleration: randomInRange(4, 5), stickiness: randomInRange(2, 3), id: 'snail-1' },
    { name: "Mecanicol", speed: randomInRange(3, 4), acceleration: randomInRange(1, 2), stickiness: randomInRange(1, 2), id: 'snail-2' },
    { name: "Turbocol", speed: randomInRange(2, 4), acceleration: randomInRange(3, 5), stickiness: randomInRange(2, 3), id: 'snail-3' }
];

export const getSnails = (req, res) => {
    const snails = snailData.map(snail => ({
        name: snail.name,
        speed: randomInRange(snail.speedMin, snail.speedMax),
        acceleration: snail.acceleration,
        stickiness: snail.stickiness,
        id: snail.id
    }));
    res.json({ snails });
}
 */