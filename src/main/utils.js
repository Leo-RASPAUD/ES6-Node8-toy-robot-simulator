const checkPlaceArguments = (positionX, positionY, direction) => {
    const numberType = 'number';
    if (!positionX || !positionY || !direction) {
        throw new Error('Simulator.place() : Should take exactly 3 argument');
    }

    if (typeof positionX !== numberType || typeof positionY !== numberType || typeof direction !== 'string') {
        throw new Error('Simulator.place() : Wrong argument type');
    }
}

export default {
    checkPlaceArguments
}