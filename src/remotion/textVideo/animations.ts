export const fade = {
    delimiter: '',
    opacity: [0, 1],
    x: [0, 0],
    y: [0, 0],
    scale: [1, 1],
    rotate: [0, 0],
    word: true,
    hideLoading: false,
    refRange: [0, 100], // Can be any length and all other properties should also be of same length
    duration: 30, // Using this you can control for how long each part should animate in frames
};

export const spring = {
    delimiter: '',
    word: false,
    hideLoading: false,
    scale: [1, 2, 1.5, 1],
    refRange: [0, 33, 66, 100], // Can be any length and all other properties should also be of same length
    duration: 0.1, // Using this you can control for how long each part should animate in frames

};