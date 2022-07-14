const randomColor = (opacity) => {
    const R = Math.round(Math.random() * 256);
    const G = Math.round(Math.random() * 256);
    const B = Math.round(Math.random() * 256);

    let randomColor = `rgba(${R},${G},${B}, ${opacity})`;
    return randomColor;
};

export default randomColor;

