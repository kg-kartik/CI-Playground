module.exports.testfunc = (name) => {
    const message = "hye";

    if(!name) {
        return `${message} kartik`
    }
    else {
        return `${message} ${name}`
    }

}
